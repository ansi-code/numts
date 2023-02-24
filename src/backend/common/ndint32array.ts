import {NdTypedArray, NdTypedArrayAdd, NdTypedArrayArgmax, NdTypedArrayGet, NdTypedArrayGetData, NdTypedArrayGetShape, NdTypedArrayGetStrides, NdTypedArrayNew, NdTypedArraySet, NdTypedArrayUnravel} from "./ndtypedarray";
import {DataType} from "./typedarray";

export function NdInt32ArrayNew(data: Int32Array, shape: Int32Array): NdTypedArray<Int32Array, i32> {
    return NdTypedArrayNew<Int32Array, i32>(data, shape, DataType.i32);
}

export function NdInt32ArrayAdd(self: NdTypedArray<Int32Array, i32>, other: NdTypedArray<Int32Array, i32>): void {
    return NdTypedArrayAdd<Int32Array, i32>(self, other);
}

export function NdInt32ArrayGet(self: NdTypedArray<Int32Array, i32>, index: Int32Array): i32 {
    return NdTypedArrayGet<Int32Array, i32>(self, index);
}

export function NdInt32ArraySet(self: NdTypedArray<Int32Array, i32>, index: Int32Array, value: i32): void {
    return NdTypedArraySet<Int32Array, i32>(self, index, value);
}

export function NdInt32ArrayUnravel(self: NdTypedArray<Int32Array, i32>, index: Int32Array): i32 {
    return NdTypedArrayUnravel<Int32Array, i32>(self, index);
}

export function NdInt32ArrayGetShape(self: NdTypedArray<Int32Array, i32>): Int32Array {
    return NdTypedArrayGetShape<Int32Array, i32>(self);
}

export function NdInt32ArrayGetStrides(self: NdTypedArray<Int32Array, i32>): Int32Array {
    return NdTypedArrayGetStrides<Int32Array, i32>(self);
}

export function NdInt32ArrayGetData(self: NdTypedArray<Int32Array, i32>): Int32Array {
    return NdTypedArrayGetData<Int32Array, i32>(self);
}

export function NdInt32ArrayArgmax(self: NdTypedArray<Int32Array, i32>, axis: i32 = -1): NdTypedArray<Int32Array, i32> {
    return NdTypedArrayArgmax<Int32Array, i32>(self, axis);
}
