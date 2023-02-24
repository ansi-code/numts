import {NdTypedArray, NdTypedArrayAdd, NdTypedArrayArgmax, NdTypedArrayGet, NdTypedArrayGetData, NdTypedArrayGetShape, NdTypedArrayGetStrides, NdTypedArrayNew, NdTypedArraySet, NdTypedArrayUnravel} from "./ndtypedarray";
import {DataType} from "./typedarray";

export function NdInt8ArrayNew(data: Int8Array, shape: Int32Array): NdTypedArray<Int8Array, i8> {
    return NdTypedArrayNew<Int8Array, i8>(data, shape, DataType.i8);
}

export function NdInt8ArrayAdd(self: NdTypedArray<Int8Array, i8>, other: NdTypedArray<Int8Array, i8>): void {
    return NdTypedArrayAdd<Int8Array, i8>(self, other);
}

export function NdInt8ArrayGet(self: NdTypedArray<Int8Array, i8>, index: Int32Array): i8 {
    return NdTypedArrayGet<Int8Array, i8>(self, index);
}

export function NdInt8ArraySet(self: NdTypedArray<Int8Array, i8>, index: Int32Array, value: i8): void {
    return NdTypedArraySet<Int8Array, i8>(self, index, value);
}

export function NdInt8ArrayUnravel(self: NdTypedArray<Int8Array, i8>, index: Int32Array): i32 {
    return NdTypedArrayUnravel<Int8Array, i8>(self, index);
}

export function NdInt8ArrayGetShape(self: NdTypedArray<Int8Array, i8>): Int32Array {
    return NdTypedArrayGetShape<Int8Array, i8>(self);
}

export function NdInt8ArrayGetStrides(self: NdTypedArray<Int8Array, i8>): Int32Array {
    return NdTypedArrayGetStrides<Int8Array, i8>(self);
}

export function NdInt8ArrayGetData(self: NdTypedArray<Int8Array, i8>): Int8Array {
    return NdTypedArrayGetData<Int8Array, i8>(self);
}

export function NdInt8ArrayArgmax(self: NdTypedArray<Int8Array, i8>, axis: i32 = -1): NdTypedArray<Int8Array, i8> {
    return NdTypedArrayArgmax<Int8Array, i8>(self, axis);
}
