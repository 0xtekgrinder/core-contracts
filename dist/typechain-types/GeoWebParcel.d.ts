import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface GeoWebParcelInterface extends utils.Interface {
    contractName: "GeoWebParcel";
    functions: {
        "BUILD_ROLE()": FunctionFragment;
        "DEFAULT_ADMIN_ROLE()": FunctionFragment;
        "DESTROY_ROLE()": FunctionFragment;
        "availabilityIndex(uint256,uint256)": FunctionFragment;
        "build(uint64,uint256[])": FunctionFragment;
        "destroy(uint256)": FunctionFragment;
        "getLandParcel(uint256)": FunctionFragment;
        "getRoleAdmin(bytes32)": FunctionFragment;
        "grantRole(bytes32,address)": FunctionFragment;
        "hasRole(bytes32,address)": FunctionFragment;
        "renounceRole(bytes32,address)": FunctionFragment;
        "revokeRole(bytes32,address)": FunctionFragment;
        "supportsInterface(bytes4)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "BUILD_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "DEFAULT_ADMIN_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "DESTROY_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "availabilityIndex", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "build", values: [BigNumberish, BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "destroy", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getLandParcel", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getRoleAdmin", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "grantRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "hasRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "renounceRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "revokeRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [BytesLike]): string;
    decodeFunctionResult(functionFragment: "BUILD_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "DEFAULT_ADMIN_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "DESTROY_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "availabilityIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "build", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "destroy", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getLandParcel", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    events: {
        "ParcelBuilt(uint256)": EventFragment;
        "ParcelDestroyed(uint256)": EventFragment;
        "ParcelModified(uint256)": EventFragment;
        "RoleAdminChanged(bytes32,bytes32,bytes32)": EventFragment;
        "RoleGranted(bytes32,address,address)": EventFragment;
        "RoleRevoked(bytes32,address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "ParcelBuilt"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ParcelDestroyed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ParcelModified"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleAdminChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleGranted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleRevoked"): EventFragment;
}
export declare type ParcelBuiltEvent = TypedEvent<[BigNumber], {
    _id: BigNumber;
}>;
export declare type ParcelBuiltEventFilter = TypedEventFilter<ParcelBuiltEvent>;
export declare type ParcelDestroyedEvent = TypedEvent<[BigNumber], {
    _id: BigNumber;
}>;
export declare type ParcelDestroyedEventFilter = TypedEventFilter<ParcelDestroyedEvent>;
export declare type ParcelModifiedEvent = TypedEvent<[BigNumber], {
    _id: BigNumber;
}>;
export declare type ParcelModifiedEventFilter = TypedEventFilter<ParcelModifiedEvent>;
export declare type RoleAdminChangedEvent = TypedEvent<[
    string,
    string,
    string
], {
    role: string;
    previousAdminRole: string;
    newAdminRole: string;
}>;
export declare type RoleAdminChangedEventFilter = TypedEventFilter<RoleAdminChangedEvent>;
export declare type RoleGrantedEvent = TypedEvent<[
    string,
    string,
    string
], {
    role: string;
    account: string;
    sender: string;
}>;
export declare type RoleGrantedEventFilter = TypedEventFilter<RoleGrantedEvent>;
export declare type RoleRevokedEvent = TypedEvent<[
    string,
    string,
    string
], {
    role: string;
    account: string;
    sender: string;
}>;
export declare type RoleRevokedEventFilter = TypedEventFilter<RoleRevokedEvent>;
export interface GeoWebParcel extends BaseContract {
    contractName: "GeoWebParcel";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: GeoWebParcelInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        BUILD_ROLE(overrides?: CallOverrides): Promise<[string]>;
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<[string]>;
        DESTROY_ROLE(overrides?: CallOverrides): Promise<[string]>;
        availabilityIndex(arg0: BigNumberish, arg1: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        build(baseCoordinate: BigNumberish, path: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        destroy(id: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getLandParcel(id: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber[]
        ] & {
            baseCoordinate: BigNumber;
            path: BigNumber[];
        }>;
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        grantRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<[boolean]>;
        renounceRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
    };
    BUILD_ROLE(overrides?: CallOverrides): Promise<string>;
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;
    DESTROY_ROLE(overrides?: CallOverrides): Promise<string>;
    availabilityIndex(arg0: BigNumberish, arg1: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    build(baseCoordinate: BigNumberish, path: BigNumberish[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    destroy(id: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getLandParcel(id: BigNumberish, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber[]
    ] & {
        baseCoordinate: BigNumber;
        path: BigNumber[];
    }>;
    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;
    grantRole(role: BytesLike, account: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<boolean>;
    renounceRole(role: BytesLike, account: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        BUILD_ROLE(overrides?: CallOverrides): Promise<string>;
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;
        DESTROY_ROLE(overrides?: CallOverrides): Promise<string>;
        availabilityIndex(arg0: BigNumberish, arg1: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        build(baseCoordinate: BigNumberish, path: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber>;
        destroy(id: BigNumberish, overrides?: CallOverrides): Promise<void>;
        getLandParcel(id: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber[]
        ] & {
            baseCoordinate: BigNumber;
            path: BigNumber[];
        }>;
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;
        grantRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<void>;
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<boolean>;
        renounceRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<void>;
        revokeRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<void>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {
        "ParcelBuilt(uint256)"(_id?: BigNumberish | null): ParcelBuiltEventFilter;
        ParcelBuilt(_id?: BigNumberish | null): ParcelBuiltEventFilter;
        "ParcelDestroyed(uint256)"(_id?: BigNumberish | null): ParcelDestroyedEventFilter;
        ParcelDestroyed(_id?: BigNumberish | null): ParcelDestroyedEventFilter;
        "ParcelModified(uint256)"(_id?: BigNumberish | null): ParcelModifiedEventFilter;
        ParcelModified(_id?: BigNumberish | null): ParcelModifiedEventFilter;
        "RoleAdminChanged(bytes32,bytes32,bytes32)"(role?: BytesLike | null, previousAdminRole?: BytesLike | null, newAdminRole?: BytesLike | null): RoleAdminChangedEventFilter;
        RoleAdminChanged(role?: BytesLike | null, previousAdminRole?: BytesLike | null, newAdminRole?: BytesLike | null): RoleAdminChangedEventFilter;
        "RoleGranted(bytes32,address,address)"(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleGrantedEventFilter;
        RoleGranted(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleGrantedEventFilter;
        "RoleRevoked(bytes32,address,address)"(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleRevokedEventFilter;
        RoleRevoked(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleRevokedEventFilter;
    };
    estimateGas: {
        BUILD_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        DESTROY_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        availabilityIndex(arg0: BigNumberish, arg1: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        build(baseCoordinate: BigNumberish, path: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        destroy(id: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getLandParcel(id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        grantRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<BigNumber>;
        renounceRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        BUILD_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        DESTROY_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        availabilityIndex(arg0: BigNumberish, arg1: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        build(baseCoordinate: BigNumberish, path: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        destroy(id: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getLandParcel(id: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        grantRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
