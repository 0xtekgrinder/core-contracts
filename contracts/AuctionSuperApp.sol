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
            SuperAppDefinitions.BEFORE_AGREEMENT_CREATED_NOOP |
            SuperAppDefinitions.BEFORE_AGREEMENT_UPDATED_NOOP |
            SuperAppDefinitions.BEFORE_AGREEMENT_TERMINATED_NOOP;

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

    // function _increaseAppToReceiverFlow(int96 amount) private {
    //     (, int96 flowRate, , ) = cfa.getFlow(
    //         acceptedToken,
    //         address(this),
    //         receiver
    //     );

    //     if (flowRate > 0) {
    //         host.callAgreement(
    //             cfa,
    //             abi.encodeWithSelector(
    //                 cfa.updateFlow.selector,
    //                 acceptedToken,
    //                 receiver,
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
    //                 receiver,
    //                 amount,
    //                 new bytes(0)
    //             ),
    //             "0x"
    //         );
    //     }
    // }

    // function _decreaseAppToReceiverFlow(int96 amount) private {
    //     (, int96 flowRate, , ) = cfa.getFlow(
    //         acceptedToken,
    //         address(this),
    //         receiver
    //     );

    //     if (amount < flowRate) {
    //         host.callAgreement(
    //             cfa,
    //             abi.encodeWithSelector(
    //                 cfa.updateFlow.selector,
    //                 acceptedToken,
    //                 receiver,
    //                 flowRate - amount,
    //                 new bytes(0)
    //             ),
    //             "0x"
    //         );
    //     } else if (flowRate > 0) {
    //         host.callAgreement(
    //             cfa,
    //             abi.encodeWithSelector(
    //                 cfa.deleteFlow.selector,
    //                 acceptedToken,
    //                 address(this),
    //                 receiver,
    //                 new bytes(0)
    //             ),
    //             "0x"
    //         );
    //     }
    // }

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

    // function _decreaseAppToUserFlow(address user, int96 amount) private {
    //     (, int96 flowRate, , ) = cfa.getFlow(
    //         acceptedToken,
    //         address(this),
    //         user
    //     );

    //     if (amount < flowRate) {
    //         host.callAgreement(
    //             cfa,
    //             abi.encodeWithSelector(
    //                 cfa.updateFlow.selector,
    //                 acceptedToken,
    //                 user,
    //                 flowRate - amount,
    //                 new bytes(0)
    //             ),
    //             "0x"
    //         );
    //     } else if (flowRate > 0) {
    //         host.callAgreement(
    //             cfa,
    //             abi.encodeWithSelector(
    //                 cfa.deleteFlow.selector,
    //                 acceptedToken,
    //                 address(this),
    //                 user,
    //                 new bytes(0)
    //             ),
    //             "0x"
    //         );
    //     }
    // }

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
        return _ctx;
    }

    function afterAgreementUpdated(
        ISuperToken _superToken,
        address _agreementClass,
        bytes32 _agreementId,
        bytes calldata _agreementData,
        bytes calldata, //_cbdata,
        bytes calldata _ctx
    )
        external
        override
        onlyExpected(_superToken, _agreementClass)
        onlyHost
        whenNotPaused
        returns (bytes memory newCtx)
    {
        return _ctx;
    }

    function afterAgreementTerminated(
        ISuperToken _superToken,
        address _agreementClass,
        bytes32, // _agreementId,
        bytes calldata _agreementData,
        bytes calldata, //_cbdata,
        bytes calldata _ctx
    ) external override onlyHost returns (bytes memory newCtx) {
        // According to the app basic law, we should never revert in a termination callback
        if (!_isSameToken(_superToken) || !_isCFAv1(_agreementClass))
            return _ctx;

        newCtx = _ctx;
        return newCtx;
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