import {NdTypedArray, NdTypedArrayAdd, NdTypedArrayGet, NdTypedArrayGetData, NdTypedArrayGetShape, NdTypedArrayGetStrides, NdTypedArrayNew, NdTypedArraySet, NdTypedArrayUnravel} from "./ndtypedarray";

export function NdInt32ArrayNew(data: Int32Array, shape: Uint32Array): NdTypedArray<Int32Array, i32> {
    return NdTypedArrayNew<Int32Array, i32>(data, shape);
}

export function NdInt32ArrayAdd(self: NdTypedArray<Int32Array, i32>, other: NdTypedArray<Int32Array, i32>): void {
    return NdTypedArrayAdd<Int32Array, i32>(self, other);
}

export function NdInt32ArrayGet(self: NdTypedArray<Int32Array, i32>, index: Uint32Array): i32 {
    return NdTypedArrayGet<Int32Array, i32>(self, index);
}

export function NdInt32ArraySet(self: NdTypedArray<Int32Array, i32>, index: Uint32Array, value: i32): void {
    return NdTypedArraySet<Int32Array, i32>(self, index, value);
}

export function NdInt32ArrayUnravel(self: NdTypedArray<Int32Array, i32>, index: Uint32Array): i32 {
    return NdTypedArrayUnravel<Int32Array, i32>(self, index);
}

export function NdInt32ArrayGetShape(self: NdTypedArray<Int32Array, i32>): Uint32Array {
    return NdTypedArrayGetShape<Int32Array, i32>(self);
}

export function NdInt32ArrayGetStrides(self: NdTypedArray<Int32Array, i32>): Uint32Array {
    return NdTypedArrayGetStrides<Int32Array, i32>(self);
}

export function NdInt32ArrayGetData(self: NdTypedArray<Int32Array, i32>): Int32Array {
    return NdTypedArrayGetData<Int32Array, i32>(self);
}
