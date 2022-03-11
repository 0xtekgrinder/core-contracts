/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  FairLaunchClaimer,
  FairLaunchClaimerInterface,
} from "../FairLaunchClaimer";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "parcelId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "ParcelPurchased",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
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
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [],
    name: "CLAIM_ROLE",
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
    name: "PAUSE_ROLE",
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
    name: "auctionApp",
    outputs: [
      {
        internalType: "contract AuctionSuperApp",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "auctionEnd",
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
    name: "auctionStart",
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
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "int96",
        name: "initialContributionRate",
        type: "int96",
      },
      {
        internalType: "bytes",
        name: "claimData",
        type: "bytes",
      },
    ],
    name: "claim",
    outputs: [
      {
        internalType: "uint256",
        name: "licenseId",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "int96",
        name: "initialContributionRate",
        type: "int96",
      },
      {
        internalType: "bytes",
        name: "claimData",
        type: "bytes",
      },
    ],
    name: "claimPrice",
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
    name: "endingBid",
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
    name: "license",
    outputs: [
      {
        internalType: "contract ERC721License",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "parcel",
    outputs: [
      {
        internalType: "contract GeoWebParcel",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
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
        internalType: "uint256",
        name: "_auctionEnd",
        type: "uint256",
      },
    ],
    name: "setAuctionEnd",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_auctionStart",
        type: "uint256",
      },
    ],
    name: "setAuctionStart",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_endingBid",
        type: "uint256",
      },
    ],
    name: "setEndingBid",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_licenseAddress",
        type: "address",
      },
    ],
    name: "setLicense",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_parcelAddress",
        type: "address",
      },
    ],
    name: "setParcel",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_startingBid",
        type: "uint256",
      },
    ],
    name: "setStartingBid",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_superAppAddress",
        type: "address",
      },
    ],
    name: "setSuperApp",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "startingBid",
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
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506000805460ff191681556100259033610054565b61004f7f139c2898040ef16910dc9f44dc697df79363da767d8bc92f2e310312b816e46d33610054565b6100e9565b61005e8282610062565b5050565b60008281526001602090815260408083206001600160a01b038516845290915290205460ff1661005e5760008281526001602081815260408084206001600160a01b0386168086529252808420805460ff19169093179092559051339285917f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d9190a45050565b61119b806100f86000396000f3fe608060405234801561001057600080fd5b50600436106101c45760003560e01c8063536a0a0f116100f957806391d1485411610097578063b9fdd56911610071578063b9fdd569146103c0578063c67a6da7146103c9578063d547741f146103dc578063d9a25a6f146103ef57600080fd5b806391d1485414610392578063a217fddf146103a5578063b4b3d071146103ad57600080fd5b8063738ce0ca116100d3578063738ce0ca1461033d578063841c6b5c146103505780638456cb591461036357806386c1b4eb1461036b57600080fd5b8063536a0a0f1461030c5780635c975abb1461031f5780636b87d24c1461032a57600080fd5b80632f2ff15d116101665780633bbdc70c116101405780633bbdc70c146102c75780633f4ba83a146102f25780634f1130c3146102fa5780634f245ef71461030357600080fd5b80632f2ff15d1461027a57806336568abe1461028d578063389ed267146102a057600080fd5b8063181f4456116101a2578063181f4456146102195780631cbb2ce31461022c578063248a9ca31461023f5780632a24f46c1461027157600080fd5b806301ffc9a7146101c95780630556e9b9146101f15780630fd21c1714610206575b600080fd5b6101dc6101d7366004610e6d565b610402565b60405190151581526020015b60405180910390f35b6102046101ff366004610e2a565b610439565b005b610204610214366004610d80565b61044b565b610204610227366004610e2a565b61047a565b61020461023a366004610e2a565b61048c565b61026361024d366004610e2a565b6000908152600160208190526040909120015490565b6040519081526020016101e8565b61026360065481565b610204610288366004610e42565b61049e565b61020461029b366004610e42565b6104ca565b6102637f139c2898040ef16910dc9f44dc697df79363da767d8bc92f2e310312b816e46d81565b6004546102da906001600160a01b031681565b6040516001600160a01b0390911681526020016101e8565b61020461054d565b61026360085481565b61026360055481565b61026361031a366004610d9a565b610583565b60005460ff166101dc565b6002546102da906001600160a01b031681565b61020461034b366004610e2a565b610596565b61020461035e366004610d80565b6105a8565b6102046105d7565b6102637ff7db13299c8a9e501861f04c20f69a2444829a36a363cfad4b58864709c7556081565b6101dc6103a0366004610e42565b61060a565b610263600081565b6102046103bb366004610d80565b610635565b61026360075481565b6102636103d7366004610d9a565b610664565b6102046103ea366004610e42565b6108b6565b6003546102da906001600160a01b031681565b60006001600160e01b03198216637965db0b60e01b148061043357506301ffc9a760e01b6001600160e01b03198316145b92915050565b600061044581336108dd565b50600755565b600061045781336108dd565b50600280546001600160a01b0319166001600160a01b0392909216919091179055565b600061048681336108dd565b50600555565b600061049881336108dd565b50600855565b600082815260016020819052604090912001546104bb81336108dd565b6104c58383610941565b505050565b6001600160a01b038116331461053f5760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b60648201526084015b60405180910390fd5b61054982826109ac565b5050565b7f139c2898040ef16910dc9f44dc697df79363da767d8bc92f2e310312b816e46d61057881336108dd565b610580610a13565b50565b600061058d610aa6565b95945050505050565b60006105a281336108dd565b50600655565b60006105b481336108dd565b50600380546001600160a01b0319166001600160a01b0392909216919091179055565b7f139c2898040ef16910dc9f44dc697df79363da767d8bc92f2e310312b816e46d61060281336108dd565b610580610b00565b60009182526001602090815260408084206001600160a01b0393909316845291905290205460ff1690565b600061064181336108dd565b50600480546001600160a01b0319166001600160a01b0392909216919091179055565b60007ff7db13299c8a9e501861f04c20f69a2444829a36a363cfad4b58864709c7556061069181336108dd565b60005460ff16156106d75760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b6044820152606401610536565b60055442116107285760405162461bcd60e51b815260206004820152601b60248201527f61756374696f6e20686173206e6f7420737461727465642079657400000000006044820152606401610536565b60065442106107705760405162461bcd60e51b815260206004820152601460248201527367656e656973697320697320636f6d706c65746560601b6044820152606401610536565b60008061077f85870187610ead565b60035460405163461d9a2160e01b81529294509092506000916001600160a01b039091169063461d9a21906107ba908690869060040161102d565b602060405180830381600087803b1580156107d457600080fd5b505af11580156107e8573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061080c9190610e95565b600254604051632851206560e21b81526001600160a01b038c811660048301526024820184905292935091169063a144819490604401600060405180830381600087803b15801561085c57600080fd5b505af1158015610870573d6000803e3d6000fd5b50506040516001600160a01b038c1692508391507f50734b3405b59656863d6bfb4f05090319026265606c9c6030a3babb4154f3f090600090a398975050505050505050565b600082815260016020819052604090912001546108d381336108dd565b6104c583836109ac565b6108e7828261060a565b610549576108ff816001600160a01b03166014610b7b565b61090a836020610b7b565b60405160200161091b929190610f85565b60408051601f198184030181529082905262461bcd60e51b825261053691600401610ffa565b61094b828261060a565b6105495760008281526001602081815260408084206001600160a01b0386168086529252808420805460ff19169093179092559051339285917f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d9190a45050565b6109b6828261060a565b156105495760008281526001602090815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b60005460ff16610a5c5760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b6044820152606401610536565b6000805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a1565b60008060055442610ab791906110db565b90506000600554600654610acb91906110db565b905060008183600754610ade91906110bc565b610ae8919061109c565b905080600754610af891906110db565b935050505090565b60005460ff1615610b465760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b6044820152606401610536565b6000805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258610a893390565b60606000610b8a8360026110bc565b610b95906002611084565b67ffffffffffffffff811115610bbb57634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015610be5576020820181803683370190505b509050600360fc1b81600081518110610c0e57634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a905350600f60fb1b81600181518110610c4b57634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a9053506000610c6f8460026110bc565b610c7a906001611084565b90505b6001811115610d0e576f181899199a1a9b1b9c1cb0b131b232b360811b85600f1660108110610cbc57634e487b7160e01b600052603260045260246000fd5b1a60f81b828281518110610ce057634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a90535060049490941c93610d0781611122565b9050610c7d565b508315610d5d5760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152606401610536565b9392505050565b80356001600160a01b0381168114610d7b57600080fd5b919050565b600060208284031215610d91578081fd5b610d5d82610d64565b60008060008060608587031215610daf578283fd5b610db885610d64565b9350602085013580600b0b8114610dcd578384fd5b9250604085013567ffffffffffffffff80821115610de9578384fd5b818701915087601f830112610dfc578384fd5b813581811115610e0a578485fd5b886020828501011115610e1b578485fd5b95989497505060200194505050565b600060208284031215610e3b578081fd5b5035919050565b60008060408385031215610e54578182fd5b82359150610e6460208401610d64565b90509250929050565b600060208284031215610e7e578081fd5b81356001600160e01b031981168114610d5d578182fd5b600060208284031215610ea6578081fd5b5051919050565b60008060408385031215610ebf578182fd5b823567ffffffffffffffff8082168214610ed7578384fd5b9092506020908482013581811115610eed578384fd5b8501601f81018713610efd578384fd5b803582811115610f0f57610f0f61114f565b8060051b604051601f19603f83011681018181108682111715610f3457610f3461114f565b604052828152858101945083860182850187018b1015610f52578788fd5b8794505b83851015610f74578035865294860194600194909401938601610f56565b508096505050505050509250929050565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000815260008351610fbd8160178501602088016110f2565b7001034b99036b4b9b9b4b733903937b6329607d1b6017918401918201528351610fee8160288401602088016110f2565b01602801949350505050565b60208152600082518060208401526110198160408501602087016110f2565b601f01601f19169190910160400192915050565b60006040820167ffffffffffffffff8516835260206040818501528185518084526060860191508287019350845b818110156110775784518352938301939183019160010161105b565b5090979650505050505050565b6000821982111561109757611097611139565b500190565b6000826110b757634e487b7160e01b81526012600452602481fd5b500490565b60008160001904831182151516156110d6576110d6611139565b500290565b6000828210156110ed576110ed611139565b500390565b60005b8381101561110d5781810151838201526020016110f5565b8381111561111c576000848401525b50505050565b60008161113157611131611139565b506000190190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fdfea26469706673582212200ac8b8aa11c1720143ae6f400890e451f65ce252b24c36792b61ed3744e9aa2064736f6c63430008040033";

type FairLaunchClaimerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FairLaunchClaimerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class FairLaunchClaimer__factory extends ContractFactory {
  constructor(...args: FairLaunchClaimerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "FairLaunchClaimer";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<FairLaunchClaimer> {
    return super.deploy(overrides || {}) as Promise<FairLaunchClaimer>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): FairLaunchClaimer {
    return super.attach(address) as FairLaunchClaimer;
  }
  connect(signer: Signer): FairLaunchClaimer__factory {
    return super.connect(signer) as FairLaunchClaimer__factory;
  }
  static readonly contractName: "FairLaunchClaimer";
  public readonly contractName: "FairLaunchClaimer";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FairLaunchClaimerInterface {
    return new utils.Interface(_abi) as FairLaunchClaimerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FairLaunchClaimer {
    return new Contract(address, _abi, signerOrProvider) as FairLaunchClaimer;
  }
}
