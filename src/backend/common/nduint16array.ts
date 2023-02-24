import {NdTypedArray, NdTypedArrayAdd, NdTypedArrayGet, NdTypedArrayGetData, NdTypedArrayGetShape, NdTypedArrayGetStrides, NdTypedArrayNew, NdTypedArraySet, NdTypedArrayUnravel} from "./ndtypedarray";

export function NdUint16ArrayNew(data: Uint16Array, shape: Uint32Array): NdTypedArray<Uint16Array, u16> {
    return NdTypedArrayNew<Uint16Array, u16>(data, shape);
}

export function NdUint16ArrayAdd(self: NdTypedArray<Uint16Array, u16>, other: NdTypedArray<Uint16Array, u16>): void {
    return NdTypedArrayAdd<Uint16Array, u16>(self, other);
}

export function NdUint16ArrayGet(self: NdTypedArray<Uint16Array, u16>, index: Uint32Array): u16 {
    return NdTypedArrayGet<Uint16Array, u16>(self, index);
}

export function NdUint16ArraySet(self: NdTypedArray<Uint16Array, u16>, index: Uint32Array, value: u16): void {
    return NdTypedArraySet<Uint16Array, u16>(self, index, value);
}

export function NdUint16ArrayUnravel(self: NdTypedArray<Uint16Array, u16>, index: Uint32Array): i32 {
    return NdTypedArrayUnravel<Uint16Array, u16>(self, index);
}

export function NdUint16ArrayGetShape(self: NdTypedArray<Uint16Array, u16>): Uint32Array {
    return NdTypedArrayGetShape<Uint16Array, u16>(self);
}

export function NdUint16ArrayGetStrides(self: NdTypedArray<Uint16Array, u16>): Uint32Array {
    return NdTypedArrayGetStrides<Uint16Array, u16>(self);
}

export function NdUint16ArrayGetData(self: NdTypedArray<Uint16Array, u16>): Uint16Array {
    return NdTypedArrayGetData<Uint16Array, u16>(self);
}
