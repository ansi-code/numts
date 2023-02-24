import {NdTypedArray, NdTypedArrayAdd, NdTypedArrayGet, NdTypedArrayGetData, NdTypedArrayGetShape, NdTypedArrayGetStrides, NdTypedArrayNew, NdTypedArraySet, NdTypedArrayUnravel} from "./ndtypedarray";

export function NdFloat64ArrayNew(data: Float64Array, shape: Uint32Array): NdTypedArray<Float64Array, f64> {
    return NdTypedArrayNew<Float64Array, f64>(data, shape);
}

export function NdFloat64ArrayAdd(self: NdTypedArray<Float64Array, f64>, other: NdTypedArray<Float64Array, f64>): void {
    return NdTypedArrayAdd<Float64Array, f64>(self, other);
}

export function NdFloat64ArrayGet(self: NdTypedArray<Float64Array, f64>, index: Uint32Array): f64 {
    return NdTypedArrayGet<Float64Array, f64>(self, index);
}

export function NdFloat64ArraySet(self: NdTypedArray<Float64Array, f64>, index: Uint32Array, value: f64): void {
    return NdTypedArraySet<Float64Array, f64>(self, index, value);
}

export function NdFloat64ArrayUnravel(self: NdTypedArray<Float64Array, f64>, index: Uint32Array): i32 {
    return NdTypedArrayUnravel<Float64Array, f64>(self, index);
}

export function NdFloat64ArrayGetShape(self: NdTypedArray<Float64Array, f64>): Uint32Array {
    return NdTypedArrayGetShape<Float64Array, f64>(self);
}

export function NdFloat64ArrayGetStrides(self: NdTypedArray<Float64Array, f64>): Uint32Array {
    return NdTypedArrayGetStrides<Float64Array, f64>(self);
}

export function NdFloat64ArrayGetData(self: NdTypedArray<Float64Array, f64>): Float64Array {
    return NdTypedArrayGetData<Float64Array, f64>(self);
}
