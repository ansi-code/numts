import * as common from "../common";

declare global {
    type TypedArray<T> =
        | Int8Array
        | Uint8Array
        | Uint8ClampedArray
        | Int16Array
        | Uint16Array
        | Int32Array
        | Uint32Array
        | Float32Array
        | Float64Array;
}

export const F = common
export type FType = typeof F;

export type IUint8Type = ReturnType<typeof F.NdUint8ArrayNew>;
export type IInt8Type = ReturnType<typeof F.NdInt8ArrayNew>;

export type IType =
    | ReturnType<typeof F.NdUint8ArrayNew>
    | ReturnType<typeof F.NdInt8ArrayNew>;

export default async function (): Promise<FType> {
    return common;
}
