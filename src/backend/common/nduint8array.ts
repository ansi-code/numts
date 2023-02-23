import {NdTypedArray, NdTypedArrayAdd, NdTypedArrayGet, NdTypedArrayGetData, NdTypedArrayGetShape, NdTypedArrayGetStrides, NdTypedArrayNew, NdTypedArraySet, NdTypedArrayUnravel} from "./ndtypedarray";

export function NdUint8ArrayNew(data: Uint8Array, shape: Uint32Array): NdTypedArray<Uint8Array, u8> {
    return NdTypedArrayNew<Uint8Array, u8>(data, shape);
}

export function NdUint8ArrayAdd(self: NdTypedArray<Uint8Array, u8>, other: NdTypedArray<Uint8Array, u8>): void {
    return NdTypedArrayAdd<Uint8Array, u8>(self, other);
}

export function NdUint8ArrayGet(self: NdTypedArray<Uint8Array, u8>, index: Uint32Array): u8 {
    return NdTypedArrayGet<Uint8Array, u8>(self, index);
}

export function NdUint8ArraySet(self: NdTypedArray<Uint8Array, u8>, index: Uint32Array, value: u8): void {
    return NdTypedArraySet<Uint8Array, u8>(self, index, value);
}

export function NdUint8ArrayUnravel(self: NdTypedArray<Uint8Array, u8>, index: Uint32Array): i32 {
    return NdTypedArrayUnravel<Uint8Array, u8>(self, index);
}

export function NdUint8ArrayGetShape(self: NdTypedArray<Uint8Array, u8>): Uint32Array {
    return NdTypedArrayGetShape<Uint8Array, u8>(self);
}

export function NdUint8ArrayGetStrides(self: NdTypedArray<Uint8Array, u8>): Uint32Array {
    return NdTypedArrayGetStrides<Uint8Array, u8>(self);
}

export function NdUint8ArrayGetData(self: NdTypedArray<Uint8Array, u8>): Uint8Array {
    return NdTypedArrayGetData<Uint8Array, u8>(self);
}
