/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  CFAPenaltyBidFacet,
  CFAPenaltyBidFacetInterface,
} from "../CFAPenaltyBidFacet";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_payer",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_bidder",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "forSalePrice",
        type: "uint256",
      },
    ],
    name: "BidAccepted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_bidder",
        type: "address",
      },
      {
        indexed: false,
        internalType: "int96",
        name: "contributionRate",
        type: "int96",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "forSalePrice",
        type: "uint256",
      },
    ],
    name: "BidPlaced",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_payer",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_bidder",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "forSalePrice",
        type: "uint256",
      },
    ],
    name: "BidRejected",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_sender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_payer",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_bidder",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "forSalePrice",
        type: "uint256",
      },
    ],
    name: "TransferTriggered",
    type: "event",
  },
  {
    inputs: [],
    name: "acceptBid",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "calculatePenalty",
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
        internalType: "int96",
        name: "newContributionRate",
        type: "int96",
      },
      {
        internalType: "uint256",
        name: "newForSalePrice",
        type: "uint256",
      },
    ],
    name: "editBid",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "hasPendingBid",
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
    name: "pendingBid",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "timestamp",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "bidder",
            type: "address",
          },
          {
            internalType: "int96",
            name: "contributionRate",
            type: "int96",
          },
          {
            internalType: "uint256",
            name: "perSecondFeeNumerator",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "perSecondFeeDenominator",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "forSalePrice",
            type: "uint256",
          },
        ],
        internalType: "struct LibCFAPenaltyBid.Bid",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int96",
        name: "newContributionRate",
        type: "int96",
      },
      {
        internalType: "uint256",
        name: "newForSalePrice",
        type: "uint256",
      },
    ],
    name: "placeBid",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "rejectBid",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "triggerTransfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506130fa806100206000396000f3fe608060405234801561001057600080fd5b50600436106100875760003560e01c80639e41ec671161005b5780639e41ec6714610137578063ce2ccb151461014d578063e52a787414610155578063f11663e81461015d57600080fd5b8062fa68021461008c578063084024a2146100a15780633e3581a7146100d457806392f1f73e146100dc575b600080fd5b61009f61009a366004612ac4565b610170565b005b600080516020613005833981519152546000600160a01b909104600b0b1360405190151581526020015b60405180910390f35b61009f61097f565b6100e4610bd2565b6040516100cb9190815181526020808301516001600160a01b031690820152604080830151600b0b90820152606080830151908201526080808301519082015260a0918201519181019190915260c00190565b61013f610cdc565b6040519081526020016100cb565b61009f610ceb565b61009f610f3c565b61009f61016b366004612ac4565b611185565b610178611299565b6101f95760405162461bcd60e51b815260206004820152604160248201527f4346414261736550434f46616365743a2043616e206f6e6c7920706572666f7260448201527f6d20616374696f6e207768656e207061796572206269642069732061637469766064820152606560f81b608482015260a4015b60405180910390fd5b60006000805160206130858339815191529050306001600160a01b031663084024a26040518163ffffffff1660e01b8152600401602060405180830381865afa15801561024a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061026e9190612af0565b156102d25760405162461bcd60e51b815260206004820152602e60248201527f43464150656e616c747942696446616365743a2050656e64696e67206269642060448201526d616c72656164792065786973747360901b60648201526084016101f0565b6000805160206130a5833981519152805460408051630b51881360e11b81529051600080516020613045833981519152926000926001600160a01b03909116916316a31026916004808201926020929091908290030181865afa15801561033d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103619190612b19565b905060008360000160009054906101000a90046001600160a01b03166001600160a01b031663014df4146040518163ffffffff1660e01b8152600401602060405180830381865afa1580156103ba573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103de9190612b19565b90506000805160206130658339815191526103fb878985856112ad565b61045c5760405162461bcd60e51b815260206004820152602c60248201527f43464150656e616c747942696446616365743a20496e636f727265637420666f60448201526b722073616c6520707269636560a01b60648201526084016101f0565b6001810154600160a01b9004600b90810b9089900b12156104e55760405162461bcd60e51b815260206004820152603c60248201527f43464150656e616c747942696446616365743a204e657720636f6e747269627560448201527f74696f6e2072617465206973206e6f74206869676820656e6f7567680000000060648201526084016101f0565b600184015485546040805163d41c3a6560e01b8152905160009384936001600160a01b039182169362422bbe93919092169163d41c3a659160048083019260209291908290030181865afa158015610541573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105659190612b47565b33306040518463ffffffff1660e01b815260040161058593929190612b64565b606060405180830381865afa1580156105a2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105c69190612b87565b92509250506105d68260006112db565b6106415760405162461bcd60e51b815260206004820152603660248201527f43464150656e616c747942696446616365743a204352454154455f464c4f57206044820152751c195c9b5a5cdcda5bdb881b9bdd0819dc985b9d195960521b60648201526084016101f0565b89600b0b81600b0b12156106cf5760405162461bcd60e51b815260206004820152604960248201527f43464150656e616c747942696446616365743a204352454154455f464c4f572060448201527f7065726d697373696f6e20646f6573206e6f74206861766520656e6f75676820606482015268616c6c6f77616e636560b81b608482015260a4016101f0565b86546040805163d41c3a6560e01b815290516000926001600160a01b03169163d41c3a659160048083019260209291908290030181865afa158015610718573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061073c9190612b47565b60018801546040516346ccbfb760e11b81526001600160a01b038084166004830152600b8f900b602483015292935060009290911690638d997f6e90604401602060405180830381865afa158015610798573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107bc9190612b19565b905060006107ca8c83612be6565b6040516323b872dd60e01b8152336004820152306024820152604481018290529091506000906001600160a01b038516906323b872dd906064016020604051808303816000875af1158015610823573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108479190612af0565b9050806108a55760405162461bcd60e51b815260206004820152602660248201527f43464150656e616c747942696446616365743a20426964206465706f7369742060448201526519985a5b195960d21b60648201526084016101f0565b428c60000181905550338c60010160006101000a8154816001600160a01b0302191690836001600160a01b031602179055508d8c60010160146101000a8154816001600160601b030219169083600b0b6001600160601b03160217905550888c60020181905550878c600301819055508c8c60040181905550336001600160a01b03167f51dc3f0ae56a56b314941620a5450aa63fb32261ffdd59993bdd4a5645ed6d728f8f604051610967929190600b9290920b8252602082015260400190565b60405180910390a25050505050505050505050505050565b60008051602061302583398151915254600080516020613065833981519152906001600160a01b031633146109c65760405162461bcd60e51b81526004016101f090612bfe565b306001600160a01b031663084024a26040518163ffffffff1660e01b8152600401602060405180830381865afa158015610a04573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a289190612af0565b1515600114610a495760405162461bcd60e51b81526004016101f090612c5b565b6000805160206130a583398151915280546040805163400e2d8f60e11b81529051600080516020613085833981519152936000805160206130658339815191529390926000926001600160a01b039092169163801c5b1e916004808201926020929091908290030181865afa158015610ac6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610aea9190612b19565b8454909150600090610afc9042612ca9565b9050818110610b1d5760405162461bcd60e51b81526004016101f090612cc0565b60008051602061300583398151915254600080516020613025833981519152547f3c72d60a0f1018560e1ecd381dcc70c04920ba28255c0b6f8b496f8f6f727f4554604080519182525160008051602061308583398151915293600080516020613065833981519152936001600160a01b03918216939116917f70ba5911930f2b49bef0e3806b54c696faa41fcf48becb8291d011ca4c1d8db49181900360200190a3610bc861133a565b5050505050505050565b610c176040518060c001604052806000815260200160006001600160a01b031681526020016000600b0b81526020016000815260200160008152602001600081525090565b506040805160c081018252600080516020613085833981519152548152600080516020613005833981519152546001600160a01b0381166020830152600160a01b9004600b0b918101919091527fab844abc5ac35bdf8e8581a4c7c97fb9e92911442226ad6bdb029a2dbfe670df5460608201527fab844abc5ac35bdf8e8581a4c7c97fb9e92911442226ad6bdb029a2dbfe670e05460808201527fab844abc5ac35bdf8e8581a4c7c97fb9e92911442226ad6bdb029a2dbfe670e15460a082015290565b6000610ce6611873565b905090565b306001600160a01b031663084024a26040518163ffffffff1660e01b8152600401602060405180830381865afa158015610d29573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d4d9190612af0565b1515600114610d6e5760405162461bcd60e51b81526004016101f090612c5b565b6000805160206130858339815191526000805160206130a5833981519152610d94611299565b1515600103610e885780546040805163400e2d8f60e11b815290516000926001600160a01b03169163801c5b1e9160048083019260209291908290030181865afa158015610de6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e0a9190612b19565b8354909150600090610e1c9042612ca9565b905081811015610e855760405162461bcd60e51b815260206004820152602e60248201527f43464150656e616c747942696446616365743a2042696420706572696f64206860448201526d185cc81b9bdd08195b185c1cd95960921b60648201526084016101f0565b50505b60008051602061300583398151915254600080516020613025833981519152547f3c72d60a0f1018560e1ecd381dcc70c04920ba28255c0b6f8b496f8f6f727f4554604080519182525160008051602061308583398151915293600080516020613065833981519152936001600160a01b039182169391169133917f5057e7232685b7cad2bf4919b2c3e735cf044c7b689b15fd24035359a9581458919081900360200190a4610f366119ab565b50505050565b60008051602061302583398151915254600080516020613065833981519152906001600160a01b03163314610f835760405162461bcd60e51b81526004016101f090612bfe565b306001600160a01b031663084024a26040518163ffffffff1660e01b8152600401602060405180830381865afa158015610fc1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fe59190612af0565b15156001146110065760405162461bcd60e51b81526004016101f090612c5b565b6000805160206130a583398151915280546040805163400e2d8f60e11b81529051600080516020613085833981519152936000805160206130658339815191529390926000926001600160a01b039092169163801c5b1e916004808201926020929091908290030181865afa158015611083573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110a79190612b19565b84549091506000906110b99042612ca9565b90508181106110da5760405162461bcd60e51b81526004016101f090612cc0565b60008051602061300583398151915254600080516020613025833981519152547f3c72d60a0f1018560e1ecd381dcc70c04920ba28255c0b6f8b496f8f6f727f4554604080519182525160008051602061308583398151915293600080516020613065833981519152936001600160a01b03918216939116917fcea76e88a336bcad5acb8cf244393e65f4bbe4b4bcaa2e989f754f5f2bd29eaf9181900360200190a3610bc86119ab565b60008051602061302583398151915254600080516020613065833981519152906001600160a01b031633146111cc5760405162461bcd60e51b81526004016101f090612bfe565b306001600160a01b031663084024a26040518163ffffffff1660e01b8152600401602060405180830381865afa15801561120a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061122e9190612af0565b1561128a5760405162461bcd60e51b815260206004820152602660248201527f43464150656e616c747942696446616365743a2050656e64696e67206269642060448201526565786973747360d01b60648201526084016101f0565b6112948383612114565b505050565b6000806112a46125d3565b600b0b13905090565b600080826112bb8588612d0a565b6112c59190612d29565b6001600160601b03861614915050949350505050565b6000808260028111156112f0576112f0612d4b565b036113015750600182811614611334565b600182600281111561131557611315612d4b565b036113285750600182811c811614611334565b506001600283901c8116145b92915050565b6000805160206130a583398151915280546040805163d41c3a6560e01b815290516000805160206130458339815191529260008051602061306583398151915292600080516020613085833981519152926000926001600160a01b03169163d41c3a659160048083019260209291908290030181865afa1580156113c2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113e69190612b47565b905060008560000160009054906101000a90046001600160a01b03166001600160a01b031663565a2e2c6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561143f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114639190612b47565b9050600061146f611873565b604051632ec8eec760e01b815230600482015290915060009081906001600160a01b03861690632ec8eec790602401608060405180830381865afa1580156114bb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114df9190612d61565b50509150915060008082846114f49190612d97565b12611506576115038284612d97565b90505b600189810154908801546040516346ccbfb760e11b81526001600160a01b038981166004830152600160a01b909204600b0b60248201526000929190911690638d997f6e90604401602060405180830381865afa15801561156b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061158f9190612b19565b905082821115611743576115a38383612ca9565b915060008189600401546115b79190612be6565b9050808311156116c657600189015460405163a9059cbb60e01b81526001600160a01b039182166004820152602481018390529089169063a9059cbb906044016020604051808303816000875af1158015611616573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061163a9190612af0565b506116458184612ca9565b60018b015460405163a9059cbb60e01b81526001600160a01b0391821660048201526024810183905291945089169063a9059cbb906044016020604051808303816000875af115801561169c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116c09190612af0565b50611741565b600189015460405163a9059cbb60e01b81526001600160a01b039182166004820152602481018590529089169063a9059cbb906044016020604051808303816000875af115801561171b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061173f9190612af0565b505b505b60018901546040516323b872dd60e01b81526001600160a01b0391821660048201528782166024820152604481018790526000918916906323b872dd906064016020604051808303816000875af11580156117a2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117c69190612af0565b9050806118265760405162461bcd60e51b815260206004820152602860248201527f4c696243464150656e616c74794269643a2050656e616c7479207061796d656e6044820152671d0819985a5b195960c21b60648201526084016101f0565b600189015460048a015461184491600160a01b9004600b0b90612114565b61186560008051602061300583398151915280546001600160a01b03169055565b505050505050505050505050565b6000805160206130a583398151915280546040805163304fb4bb60e21b81529051600093926000805160206130858339815191529285926001600160a01b039092169163c13ed2ec916004808201926020929091908290030181865afa1580156118e1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119059190612b19565b905060008360000160009054906101000a90046001600160a01b03166001600160a01b0316637d51ce906040518163ffffffff1660e01b8152600401602060405180830381865afa15801561195e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119829190612b19565b90506000818385600401546119979190612d0a565b6119a19190612d29565b9695505050505050565b6000805160206130a583398151915280546040805163d41c3a6560e01b815290516000805160206130458339815191529260008051602061306583398151915292600080516020613085833981519152926000926001600160a01b03169163d41c3a659160048083019260209291908290030181865afa158015611a33573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a579190612b47565b60018581015490850154604051631cd43d1160e31b81529293506000926001600160a01b039283169263e6a1e88892611a9a928792909116903090600401612b64565b608060405180830381865afa158015611ab7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611adb9190612dd8565b5050915050600081600b0b1315611b07576001840154611b079086906001600160a01b03163085612767565b8454600180870154908501546040805160008152602081019091526001600160a01b03938416936339255d5b9381169283926394229ecb92611b5f928a92918116913091600160a01b9004600b0b9060448101612e84565b60408051601f19818403018152918152602080830180516001600160e01b031660e095861b179052815160008152908101918290529286901b6001600160e01b0319169052611bb49392509060248101612ec2565b6000604051808303816000875af1925050508015611bf457506040513d6000823e601f3d908101601f19168201604052611bf19190810190612ef8565b60015b15611bfb57505b8554604080516315968b8b60e21b815290516000926001600160a01b03169163565a2e2c9160048083019260209291908290030181865afa158015611c44573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c689190612b47565b6001870154604051631cd43d1160e31b81529192506001600160a01b03169063e6a1e88890611c9f90869030908690600401612b64565b608060405180830381865afa158015611cbc573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ce09190612dd8565b5090935050506000600b83900b1315611d16576001840154611d1190879083908690600160a01b9004600b0b612787565b611d34565b6001840154611d3490879083908690600160a01b9004600b0b6127a7565b600187810154868201549186015460028a0154604051632142170760e11b81526001600160a01b039485166004820152918416602483015260448201529116906342842e0e90606401600060405180830381600087803b158015611d9757600080fd5b505af1158015611dab573d6000803e3d6000fd5b5050604051632ec8eec760e01b8152306004820152600092508291506001600160a01b03861690632ec8eec790602401608060405180830381865afa158015611df8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611e1c9190612d61565b5050915091506000808284611e319190612d97565b12611e4357611e408284612d97565b90505b600189810154908801546040516346ccbfb760e11b81526001600160a01b038981166004830152600160a01b909204600b0b60248201526000929190911690638d997f6e90604401602060405180830381865afa158015611ea8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ecc9190612b19565b90508082111561208457611ee08183612ca9565b9150600089600401548960040154611ef89190612ca9565b90508083111561200757600189015460405163a9059cbb60e01b81526001600160a01b039182166004820152602481018390529089169063a9059cbb906044016020604051808303816000875af1158015611f57573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f7b9190612af0565b50611f868184612ca9565b60018b015460405163a9059cbb60e01b81526001600160a01b0391821660048201526024810183905291945089169063a9059cbb906044016020604051808303816000875af1158015611fdd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906120019190612af0565b50612082565b600189015460405163a9059cbb60e01b81526001600160a01b039182166004820152602481018590529089169063a9059cbb906044016020604051808303816000875af115801561205c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906120809190612af0565b505b505b8754895560018089018054918b0180546001600160a01b0319166001600160a01b03909316928317815590546001600160601b03600160a01b9182900416029091179055600280890154908a0155600380890154908a0155600480890154908a015561210760008051602061300583398151915280546001600160a01b03169055565b5050505050505050505050565b6000805160206130a5833981519152805460408051630b51881360e11b8152905160008051602061304583398151915292600080516020613065833981519152926000926001600160a01b03909216916316a31026916004808201926020929091908290030181865afa15801561218f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906121b39190612b19565b905060008460000160009054906101000a90046001600160a01b03166001600160a01b031663014df4146040518163ffffffff1660e01b8152600401602060405180830381865afa15801561220c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906122309190612b19565b905061223e868884846112ad565b61229a5760405162461bcd60e51b815260206004820152602760248201527f4c69624346414261736550434f3a20496e636f727265637420666f722073616c6044820152666520707269636560c81b60648201526084016101f0565b84546040805163d41c3a6560e01b815290516000926001600160a01b03169163d41c3a659160048083019260209291908290030181865afa1580156122e3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906123079190612b47565b905060008660000160009054906101000a90046001600160a01b03166001600160a01b031663565a2e2c6040518163ffffffff1660e01b8152600401602060405180830381865afa158015612360573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906123849190612b47565b60018781015490870154604051631cd43d1160e31b81529293506000926001600160a01b039283169263e6a1e888926123c7928892909116903090600401612b64565b608060405180830381865afa1580156123e4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906124089190612dd8565b5050915050600081600b0b131561243b5760018601546124359088906001600160a01b031630868e6127c7565b50612459565b60018601546124579088906001600160a01b031630868e6127ec565b505b6001870154604051631cd43d1160e31b81526001600160a01b039091169063e6a1e8889061248f90869030908790600401612b64565b608060405180830381865afa1580156124ac573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906124d09190612dd8565b5090925050506000600b82900b13156124f4576124ef8783858d612787565b612500565b6125008783858d6127a7565b4286556001860180546001600160601b038c16600160a01b026001600160a01b039182168181179093556002890188905560038901879055600489018c90556040519116909117907fae3c4f18410e9cfcd20fc8664a5a0082a92f07a0a5febdc22bec0c539393733690612577908c815260200190565b60405180910390a26001860154604051600b8c900b81526001600160a01b03909116907f6602f4d39e226f3807ddac3e7aab03883832e2ea2d07ccdeaf513c16679fdcd09060200160405180910390a250505050505050505050565b7feaf1cf088be31249661a61fc7743edf628a39210375613d4be0a9cda3ec06da7546000805160206130a583398151915280546040805163d41c3a6560e01b815290516000946000805160206130458339815191529386936001600160a01b039283169363e6a1e888939092169163d41c3a65916004808201926020929091908290030181865afa15801561266c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906126909190612b47565b8554604080516315968b8b60e21b8152905130926001600160a01b03169163565a2e2c9160048083019260209291908290030181865afa1580156126d8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906126fc9190612b47565b6040518463ffffffff1660e01b815260040161271a93929190612b64565b608060405180830381865afa158015612737573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061275b9190612dd8565b50909695505050505050565b604080516000815260208101909152610f36908590859085908590612811565b604080516000815260208101909152610f369085908590859085906128f0565b604080516000815260208101909152610f36908590859085908590612954565b6040805160008152602081019091526060906119a1908790879087908790879061297e565b6040805160008152602081019091526060906119a19087908790879087908790612a84565b845460018601546040805160008152602081019091526001600160a01b03928316926339255d5b921690819063b4b333c6906128569088908b908b9060448101612f9a565b60408051808303601f1901815291815260208201805160e094851b6001600160e01b03909116179052519185901b6001600160e01b03191682526128a1939250908690600401612ec2565b6000604051808303816000875af11580156128c0573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526128e89190810190612ef8565b505050505050565b845460018601546001600160a01b03918216916339255d5b9116806350209a6287898860005b6040519080825280601f01601f191660200182016040528015612940576020820181803683370190505b506040516024016128569493929190612fce565b845460018601546001600160a01b03918216916339255d5b9116806362fc305e8789886000612916565b855460018701546060916001600160a01b03908116916339255d5b91168063354b9590888b8b8a60005b6040519080825280601f01601f1916602001820160405280156129d2576020820181803683370190505b506040516024016129e7959493929190612e84565b60408051808303601f1901815291815260208201805160e094851b6001600160e01b03909116179052519185901b6001600160e01b0319168252612a32939250908790600401612ec2565b6000604051808303816000875af1158015612a51573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052612a799190810190612ef8565b979650505050505050565b855460018701546060916001600160a01b03908116916339255d5b9116806394229ecb888b8b8a60006129a8565b80600b0b8114612ac157600080fd5b50565b60008060408385031215612ad757600080fd5b8235612ae281612ab2565b946020939093013593505050565b600060208284031215612b0257600080fd5b81518015158114612b1257600080fd5b9392505050565b600060208284031215612b2b57600080fd5b5051919050565b6001600160a01b0381168114612ac157600080fd5b600060208284031215612b5957600080fd5b8151612b1281612b32565b6001600160a01b0393841681529183166020830152909116604082015260600190565b600080600060608486031215612b9c57600080fd5b83519250602084015160ff81168114612bb457600080fd5b6040850151909250612bc581612ab2565b809150509250925092565b634e487b7160e01b600052601160045260246000fd5b60008219821115612bf957612bf9612bd0565b500190565b6020808252603d908201527f4346414261736550434f46616365743a204f6e6c79207061796572206973206160408201527f6c6c6f77656420746f20706572666f726d207468697320616374696f6e000000606082015260800190565b6020808252602e908201527f43464150656e616c747942696446616365743a2050656e64696e67206269642060408201526d191bd95cc81b9bdd08195e1a5cdd60921b606082015260800190565b600082821015612cbb57612cbb612bd0565b500390565b6020808252602a908201527f43464150656e616c747942696446616365743a2042696420706572696f642068604082015269185cc8195b185c1cd95960b21b606082015260800190565b6000816000190483118215151615612d2457612d24612bd0565b500290565b600082612d4657634e487b7160e01b600052601260045260246000fd5b500490565b634e487b7160e01b600052602160045260246000fd5b60008060008060808587031215612d7757600080fd5b505082516020840151604085015160609095015191969095509092509050565b600080821280156001600160ff1b0384900385131615612db957612db9612bd0565b600160ff1b8390038412811615612dd257612dd2612bd0565b50500190565b60008060008060808587031215612dee57600080fd5b845193506020850151612e0081612ab2565b6040860151606090960151949790965092505050565b634e487b7160e01b600052604160045260246000fd5b60005b83811015612e47578181015183820152602001612e2f565b83811115610f365750506000910152565b60008151808452612e70816020860160208601612e2c565b601f01601f19169290920160200192915050565b6001600160a01b038681168252858116602083015284166040820152600b83900b606082015260a060808201819052600090612a7990830184612e58565b6001600160a01b0384168152606060208201819052600090612ee690830185612e58565b82810360408401526119a18185612e58565b600060208284031215612f0a57600080fd5b815167ffffffffffffffff80821115612f2257600080fd5b818401915084601f830112612f3657600080fd5b815181811115612f4857612f48612e16565b604051601f8201601f19908116603f01168101908382118183101715612f7057612f70612e16565b81604052828152876020848701011115612f8957600080fd5b612a79836020830160208801612e2c565b6001600160a01b0385811682528481166020830152831660408201526080606082018190526000906119a190830184612e58565b6001600160a01b03858116825284166020820152600b83900b60408201526080606082018190526000906119a190830184612e5856feab844abc5ac35bdf8e8581a4c7c97fb9e92911442226ad6bdb029a2dbfe670de3c72d60a0f1018560e1ecd381dcc70c04920ba28255c0b6f8b496f8f6f727f42eaf1cf088be31249661a61fc7743edf628a39210375613d4be0a9cda3ec06da63c72d60a0f1018560e1ecd381dcc70c04920ba28255c0b6f8b496f8f6f727f41ab844abc5ac35bdf8e8581a4c7c97fb9e92911442226ad6bdb029a2dbfe670dd7afbdc140ed2feae39152d66ce3c9b7394a1bbd963c668f15d7196d48d2532c9a2646970667358221220b9781881d740454ac16bb94c79814ec547150a0613fbd163ff3514807b2e7da764736f6c634300080e0033";

type CFAPenaltyBidFacetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CFAPenaltyBidFacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CFAPenaltyBidFacet__factory extends ContractFactory {
  constructor(...args: CFAPenaltyBidFacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "CFAPenaltyBidFacet";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<CFAPenaltyBidFacet> {
    return super.deploy(overrides || {}) as Promise<CFAPenaltyBidFacet>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): CFAPenaltyBidFacet {
    return super.attach(address) as CFAPenaltyBidFacet;
  }
  connect(signer: Signer): CFAPenaltyBidFacet__factory {
    return super.connect(signer) as CFAPenaltyBidFacet__factory;
  }
  static readonly contractName: "CFAPenaltyBidFacet";
  public readonly contractName: "CFAPenaltyBidFacet";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CFAPenaltyBidFacetInterface {
    return new utils.Interface(_abi) as CFAPenaltyBidFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CFAPenaltyBidFacet {
    return new Contract(address, _abi, signerOrProvider) as CFAPenaltyBidFacet;
  }
}
