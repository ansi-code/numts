import {NdTypedArray, NdTypedArrayAdd, NdTypedArrayGet, NdTypedArrayGetData, NdTypedArrayGetShape, NdTypedArrayGetStrides, NdTypedArrayNew, NdTypedArraySet, NdTypedArrayUnravel} from "./ndtypedarray";

export function NdUint8ClampedArrayNew(data: Uint8ClampedArray, shape: Uint32Array): NdTypedArray<Uint8ClampedArray, u8> {
    return NdTypedArrayNew<Uint8ClampedArray, u8>(data, shape);
}

export function NdUint8ClampedArrayAdd(self: NdTypedArray<Uint8ClampedArray, u8>, other: NdTypedArray<Uint8ClampedArray, u8>): void {
    return NdTypedArrayAdd<Uint8ClampedArray, u8>(self, other);
}

export function NdUint8ClampedArrayGet(self: NdTypedArray<Uint8ClampedArray, u8>, index: Uint32Array): u8 {
    return NdTypedArrayGet<Uint8ClampedArray, u8>(self, index);
}

export function NdUint8ClampedArraySet(self: NdTypedArray<Uint8ClampedArray, u8>, index: Uint32Array, value: u8): void {
    return NdTypedArraySet<Uint8ClampedArray, u8>(self, index, value);
}

export function NdUint8ClampedArrayUnravel(self: NdTypedArray<Uint8ClampedArray, u8>, index: Uint32Array): i32 {
    return NdTypedArrayUnravel<Uint8ClampedArray, u8>(self, index);
}

export function NdUint8ClampedArrayGetShape(self: NdTypedArray<Uint8ClampedArray, u8>): Uint32Array {
    return NdTypedArrayGetShape<Uint8ClampedArray, u8>(self);
}

export function NdUint8ClampedArrayGetStrides(self: NdTypedArray<Uint8ClampedArray, u8>): Uint32Array {
    return NdTypedArrayGetStrides<Uint8ClampedArray, u8>(self);
}

export function NdUint8ClampedArrayGetData(self: NdTypedArray<Uint8ClampedArray, u8>): Uint8ClampedArray {
    return NdTypedArrayGetData<Uint8ClampedArray, u8>(self);
}
