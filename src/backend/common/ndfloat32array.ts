import {NdTypedArray, NdTypedArrayAdd, NdTypedArrayGet, NdTypedArrayGetData, NdTypedArrayGetShape, NdTypedArrayGetStrides, NdTypedArrayNew, NdTypedArraySet, NdTypedArrayUnravel} from "./ndtypedarray";

export function NdFloat32ArrayNew(data: Float32Array, shape: Uint32Array): NdTypedArray<Float32Array, f32> {
    return NdTypedArrayNew<Float32Array, f32>(data, shape);
}

export function NdFloat32ArrayAdd(self: NdTypedArray<Float32Array, f32>, other: NdTypedArray<Float32Array, f32>): void {
    return NdTypedArrayAdd<Float32Array, f32>(self, other);
}

export function NdFloat32ArrayGet(self: NdTypedArray<Float32Array, f32>, index: Uint32Array): f32 {
    return NdTypedArrayGet<Float32Array, f32>(self, index);
}

export function NdFloat32ArraySet(self: NdTypedArray<Float32Array, f32>, index: Uint32Array, value: f32): void {
    return NdTypedArraySet<Float32Array, f32>(self, index, value);
}

export function NdFloat32ArrayUnravel(self: NdTypedArray<Float32Array, f32>, index: Uint32Array): i32 {
    return NdTypedArrayUnravel<Float32Array, f32>(self, index);
}

export function NdFloat32ArrayGetShape(self: NdTypedArray<Float32Array, f32>): Uint32Array {
    return NdTypedArrayGetShape<Float32Array, f32>(self);
}

export function NdFloat32ArrayGetStrides(self: NdTypedArray<Float32Array, f32>): Uint32Array {
    return NdTypedArrayGetStrides<Float32Array, f32>(self);
}

export function NdFloat32ArrayGetData(self: NdTypedArray<Float32Array, f32>): Float32Array {
    return NdTypedArrayGetData<Float32Array, f32>(self);
}
