import {NdTypedArray, NdTypedArrayAdd, NdTypedArrayArgmax, NdTypedArrayGet, NdTypedArrayGetData, NdTypedArrayGetShape, NdTypedArrayGetStrides, NdTypedArrayNew, NdTypedArraySet, NdTypedArrayUnravel} from "./ndtypedarray";
import {DataType} from "./typedarray";

export function NdUint32ArrayNew(data: Uint32Array, shape: Int32Array): NdTypedArray<Uint32Array, u32> {
    return NdTypedArrayNew<Uint32Array, u32>(data, shape, DataType.u32);
}

export function NdUint32ArrayAdd(self: NdTypedArray<Uint32Array, u32>, other: NdTypedArray<Uint32Array, u32>): void {
    return NdTypedArrayAdd<Uint32Array, u32>(self, other);
}

export function NdUint32ArrayGet(self: NdTypedArray<Uint32Array, u32>, index: Int32Array): u32 {
    return NdTypedArrayGet<Uint32Array, u32>(self, index);
}

export function NdUint32ArraySet(self: NdTypedArray<Uint32Array, u32>, index: Int32Array, value: u32): void {
    return NdTypedArraySet<Uint32Array, u32>(self, index, value);
}

export function NdUint32ArrayUnravel(self: NdTypedArray<Uint32Array, u32>, index: Int32Array): i32 {
    return NdTypedArrayUnravel<Uint32Array, u32>(self, index);
}

export function NdUint32ArrayGetShape(self: NdTypedArray<Uint32Array, u32>): Int32Array {
    return NdTypedArrayGetShape<Uint32Array, u32>(self);
}

export function NdUint32ArrayGetStrides(self: NdTypedArray<Uint32Array, u32>): Int32Array {
    return NdTypedArrayGetStrides<Uint32Array, u32>(self);
}

export function NdUint32ArrayGetData(self: NdTypedArray<Uint32Array, u32>): Uint32Array {
    return NdTypedArrayGetData<Uint32Array, u32>(self);
}

export function NdUint32ArrayArgmax(self: NdTypedArray<Uint32Array, u32>, axis: i32 = -1): NdTypedArray<Int32Array, i32> {
    return NdTypedArrayArgmax<Uint32Array, u32>(self, axis);
}
