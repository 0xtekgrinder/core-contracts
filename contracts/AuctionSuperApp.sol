// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {ISuperfluid, ISuperToken, ISuperApp, ISuperAgreement, ContextDefinitions, SuperAppDefinitions} from "@superfluid-finance/ethereum-contracts/contracts/interfaces/superfluid/ISuperfluid.sol";
import {IConstantFlowAgreementV1} from "@superfluid-finance/ethereum-contracts/contracts/interfaces/agreements/IConstantFlowAgreementV1.sol";
import {SuperAppBase} from "@superfluid-finance/ethereum-contracts/contracts/apps/SuperAppBase.sol";
import "@openzeppelin/contracts/access/AccessControlEnumerable.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "./interfaces/IClaimer.sol";

contract AuctionSuperApp is SuperAppBase, AccessControlEnumerable, Pausable {
    bytes32 public constant PAUSE_ROLE = keccak256("PAUSE_ROLE");

    ISuperfluid private host; // host
    IConstantFlowAgreementV1 private cfa; // the stored constant flow agreement class address
    ISuperToken private acceptedToken; // accepted token

    IClaimer private claimer;
    address public receiver;

    enum Action {
        CLAIM,
        BID
    }

    constructor(
        ISuperfluid _host,
        IConstantFlowAgreementV1 _cfa,
        ISuperToken _acceptedToken,
        address _receiver
    ) {
        require(address(_host) != address(0), "host is zero address");
        require(address(_cfa) != address(0), "cfa is zero address");
        require(
            address(_acceptedToken) != address(0),
            "acceptedToken is zero address"
        );
        require(address(_receiver) != address(0), "receiver is zero address");
        require(!_host.isApp(ISuperApp(_receiver)), "receiver is an app");

        host = _host;
        cfa = _cfa;
        acceptedToken = _acceptedToken;
        receiver = _receiver;

        uint256 configWord = SuperAppDefinitions.APP_LEVEL_FINAL |
            SuperAppDefinitions.BEFORE_AGREEMENT_CREATED_NOOP;

        host.registerApp(configWord);

        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _setupRole(PAUSE_ROLE, msg.sender);
    }

    /**
     * @notice Admin can update the claimer.
     * @param _claimer The new claimer address
     * @custom:requires DEFAULT_ADMIN_ROLE
     */
    function setClaimer(address _claimer)
        external
        onlyRole(DEFAULT_ADMIN_ROLE)
    {
        claimer = IClaimer(_claimer);
    }

    /**
     * @notice Admin can update the receiver.
     * @param _receiver The new receiver of contributions
     * @custom:requires DEFAULT_ADMIN_ROLE
     */
    function setReceiver(address _receiver)
        external
        onlyRole(DEFAULT_ADMIN_ROLE)
    {
        require(!host.isApp(ISuperApp(_receiver)), "receiver is an app");

        (, int96 flowRate, , ) = cfa.getFlow(
            acceptedToken,
            address(this),
            receiver
        );

        if (flowRate > 0) {
            // Create flow to new receiver
            host.callAgreement(
                cfa,
                abi.encodeWithSelector(
                    cfa.createFlow.selector,
                    acceptedToken,
                    _receiver,
                    flowRate,
                    new bytes(0)
                ),
                "0x"
            );

            // Delete flow to old receiver
            host.callAgreement(
                cfa,
                abi.encodeWithSelector(
                    cfa.deleteFlow.selector,
                    acceptedToken,
                    address(this),
                    receiver,
                    new bytes(0)
                ),
                "0x"
            );
        }

        receiver = _receiver;
    }

    /**
     * @notice Pause the contract. Pauses payments and setting contribution rates.
     * @custom:requires PAUSE_ROLE
     */
    function pause() external onlyRole(PAUSE_ROLE) {
        _pause();
    }

    /**
     * @notice Unpause the contract.
     * @custom:requires PAUSE_ROLE
     */
    function unpause() external onlyRole(PAUSE_ROLE) {
        _unpause();
    }

    function _increaseAppToReceiverFlow(bytes memory ctx, int96 amount)
        private
        returns (bytes memory newCtx)
    {
        (, int96 flowRate, , ) = cfa.getFlow(
            acceptedToken,
            address(this),
            receiver
        );

        if (flowRate > 0) {
            (newCtx, ) = host.callAgreementWithContext(
                cfa,
                abi.encodeWithSelector(
                    cfa.updateFlow.selector,
                    acceptedToken,
                    receiver,
                    flowRate + amount,
                    new bytes(0)
                ),
                "0x",
                ctx
            );
        } else {
            (newCtx, ) = host.callAgreementWithContext(
                cfa,
                abi.encodeWithSelector(
                    cfa.createFlow.selector,
                    acceptedToken,
                    receiver,
                    amount,
                    new bytes(0)
                ),
                "0x",
                ctx
            );
        }
    }

    function _decreaseAppToReceiverFlow(bytes memory ctx, int96 amount)
        private
        returns (bytes memory newCtx)
    {
        (, int96 flowRate, , ) = cfa.getFlow(
            acceptedToken,
            address(this),
            receiver
        );

        if (amount < flowRate) {
            (newCtx, ) = host.callAgreementWithContext(
                cfa,
                abi.encodeWithSelector(
                    cfa.updateFlow.selector,
                    acceptedToken,
                    receiver,
                    flowRate - amount,
                    new bytes(0)
                ),
                "0x",
                ctx
            );
        } else if (flowRate > 0) {
            (newCtx, ) = host.callAgreementWithContext(
                cfa,
                abi.encodeWithSelector(
                    cfa.deleteFlow.selector,
                    acceptedToken,
                    address(this),
                    receiver,
                    new bytes(0)
                ),
                "0x",
                ctx
            );
        }
    }

    // function _increaseAppToUserFlow(address user, int96 amount) private {
    //     (, int96 flowRate, , ) = cfa.getFlow(
    //         acceptedToken,
    //         address(this),
    //         user
    //     );
    //     if (flowRate > 0) {
    //         host.callAgreement(
    //             cfa,
    //             abi.encodeWithSelector(
    //                 cfa.updateFlow.selector,
    //                 acceptedToken,
    //                 user,
    //                 flowRate + amount,
    //                 new bytes(0)
    //             ),
    //             "0x"
    //         );
    //     } else {
    //         host.callAgreement(
    //             cfa,
    //             abi.encodeWithSelector(
    //                 cfa.createFlow.selector,
    //                 acceptedToken,
    //                 user,
    //                 amount,
    //                 new bytes(0)
    //             ),
    //             "0x"
    //         );
    //     }
    // }

    function _deleteAppToUserFlow(bytes memory ctx, address user)
        private
        returns (bytes memory newCtx, int96 amountDeleted)
    {
        (, int96 flowRate, , ) = cfa.getFlow(
            acceptedToken,
            address(this),
            user
        );

        newCtx = ctx;
        amountDeleted = flowRate;

        if (flowRate > 0) {
            (newCtx, ) = host.callAgreementWithContext(
                cfa,
                abi.encodeWithSelector(
                    cfa.deleteFlow.selector,
                    acceptedToken,
                    address(this),
                    user,
                    new bytes(0)
                ),
                "0x",
                newCtx
            );
        }
    }

    function _onIncreaseUserToApp(
        bytes memory _ctx,
        address user,
        int96 increasedFlowRate
    ) private returns (bytes memory newCtx) {
        ISuperfluid.Context memory decompiledContext = host.decodeCtx(_ctx);
        (Action action, bytes memory actionData) = abi.decode(
            decompiledContext.userData,
            (Action, bytes)
        );

        if (action == Action.CLAIM) {
            return _claim(_ctx, user, increasedFlowRate, actionData);
        } else if (action == Action.BID) {
            return _ctx;
        } else {
            revert("AuctionSuperApp: Unknown Action");
        }
    }

    function _onDecreaseUserToApp(
        bytes memory _ctx,
        address user,
        int96 decreasedFlowRate
    ) private returns (bytes memory newCtx) {
        ISuperfluid.Context memory decompiledContext = host.decodeCtx(_ctx);
        (Action action, bytes memory actionData) = abi.decode(
            decompiledContext.userData,
            (Action, bytes)
        );

        if (action == Action.CLAIM) {
            revert("AuctionSuperApp: Cannot decrease flow on CLAIM");
        } else if (action == Action.BID) {
            return _ctx;
        } else {
            revert("AuctionSuperApp: Unknown Action");
        }
    }

    function _onDeleteUserToApp(
        bytes calldata _ctx,
        address user,
        int96 decreasedFlowRate
    ) private returns (bytes memory newCtx) {
        // Delete app -> user flow
        int96 decreasedAmount;
        (newCtx, decreasedAmount) = _deleteAppToUserFlow(_ctx, user);

        // Decrease app -> receiver flow by remaining
        newCtx = _decreaseAppToReceiverFlow(
            newCtx,
            decreasedFlowRate - decreasedAmount
        );
    }

    function _claim(
        bytes memory _ctx,
        address user,
        int96 initialContributionRate,
        bytes memory claimData
    ) private returns (bytes memory newCtx) {
        // Get claim price
        uint256 claimPrice = claimer.claimPrice(
            user,
            initialContributionRate,
            claimData
        );

        // Collect claim payment
        bool success = acceptedToken.transferFrom(user, receiver, claimPrice);
        require(success, "AuctionSuperApp: Claim payment failed");

        // Process claim
        claimer.claim(user, initialContributionRate, claimData);

        // Increase app -> receiver flow
        newCtx = _increaseAppToReceiverFlow(_ctx, initialContributionRate);
    }

    /**************************************************************************
     * SuperApp callbacks
     *************************************************************************/

    function afterAgreementCreated(
        ISuperToken _superToken,
        address _agreementClass,
        bytes32 _agreementId,
        bytes calldata _agreementData,
        bytes calldata, // _cbdata,
        bytes calldata _ctx
    )
        external
        override
        onlyExpected(_superToken, _agreementClass)
        onlyHost
        whenNotPaused
        returns (bytes memory newCtx)
    {
        (address user, ) = abi.decode(_agreementData, (address, address));
        (, int96 flowRate, , ) = cfa.getFlowByID(acceptedToken, _agreementId);

        return _onIncreaseUserToApp(_ctx, user, flowRate);
    }

    function beforeAgreementUpdated(
        ISuperToken _superToken,
        address _agreementClass,
        bytes32 _agreementId,
        bytes calldata,
        bytes calldata
    )
        external
        view
        override
        onlyExpected(_superToken, _agreementClass)
        onlyHost
        whenNotPaused
        returns (bytes memory cbdata)
    {
        (, int96 flowRate, , ) = cfa.getFlowByID(acceptedToken, _agreementId);
        cbdata = abi.encode(flowRate);
    }

    function afterAgreementUpdated(
        ISuperToken _superToken,
        address _agreementClass,
        bytes32 _agreementId,
        bytes calldata _agreementData,
        bytes calldata _cbdata,
        bytes calldata _ctx
    )
        external
        override
        onlyExpected(_superToken, _agreementClass)
        onlyHost
        whenNotPaused
        returns (bytes memory newCtx)
    {
        address user;
        {
            (address _sender, address _receiver) = abi.decode(
                _agreementData,
                (address, address)
            );
            user = _receiver == address(this) ? _sender : _receiver;
        }

        int96 originalFlowRate = abi.decode(_cbdata, (int96));
        (, int96 flowRate, , ) = cfa.getFlowByID(acceptedToken, _agreementId);

        if (originalFlowRate < flowRate) {
            return
                _onIncreaseUserToApp(_ctx, user, flowRate - originalFlowRate);
        } else {
            return
                _onDecreaseUserToApp(_ctx, user, originalFlowRate - flowRate);
        }
    }

    function beforeAgreementTerminated(
        ISuperToken _superToken,
        address _agreementClass,
        bytes32 _agreementId,
        bytes calldata,
        bytes calldata
    ) external view override onlyHost returns (bytes memory cbdata) {
        (, int96 flowRate, , ) = cfa.getFlowByID(acceptedToken, _agreementId);
        cbdata = abi.encode(flowRate);
    }

    function afterAgreementTerminated(
        ISuperToken _superToken,
        address _agreementClass,
        bytes32 _agreementId,
        bytes calldata _agreementData,
        bytes calldata _cbdata,
        bytes calldata _ctx
    ) external override onlyHost returns (bytes memory newCtx) {
        // According to the app basic law, we should never revert in a termination callback
        if (!_isSameToken(_superToken) || !_isCFAv1(_agreementClass))
            return _ctx;

        address user;
        {
            (address _sender, address _receiver) = abi.decode(
                _agreementData,
                (address, address)
            );
            user = _receiver == address(this) ? _sender : _receiver;
        }

        int96 originalFlowRate = abi.decode(_cbdata, (int96));
        (, int96 flowRate, , ) = cfa.getFlowByID(acceptedToken, _agreementId);

        return _onDeleteUserToApp(_ctx, user, originalFlowRate - flowRate);
    }

    function _isSameToken(ISuperToken superToken) private view returns (bool) {
        return address(superToken) == address(acceptedToken);
    }

    function _isCFAv1(address agreementClass) private view returns (bool) {
        return
            ISuperAgreement(agreementClass).agreementType() ==
            keccak256(
                "org.superfluid-finance.agreements.ConstantFlowAgreement.v1"
            );
    }

    modifier onlyHost() {
        require(
            msg.sender == address(host),
            "CollectorSuperApp: support only one host"
        );
        _;
    }

    modifier onlyExpected(ISuperToken superToken, address agreementClass) {
        require(
            _isSameToken(superToken),
            "CollectorSuperApp: not accepted token"
        );
        require(
            _isCFAv1(agreementClass),
            "CollectorSuperApp: only CFAv1 supported"
        );
        _;
    }
}
