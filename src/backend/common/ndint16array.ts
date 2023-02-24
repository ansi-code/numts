import {NdTypedArray, NdTypedArrayAdd, NdTypedArrayArgmax, NdTypedArrayGet, NdTypedArrayGetData, NdTypedArrayGetShape, NdTypedArrayGetStrides, NdTypedArrayNew, NdTypedArraySet, NdTypedArrayUnravel} from "./ndtypedarray";
import {DataType} from "./typedarray";

export function NdInt16ArrayNew(data: Int16Array, shape: Int32Array): NdTypedArray<Int16Array, i16> {
    return NdTypedArrayNew<Int16Array, i16>(data, shape, DataType.i16);
}

export function NdInt16ArrayAdd(self: NdTypedArray<Int16Array, i16>, other: NdTypedArray<Int16Array, i16>): void {
    return NdTypedArrayAdd<Int16Array, i16>(self, other);
}

export function NdInt16ArrayGet(self: NdTypedArray<Int16Array, i16>, index: Int32Array): i16 {
    return NdTypedArrayGet<Int16Array, i16>(self, index);
}

export function NdInt16ArraySet(self: NdTypedArray<Int16Array, i16>, index: Int32Array, value: i16): void {
    return NdTypedArraySet<Int16Array, i16>(self, index, value);
}

export function NdInt16ArrayUnravel(self: NdTypedArray<Int16Array, i16>, index: Int32Array): i32 {
    return NdTypedArrayUnravel<Int16Array, i16>(self, index);
}

export function NdInt16ArrayGetShape(self: NdTypedArray<Int16Array, i16>): Int32Array {
    return NdTypedArrayGetShape<Int16Array, i16>(self);
}

export function NdInt16ArrayGetStrides(self: NdTypedArray<Int16Array, i16>): Int32Array {
    return NdTypedArrayGetStrides<Int16Array, i16>(self);
}

export function NdInt16ArrayGetData(self: NdTypedArray<Int16Array, i16>): Int16Array {
    return NdTypedArrayGetData<Int16Array, i16>(self);
}

export function NdInt16ArrayArgmax(self: NdTypedArray<Int16Array, i16>, axis: i32 = -1): NdTypedArray<Int16Array, i16> {
    return NdTypedArrayArgmax<Int16Array, i16>(self, axis);
}
