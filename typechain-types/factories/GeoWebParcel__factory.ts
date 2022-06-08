/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { GeoWebParcel, GeoWebParcelInterface } from "../GeoWebParcel";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "ParcelBuilt",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "ParcelDestroyed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "ParcelModified",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    inputs: [],
    name: "BUILD_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DESTROY_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "availabilityIndex",
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
    inputs: [
      {
        internalType: "uint64",
        name: "baseCoordinate",
        type: "uint64",
      },
      {
        internalType: "uint256[]",
        name: "path",
        type: "uint256[]",
      },
    ],
    name: "build",
    outputs: [
      {
        internalType: "uint256",
        name: "newParcelId",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "destroy",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "getLandParcel",
    outputs: [
      {
        internalType: "uint64",
        name: "baseCoordinate",
        type: "uint64",
      },
      {
        internalType: "uint256[]",
        name: "path",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
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
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611746806100206000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c80638129fc1c1161008c5780639d118770116100665780639d11877014610217578063a217fddf1461022a578063d547741f14610232578063e7feff2e1461024557600080fd5b80638129fc1c146101d5578063904316a9146101dd57806391d148541461020457600080fd5b80632f2ff15d116100c85780632f2ff15d1461016f57806331a5ee9c1461018457806336568abe146101af578063461d9a21146101c257600080fd5b806301ffc9a7146100ef5780630e32f7c514610117578063248a9ca31461014c575b600080fd5b6101026100fd366004611280565b610266565b60405190151581526020015b60405180910390f35b61013e7fd2147ab93974135a2df3767e731a4b154b72c1ec6c3fd51c2af97844245c797a81565b60405190815260200161010e565b61013e61015a36600461122e565b60009081526065602052604090206001015490565b61018261017d366004611246565b61029d565b005b61013e6101923660046112a8565b609760209081526000928352604080842090915290825290205481565b6101826101bd366004611246565b6102c7565b61013e6101d03660046112c9565b61034a565b61018261049a565b61013e7fa3c57f8c4cc23cc5478854a5475b23169fc1f2a3a08c0c03be20573f72d3d90b81565b610102610212366004611246565b61051f565b61018261022536600461122e565b61054a565b61013e600081565b610182610240366004611246565b61064a565b61025861025336600461122e565b61066f565b60405161010e929190611447565b60006001600160e01b03198216637965db0b60e01b148061029757506301ffc9a760e01b6001600160e01b03198316145b92915050565b6000828152606560205260409020600101546102b8816106ee565b6102c283836106f8565b505050565b6001600160a01b038116331461033c5760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b60648201526084015b60405180910390fd5b610346828261077e565b5050565b60007fd2147ab93974135a2df3767e731a4b154b72c1ec6c3fd51c2af97844245c797a610376816106ee565b826103d15760405162461bcd60e51b815260206004820152602560248201527f50617468206d7573742068617665206174206c65617374206f6e6520636f6d706044820152641bdb995b9d60da1b6064820152608401610333565b6104106000868686808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152506107e592505050565b6099546000908152609860205260409020805467ffffffffffffffff19166001600160401b0387161781556104496001820186866111b4565b506099546040517f10b9af39155ed127f01ba5cd8b7893608d2619511eece37bbf623781af4d70de90600090a2609980549350600190600061048b838761149d565b90915550929695505050505050565b60006104a66001610a27565b905080156104be576000805461ff0019166101001790555b6104c6610ab4565b6104d1600033610b21565b6000609955801561051c576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b50565b60009182526065602090815260408084206001600160a01b0393909316845291905290205460ff1690565b7fa3c57f8c4cc23cc5478854a5475b23169fc1f2a3a08c0c03be20573f72d3d90b610574816106ee565b60008281526098602090815260409182902080546001808301805486518187028101870190975280875293956105ed9592946001600160401b039094169390928301828280156105e357602002820191906000526020600020905b8154815260200190600101908083116105cf575b50505050506107e5565b6000838152609860205260408120805467ffffffffffffffff191681559061061860018301826111ff565b505060405183907f0ce919d8d9bad1162736e2c006df81fccb0bd0394499393e78405a2a587e375d90600090a2505050565b600082815260656020526040902060010154610665816106ee565b6102c2838361077e565b6000818152609860209081526040808320805460018201805484518187028101870190955280855260609593946001600160401b03909316939192918391908301828280156106dd57602002820191906000526020600020905b8154815260200190600101908083116106c9575b505050505090509250925050915091565b61051c8133610b2b565b610702828261051f565b6103465760008281526065602090815260408083206001600160a01b03851684529091529020805460ff1916600117905561073a3390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b610788828261051f565b156103465760008281526065602090815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b600082905060008083828151811061080d57634e487b7160e01b600052603260045260246000fd5b60200260200101519050600080600061082e866001600160401b0316610b8f565b600083815260976020908152604080832085845290915290205492955090935091505b60008a600181111561087357634e487b7160e01b600052602160045260246000fd5b14156108e45761088482600261155d565b8116156108d35760405162461bcd60e51b815260206004820152601b60248201527f436f6f7264696e617465206973206e6f7420617661696c61626c6500000000006044820152606401610333565b6108de82600261155d565b1761091d565b60018a600181111561090657634e487b7160e01b600052602160045260246000fd5b141561091d5760001961091a83600261155d565b18165b60008061092987610c19565b985090925090508161098c5761094060018961149d565b975089518810610951575050610a02565b89888151811061097157634e487b7160e01b600052603260045260246000fd5b6020026020010151965061098487610c19565b985090925090505b6000806109a56001600160401b038c16848a8a8a610c6a565b929d509197509250905087821415806109be5750868114155b156109f55760008881526097602081815260408084208b855282528084209890985584835290815286822083835290529490942054935b9096509450610851915050565b6000938452609760209081526040808620948652939052919092205550505050505050565b60008054610100900460ff1615610a6e578160ff166001148015610a4a5750303b155b610a665760405162461bcd60e51b8152600401610333906113f9565b506000919050565b60005460ff808416911610610a955760405162461bcd60e51b8152600401610333906113f9565b506000805460ff191660ff92909216919091179055600190565b919050565b600054610100900460ff16610b1f5760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b6064820152608401610333565b565b61034682826106f8565b610b35828261051f565b61034657610b4d816001600160a01b03166014610f14565b610b58836020610f14565b604051602001610b69929190611351565b60408051601f198184030181529082905262461bcd60e51b8252610333916004016113c6565b600080600080610b9e856110fc565b6001600160401b031690506000610bb48661115a565b6001600160401b03169050610bca6010836114e0565b9450610bd76010826114e0565b93506000610be66010846116aa565b90506000610bf56010846116aa565b905081610c03826010611605565b610c0d919061149d565b96989597505050505050565b60f881901c80151590600090819083610c39575060009150819050610c63565b6003851692506001600160f81b03851660f8610c56600184611624565b901b600282901c17925050505b9193909250565b6000806000806000610c7b8a6110fc565b90506000610c888b61115a565b899550889450879350905089610d4357610ca36001826114b5565b9050621fffff6001600160401b0382161115610d015760405162461bcd60e51b815260206004820152601d60248201527f446972656374696f6e2077656e7420746f6f20666172206e6f727468210000006044820152606401610333565b610d0c6010826116be565b6001600160401b0316610d3857610d2460018561149d565b9350610d3160f084611624565b9250610ef4565b610d3160108461149d565b8960011415610df1576000816001600160401b031611610da55760405162461bcd60e51b815260206004820152601d60248201527f446972656374696f6e2077656e7420746f6f2066617220736f757468210000006044820152606401610333565b610db060018261163b565b9050610dbd6010826116be565b6001600160401b0316600f1415610de657610dd9600185611624565b9350610d3160f08461149d565b610d31601084611624565b8960021415610e6757623fffff6001600160401b03831610610e1f5760009450849150610d31600f84611624565b610e2a6001836114b5565b9150610e376010836116be565b6001600160401b0316610e5c57610e4f60018661149d565b9450610d31600f84611624565b610d3160018461149d565b8960031415610ef4576001600160401b038216610ea557623fffff9150610e8f6010836114f4565b6001600160401b03169450610d31600f8461149d565b610eb060018361163b565b9150610ebd6010836116be565b6001600160401b0316600f1415610ee657610ed9600186611624565b9450610d31600f8461149d565b610ef1600184611624565b92505b6020826001600160401b0316901b81179550505095509550955095915050565b60606000610f23836002611605565b610f2e90600261149d565b6001600160401b03811115610f5357634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015610f7d576020820181803683370190505b509050600360fc1b81600081518110610fa657634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a905350600f60fb1b81600181518110610fe357634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a9053506000611007846002611605565b61101290600161149d565b90505b60018111156110a6576f181899199a1a9b1b9c1cb0b131b232b360811b85600f166010811061105457634e487b7160e01b600052603260045260246000fd5b1a60f81b82828151811061107857634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a90535060049490941c9361109f81611693565b9050611015565b5083156110f55760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152606401610333565b9392505050565b63ffffffff602082901c16623fffff811115610aaf5760405162461bcd60e51b815260206004820152601d60248201527f5820636f6f7264696e617465206973206f7574206f6620626f756e64730000006044820152606401610333565b63ffffffff8116621fffff811115610aaf5760405162461bcd60e51b815260206004820152601d60248201527f5920636f6f7264696e617465206973206f7574206f6620626f756e64730000006044820152606401610333565b8280548282559060005260206000209081019282156111ef579160200282015b828111156111ef5782358255916020019190600101906111d4565b506111fb929150611219565b5090565b508054600082559060005260206000209081019061051c91905b5b808211156111fb576000815560010161121a565b60006020828403121561123f578081fd5b5035919050565b60008060408385031215611258578081fd5b8235915060208301356001600160a01b0381168114611275578182fd5b809150509250929050565b600060208284031215611291578081fd5b81356001600160e01b0319811681146110f5578182fd5b600080604083850312156112ba578182fd5b50508035926020909101359150565b6000806000604084860312156112dd578081fd5b83356001600160401b0380821682146112f4578283fd5b90935060208501359080821115611309578283fd5b818601915086601f83011261131c578283fd5b81358181111561132a578384fd5b8760208260051b850101111561133e578384fd5b6020830194508093505050509250925092565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000815260008351611389816017850160208801611663565b7001034b99036b4b9b9b4b733903937b6329607d1b60179184019182015283516113ba816028840160208801611663565b01602801949350505050565b60208152600082518060208401526113e5816040850160208701611663565b601f01601f19169190910160400192915050565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201526d191e481a5b9a5d1a585b1a5e995960921b606082015260800190565b6000604082016001600160401b038516835260206040818501528185518084526060860191508287019350845b8181101561149057845183529383019391830191600101611474565b5090979650505050505050565b600082198211156114b0576114b06116e4565b500190565b60006001600160401b038083168185168083038211156114d7576114d76116e4565b01949350505050565b6000826114ef576114ef6116fa565b500490565b60006001600160401b038084168061150e5761150e6116fa565b92169190910492915050565b600181815b8085111561155557816000190482111561153b5761153b6116e4565b8085161561154857918102915b93841c939080029061151f565b509250929050565b60006110f5838360008261157357506001610297565b8161158057506000610297565b816001811461159657600281146115a0576115bc565b6001915050610297565b60ff8411156115b1576115b16116e4565b50506001821b610297565b5060208310610133831016604e8410600b84101617156115df575081810a610297565b6115e9838361151a565b80600019048211156115fd576115fd6116e4565b029392505050565b600081600019048311821515161561161f5761161f6116e4565b500290565b600082821015611636576116366116e4565b500390565b60006001600160401b038381169083168181101561165b5761165b6116e4565b039392505050565b60005b8381101561167e578181015183820152602001611666565b8381111561168d576000848401525b50505050565b6000816116a2576116a26116e4565b506000190190565b6000826116b9576116b96116fa565b500690565b60006001600160401b03808416806116d8576116d86116fa565b92169190910692915050565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fdfea2646970667358221220f8478d588858f3acd99ecc38ece71e951c2f66c2b7c3110a880c9f56954de9ac64736f6c63430008040033";

type GeoWebParcelConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GeoWebParcelConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class GeoWebParcel__factory extends ContractFactory {
  constructor(...args: GeoWebParcelConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "GeoWebParcel";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<GeoWebParcel> {
    return super.deploy(overrides || {}) as Promise<GeoWebParcel>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): GeoWebParcel {
    return super.attach(address) as GeoWebParcel;
  }
  connect(signer: Signer): GeoWebParcel__factory {
    return super.connect(signer) as GeoWebParcel__factory;
  }
  static readonly contractName: "GeoWebParcel";
  public readonly contractName: "GeoWebParcel";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GeoWebParcelInterface {
    return new utils.Interface(_abi) as GeoWebParcelInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GeoWebParcel {
    return new Contract(address, _abi, signerOrProvider) as GeoWebParcel;
  }
}
