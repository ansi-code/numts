import {NdTypedArray, NdTypedArrayAdd, NdTypedArrayGet, NdTypedArrayGetData, NdTypedArrayGetShape, NdTypedArrayGetStrides, NdTypedArrayNew, NdTypedArraySet, NdTypedArrayUnravel} from "./ndtypedarray";

export function NdInt16ArrayNew(data: Int16Array, shape: Uint32Array): NdTypedArray<Int16Array, i16> {
    return NdTypedArrayNew<Int16Array, i16>(data, shape);
}

export function NdInt16ArrayAdd(self: NdTypedArray<Int16Array, i16>, other: NdTypedArray<Int16Array, i16>): void {
    return NdTypedArrayAdd<Int16Array, i16>(self, other);
}

export function NdInt16ArrayGet(self: NdTypedArray<Int16Array, i16>, index: Uint32Array): i16 {
    return NdTypedArrayGet<Int16Array, i16>(self, index);
}

export function NdInt16ArraySet(self: NdTypedArray<Int16Array, i16>, index: Uint32Array, value: i16): void {
    return NdTypedArraySet<Int16Array, i16>(self, index, value);
}

export function NdInt16ArrayUnravel(self: NdTypedArray<Int16Array, i16>, index: Uint32Array): i32 {
    return NdTypedArrayUnravel<Int16Array, i16>(self, index);
}

export function NdInt16ArrayGetShape(self: NdTypedArray<Int16Array, i16>): Uint32Array {
    return NdTypedArrayGetShape<Int16Array, i16>(self);
}

export function NdInt16ArrayGetStrides(self: NdTypedArray<Int16Array, i16>): Uint32Array {
    return NdTypedArrayGetStrides<Int16Array, i16>(self);
}

export function NdInt16ArrayGetData(self: NdTypedArray<Int16Array, i16>): Int16Array {
    return NdTypedArrayGetData<Int16Array, i16>(self);
}
