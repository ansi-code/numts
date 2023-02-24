import {NdTypedArray, NdTypedArrayAdd, NdTypedArrayArgmax, NdTypedArrayGet, NdTypedArrayGetData, NdTypedArrayGetShape, NdTypedArrayGetStrides, NdTypedArrayNew, NdTypedArraySet, NdTypedArrayUnravel} from "./ndtypedarray";
import {DataType} from "./typedarray";

export function NdFloat32ArrayNew(data: Float32Array, shape: Int32Array): NdTypedArray<Float32Array, f32> {
    return NdTypedArrayNew<Float32Array, f32>(data, shape, DataType.f32);
}

export function NdFloat32ArrayAdd(self: NdTypedArray<Float32Array, f32>, other: NdTypedArray<Float32Array, f32>): void {
    return NdTypedArrayAdd<Float32Array, f32>(self, other);
}

export function NdFloat32ArrayGet(self: NdTypedArray<Float32Array, f32>, index: Int32Array): f32 {
    return NdTypedArrayGet<Float32Array, f32>(self, index);
}

export function NdFloat32ArraySet(self: NdTypedArray<Float32Array, f32>, index: Int32Array, value: f32): void {
    return NdTypedArraySet<Float32Array, f32>(self, index, value);
}

export function NdFloat32ArrayUnravel(self: NdTypedArray<Float32Array, f32>, index: Int32Array): i32 {
    return NdTypedArrayUnravel<Float32Array, f32>(self, index);
}

export function NdFloat32ArrayGetShape(self: NdTypedArray<Float32Array, f32>): Int32Array {
    return NdTypedArrayGetShape<Float32Array, f32>(self);
}

export function NdFloat32ArrayGetStrides(self: NdTypedArray<Float32Array, f32>): Int32Array {
    return NdTypedArrayGetStrides<Float32Array, f32>(self);
}

export function NdFloat32ArrayGetData(self: NdTypedArray<Float32Array, f32>): Float32Array {
    return NdTypedArrayGetData<Float32Array, f32>(self);
}

export function NdFloat32ArrayArgmax(self: NdTypedArray<Float32Array, f32>, axis: i32 = -1): NdTypedArray<Float32Array, f32> {
    return NdTypedArrayArgmax<Float32Array, f32>(self, axis);
}
