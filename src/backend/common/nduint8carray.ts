import * as ta from "./typedarray";
import * as ndta from "./ndtypedarray";

type TArray = Uint8ClampedArray;
type T = i8;
const DataType = ta.DataType.i8;

export function NdUint8ClampedArrayNew(data: TArray, shape: Int32Array): ndta.NdTypedArray<TArray, T> {
    return ndta.NdTypedArrayNew<TArray, T>(data, shape, DataType);
}

export function NdUint8ClampedArrayGetShape(self: ndta.NdTypedArray<TArray, T>): Int32Array {
    return ndta.NdTypedArrayGetShape<TArray, T>(self);
}

export function NdUint8ClampedArrayGetStrides(self: ndta.NdTypedArray<TArray, T>): Int32Array {
    return ndta.NdTypedArrayGetStrides<TArray, T>(self);
}

export function NdUint8ClampedArrayGetData(self: ndta.NdTypedArray<TArray, T>): TArray {
    return ndta.NdTypedArrayGetData<TArray, T>(self);
}

export function NdUint8ClampedArrayGetType(self: ndta.NdTypedArray<TArray, T>): ta.DataType {
    return ndta.NdTypedArrayGetType<TArray, T>(self);
}

export function NdUint8ClampedArrayReshape(self: ndta.NdTypedArray<TArray, T>, shape: Int32Array): void {
    return ndta.NdTypedArrayReshape<TArray, T>(self, shape);
}

export function NdUint8ClampedArrayClone(self: ndta.NdTypedArray<TArray, T>): ndta.NdTypedArray<TArray, T> {
    return ndta.NdTypedArrayClone<TArray, T>(self);
}

export function NdUint8ClampedArrayGet(self: ndta.NdTypedArray<TArray, T>, index: Int32Array): T {
    return ndta.NdTypedArrayGet<TArray, T>(self, index);
}

export function NdUint8ClampedArraySet(self: ndta.NdTypedArray<TArray, T>, index: Int32Array, value: T): void {
    return ndta.NdTypedArraySet<TArray, T>(self, index, value);
}

export function NdUint8ClampedArrayUnravel(self: ndta.NdTypedArray<TArray, T>, index: Int32Array): i32 {
    return ndta.NdTypedArrayUnravel<TArray, T>(self, index);
}

export function NdUint8ClampedArraySlice(self: ndta.NdTypedArray<TArray, T>, ...args: Array<i32 | Array<i32 | null> | null>): ndta.NdTypedArray<TArray, T> {
    return ndta.NdTypedArraySlice<TArray, T>(self, ...args);
}

export function NdUint8ClampedArrayAdd(self: ndta.NdTypedArray<TArray, T>, other: ndta.NdTypedArray<TArray, T>): void {
    return ndta.NdTypedArrayAdd<TArray, T>(self, other);
}

export function NdUint8ClampedArraySub(self: ndta.NdTypedArray<TArray, T>, other: ndta.NdTypedArray<TArray, T>): void {
    return ndta.NdTypedArraySub<TArray, T>(self, other);
}

export function NdUint8ClampedArrayMax(self: ndta.NdTypedArray<TArray, T>, axis: i32 = -1): ndta.NdTypedArray<TArray, T> {
    return ndta.NdTypedArrayMax<TArray, T>(self, axis);
}

export function NdUint8ClampedArrayMin(self: ndta.NdTypedArray<TArray, T>, axis: i32 = -1): ndta.NdTypedArray<TArray, T> {
    return ndta.NdTypedArrayMin<TArray, T>(self, axis);
}

export function NdUint8ClampedArrayArgmax(self: ndta.NdTypedArray<TArray, T>, axis: i32 = -1): ndta.NdTypedArray<Int32Array, i32> {
    return ndta.NdTypedArrayArgMax<TArray, T>(self, axis);
}

export function NdUint8ClampedArrayArgmin(self: ndta.NdTypedArray<TArray, T>, axis: i32 = -1): ndta.NdTypedArray<Int32Array, i32> {
    return ndta.NdTypedArrayArgMin<TArray, T>(self, axis);
}

export function NdUint8ClampedArraySoftmax(self: ndta.NdTypedArray<TArray, T>): void {
    return ndta.NdTypedArraySoftmax<TArray, T>(self);
}

export function NdUint8ClampedArrayTopK(self: ndta.NdTypedArray<TArray, T>, k: i32 = 1, axis: i32 = -1): ndta.NdTypedArray<Int32Array, i32> {
    return ndta.NdTypedArrayTopK<TArray, T>(self, k, axis);
}

export function NdUint8ClampedArrayArgSort(self: ndta.NdTypedArray<TArray, T>, axis: i32 = -1, descending: boolean = true): ndta.NdTypedArray<Int32Array, i32> {
    return ndta.NdTypedArrayArgSort<TArray, T>(self, axis, descending);
}

export function NdUint8ClampedArrayScatter(self: ndta.NdTypedArray<TArray, T>, axis: i32 = -1, indices: ndta.NdTypedArray<Int32Array, i32>, source: ndta.NdTypedArray<TArray, T>): void {
    return ndta.NdTypedArrayScatter<TArray, T>(self, axis, indices, source);
}

export function NdUint8ClampedArrayWhere(self: ndta.NdTypedArray<TArray, T>, cond: (v: T) => u8): ndta.NdTypedArray<Uint8Array, u8> {
    return ndta.NdTypedArrayWhere<TArray, T>(self, cond);
}

export function NdUint8ClampedArrayMaskedFill(self: ndta.NdTypedArray<TArray, T>, mask: ndta.NdTypedArray<Uint8Array, u8>, value: T): void {
    return ndta.NdTypedArrayMaskedFill<TArray, T>(self, mask, value);
}

export function NdUint8ClampedArrayCumsum(self: ndta.NdTypedArray<TArray, T>, axis: i32 = -1): void {
    return ndta.NdTypedArrayCumsum<TArray, T>(self, axis);
}

export function NdUint8ClampedArrayArgChoice(self: ndta.NdTypedArray<TArray, T>, size: i32 = 1, p: ndta.NdTypedArray<Float64Array, f64>): ndta.NdTypedArray<TArray, T> {
    return ndta.NdTypedArrayArgChoice<TArray, T>(self, size, p);
}
