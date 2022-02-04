"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockERC721License__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "string",
                name: "name",
                type: "string",
            },
            {
                internalType: "string",
                name: "symbol",
                type: "string",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "approved",
                type: "address",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "Approval",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "operator",
                type: "address",
            },
            {
                indexed: false,
                internalType: "bool",
                name: "approved",
                type: "bool",
            },
        ],
        name: "ApprovalForAll",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "Transfer",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "approve",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
        ],
        name: "balanceOf",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "baseURI",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "burn",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "exists",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "getApproved",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                internalType: "address",
                name: "operator",
                type: "address",
            },
        ],
        name: "isApprovedForAll",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "mint",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "name",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "ownerOf",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "_data",
                type: "bytes",
            },
        ],
        name: "safeMint",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "safeMint",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "safeTransferFrom",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "_data",
                type: "bytes",
            },
        ],
        name: "safeTransferFrom",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "operator",
                type: "address",
            },
            {
                internalType: "bool",
                name: "approved",
                type: "bool",
            },
        ],
        name: "setApprovalForAll",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes4",
                name: "interfaceId",
                type: "bytes4",
            },
        ],
        name: "supportsInterface",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "symbol",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "tokenURI",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "transferFrom",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x60806040523480156200001157600080fd5b5060405162001899380380620018998339810160408190526200003491620001c7565b8151829082906200004d9060009060208501906200006e565b508051620000639060019060208401906200006e565b505050505062000281565b8280546200007c906200022e565b90600052602060002090601f016020900481019282620000a05760008555620000eb565b82601f10620000bb57805160ff1916838001178555620000eb565b82800160010185558215620000eb579182015b82811115620000eb578251825591602001919060010190620000ce565b50620000f9929150620000fd565b5090565b5b80821115620000f95760008155600101620000fe565b600082601f83011262000125578081fd5b81516001600160401b03808211156200014257620001426200026b565b604051601f8301601f19908116603f011681019082821181831017156200016d576200016d6200026b565b8160405283815260209250868385880101111562000189578485fd5b8491505b83821015620001ac57858201830151818301840152908201906200018d565b83821115620001bd57848385830101525b9695505050505050565b60008060408385031215620001da578182fd5b82516001600160401b0380821115620001f1578384fd5b620001ff8683870162000114565b9350602085015191508082111562000215578283fd5b50620002248582860162000114565b9150509250929050565b600181811c908216806200024357607f821691505b602082108114156200026557634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b61160880620002916000396000f3fe608060405234801561001057600080fd5b50600436106101215760003560e01c80636352211e116100ad578063a144819411610071578063a144819414610259578063a22cb4651461026c578063b88d4fde1461027f578063c87b56dd14610292578063e985e9c5146102a557600080fd5b80636352211e146102025780636c0360eb1461021557806370a082311461021d5780638832e6e31461023e57806395d89b411461025157600080fd5b806323b872dd116100f457806323b872dd146101a357806340c10f19146101b657806342842e0e146101c957806342966c68146101dc5780634f558e79146101ef57600080fd5b806301ffc9a71461012657806306fdde031461014e578063081812fc14610163578063095ea7b31461018e575b600080fd5b610139610134366004611303565b6102e1565b60405190151581526020015b60405180910390f35b610156610333565b60405161014591906113eb565b61017661017136600461133b565b6103c5565b6040516001600160a01b039091168152602001610145565b6101a161019c366004611285565b61045f565b005b6101a16101b13660046111aa565b610575565b6101a16101c4366004611285565b6105a6565b6101a16101d73660046111aa565b6105b4565b6101a16101ea36600461133b565b6105cf565b6101396101fd36600461133b565b6105db565b61017661021036600461133b565b6105fa565b610156610671565b61023061022b36600461115e565b61068d565b604051908152602001610145565b6101a161024c3660046112ae565b610714565b61015661071f565b6101a1610267366004611285565b61072e565b6101a161027a36600461124b565b610738565b6101a161028d3660046111e5565b610743565b6101566102a036600461133b565b61077b565b6101396102b3366004611178565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b60006001600160e01b031982166380ac58cd60e01b148061031257506001600160e01b03198216635b5e139f60e01b145b8061032d57506301ffc9a760e01b6001600160e01b03198316145b92915050565b60606000805461034290611510565b80601f016020809104026020016040519081016040528092919081815260200182805461036e90611510565b80156103bb5780601f10610390576101008083540402835291602001916103bb565b820191906000526020600020905b81548152906001019060200180831161039e57829003601f168201915b5050505050905090565b6000818152600260205260408120546001600160a01b03166104435760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084015b60405180910390fd5b506000908152600460205260409020546001600160a01b031690565b600061046a826105fa565b9050806001600160a01b0316836001600160a01b031614156104d85760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b606482015260840161043a565b336001600160a01b03821614806104f457506104f481336102b3565b6105665760405162461bcd60e51b815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760448201527f6e6572206e6f7220617070726f76656420666f7220616c6c0000000000000000606482015260840161043a565b6105708383610863565b505050565b61057f33826108d1565b61059b5760405162461bcd60e51b815260040161043a90611450565b6105708383836109c8565b6105b08282610b68565b5050565b61057083838360405180602001604052806000815250610743565b6105d881610caa565b50565b6000818152600260205260408120546001600160a01b0316151561032d565b6000818152600260205260408120546001600160a01b03168061032d5760405162461bcd60e51b815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201526832b73a103a37b5b2b760b91b606482015260840161043a565b606061068860408051602081019091526000815290565b905090565b60006001600160a01b0382166106f85760405162461bcd60e51b815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a65604482015269726f206164647265737360b01b606482015260840161043a565b506001600160a01b031660009081526003602052604090205490565b610570838383610d45565b60606001805461034290611510565b6105b08282610d78565b6105b0338383610d92565b61074d33836108d1565b6107695760405162461bcd60e51b815260040161043a90611450565b61077584848484610e61565b50505050565b6000818152600260205260409020546060906001600160a01b03166107fa5760405162461bcd60e51b815260206004820152602f60248201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60448201526e3732bc34b9ba32b73a103a37b5b2b760891b606482015260840161043a565b600061081160408051602081019091526000815290565b90506000815111610831576040518060200160405280600081525061085c565b8061083b84610e94565b60405160200161084c92919061137f565b6040516020818303038152906040525b9392505050565b600081815260046020526040902080546001600160a01b0319166001600160a01b0384169081179091558190610898826105fa565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000818152600260205260408120546001600160a01b031661094a5760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b606482015260840161043a565b6000610955836105fa565b9050806001600160a01b0316846001600160a01b031614806109905750836001600160a01b0316610985846103c5565b6001600160a01b0316145b806109c057506001600160a01b0380821660009081526005602090815260408083209388168352929052205460ff165b949350505050565b826001600160a01b03166109db826105fa565b6001600160a01b031614610a435760405162461bcd60e51b815260206004820152602960248201527f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960448201526839903737ba1037bbb760b91b606482015260840161043a565b6001600160a01b038216610aa55760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b606482015260840161043a565b610ab0600082610863565b6001600160a01b0383166000908152600360205260408120805460019290610ad99084906114cd565b90915550506001600160a01b0382166000908152600360205260408120805460019290610b079084906114a1565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b6001600160a01b038216610bbe5760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f2061646472657373604482015260640161043a565b6000818152600260205260409020546001600160a01b031615610c235760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000604482015260640161043a565b6001600160a01b0382166000908152600360205260408120805460019290610c4c9084906114a1565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b6000610cb5826105fa565b9050610cc2600083610863565b6001600160a01b0381166000908152600360205260408120805460019290610ceb9084906114cd565b909155505060008281526002602052604080822080546001600160a01b0319169055518391906001600160a01b038416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a45050565b610d4f8383610b68565b610d5c6000848484610fae565b6105705760405162461bcd60e51b815260040161043a906113fe565b6105b0828260405180602001604052806000815250610d45565b816001600160a01b0316836001600160a01b03161415610df45760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c657200000000000000604482015260640161043a565b6001600160a01b03838116600081815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b610e6c8484846109c8565b610e7884848484610fae565b6107755760405162461bcd60e51b815260040161043a906113fe565b606081610eb85750506040805180820190915260018152600360fc1b602082015290565b8160005b8115610ee25780610ecc8161154b565b9150610edb9050600a836114b9565b9150610ebc565b60008167ffffffffffffffff811115610f0b57634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015610f35576020820181803683370190505b5090505b84156109c057610f4a6001836114cd565b9150610f57600a86611566565b610f629060306114a1565b60f81b818381518110610f8557634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a905350610fa7600a866114b9565b9450610f39565b60006001600160a01b0384163b156110b057604051630a85bd0160e11b81526001600160a01b0385169063150b7a0290610ff29033908990889088906004016113ae565b602060405180830381600087803b15801561100c57600080fd5b505af192505050801561103c575060408051601f3d908101601f191682019092526110399181019061131f565b60015b611096573d80801561106a576040519150601f19603f3d011682016040523d82523d6000602084013e61106f565b606091505b50805161108e5760405162461bcd60e51b815260040161043a906113fe565b805181602001fd5b6001600160e01b031916630a85bd0160e11b1490506109c0565b506001949350505050565b80356001600160a01b03811681146110d257600080fd5b919050565b600082601f8301126110e7578081fd5b813567ffffffffffffffff80821115611102576111026115a6565b604051601f8301601f19908116603f0116810190828211818310171561112a5761112a6115a6565b81604052838152866020858801011115611142578485fd5b8360208701602083013792830160200193909352509392505050565b60006020828403121561116f578081fd5b61085c826110bb565b6000806040838503121561118a578081fd5b611193836110bb565b91506111a1602084016110bb565b90509250929050565b6000806000606084860312156111be578081fd5b6111c7846110bb565b92506111d5602085016110bb565b9150604084013590509250925092565b600080600080608085870312156111fa578081fd5b611203856110bb565b9350611211602086016110bb565b925060408501359150606085013567ffffffffffffffff811115611233578182fd5b61123f878288016110d7565b91505092959194509250565b6000806040838503121561125d578182fd5b611266836110bb565b91506020830135801515811461127a578182fd5b809150509250929050565b60008060408385031215611297578182fd5b6112a0836110bb565b946020939093013593505050565b6000806000606084860312156112c2578283fd5b6112cb846110bb565b925060208401359150604084013567ffffffffffffffff8111156112ed578182fd5b6112f9868287016110d7565b9150509250925092565b600060208284031215611314578081fd5b813561085c816115bc565b600060208284031215611330578081fd5b815161085c816115bc565b60006020828403121561134c578081fd5b5035919050565b6000815180845261136b8160208601602086016114e4565b601f01601f19169290920160200192915050565b600083516113918184602088016114e4565b8351908301906113a58183602088016114e4565b01949350505050565b6001600160a01b03858116825284166020820152604081018390526080606082018190526000906113e190830184611353565b9695505050505050565b60208152600061085c6020830184611353565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b60208082526031908201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f6040820152701ddb995c881b9bdc88185c1c1c9bdd9959607a1b606082015260800190565b600082198211156114b4576114b461157a565b500190565b6000826114c8576114c8611590565b500490565b6000828210156114df576114df61157a565b500390565b60005b838110156114ff5781810151838201526020016114e7565b838111156107755750506000910152565b600181811c9082168061152457607f821691505b6020821081141561154557634e487b7160e01b600052602260045260246000fd5b50919050565b600060001982141561155f5761155f61157a565b5060010190565b60008261157557611575611590565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160e01b0319811681146105d857600080fdfea264697066735822122059ae085de067ffa120bc877d90872466e73160dc85a9ad67d5005a291093e03e64736f6c63430008040033";
const isSuperArgs = (xs) => xs.length > 1;
class MockERC721License__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
        this.contractName = "MockERC721License";
    }
    deploy(name, symbol, overrides) {
        return super.deploy(name, symbol, overrides || {});
    }
    getDeployTransaction(name, symbol, overrides) {
        return super.getDeployTransaction(name, symbol, overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.MockERC721License__factory = MockERC721License__factory;
MockERC721License__factory.bytecode = _bytecode;
MockERC721License__factory.abi = _abi;
