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

export const F = common;

export type FType = typeof F;

export type IInt8Type = ReturnType<typeof F.NdInt8ArrayNew>;
export type IUint8Type = ReturnType<typeof F.NdUint8ArrayNew>;
export type IUint8ClampedType = ReturnType<typeof F.NdUint8ClampedArrayNew>;
export type IInt16Type = ReturnType<typeof F.NdInt16ArrayNew>;
export type IUint16Type = ReturnType<typeof F.NdUint16ArrayNew>;
export type IInt32Type = ReturnType<typeof F.NdInt32ArrayNew>;
export type IUint32Type = ReturnType<typeof F.NdUint32ArrayNew>;
export type IFloat32Type = ReturnType<typeof F.NdFloat32ArrayNew>;
export type IFloat64Type = ReturnType<typeof F.NdFloat64ArrayNew>;

export type IType =
    | IInt8Type
    | IUint8Type
    | IUint8ClampedType
    | IInt16Type
    | IUint16Type
    | IInt32Type
    | IUint32Type
    | IFloat32Type
    | IFloat64Type;

export default async function (): Promise<FType> {
    return common;
}
