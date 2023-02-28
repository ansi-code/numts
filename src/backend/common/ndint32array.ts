import * as ta from "./typedarray";
import * as ndta from "./ndtypedarray";

type TArray = Int32Array;
type T = i32;
const DataType = ta.DataType.i32;

export function NdInt32ArrayNew(data: TArray, shape: Int32Array): ndta.NdTypedArray<TArray, T> {
    return ndta.NdTypedArrayNew<TArray, T>(data, shape, DataType);
}

export function NdInt32ArrayGetShape(self: ndta.NdTypedArray<TArray, T>): Int32Array {
    return ndta.NdTypedArrayGetShape<TArray, T>(self);
}

export function NdInt32ArrayGetStrides(self: ndta.NdTypedArray<TArray, T>): Int32Array {
    return ndta.NdTypedArrayGetStrides<TArray, T>(self);
}

export function NdInt32ArrayGetData(self: ndta.NdTypedArray<TArray, T>): TArray {
    return ndta.NdTypedArrayGetData<TArray, T>(self);
}

export function NdInt32ArrayGetType(self: ndta.NdTypedArray<TArray, T>): ta.DataType {
    return ndta.NdTypedArrayGetType<TArray, T>(self);
}

export function NdInt32ArrayReshape(self: ndta.NdTypedArray<TArray, T>, shape: Int32Array): void {
    return ndta.NdTypedArrayReshape<TArray, T>(self, shape);
}

export function NdInt32ArrayClone(self: ndta.NdTypedArray<TArray, T>): ndta.NdTypedArray<TArray, T> {
    return ndta.NdTypedArrayClone<TArray, T>(self);
}

export function NdInt32ArrayGet(self: ndta.NdTypedArray<TArray, T>, index: Int32Array): T {
    return ndta.NdTypedArrayGet<TArray, T>(self, index);
}

export function NdInt32ArraySet(self: ndta.NdTypedArray<TArray, T>, index: Int32Array, value: T): void {
    return ndta.NdTypedArraySet<TArray, T>(self, index, value);
}

export function NdInt32ArrayUnravel(self: ndta.NdTypedArray<TArray, T>, index: Int32Array): i32 {
    return ndta.NdTypedArrayUnravel<TArray, T>(self, index);
}

export function NdInt32ArraySlice(self: ndta.NdTypedArray<TArray, T>, ...args: Array<i32 | Array<i32 | null> | null>): ndta.NdTypedArray<TArray, T> {
    return ndta.NdTypedArraySlice<TArray, T>(self, ...args);
}

export function NdInt32ArrayAdd(self: ndta.NdTypedArray<TArray, T>, other: ndta.NdTypedArray<TArray, T>): void {
    return ndta.NdTypedArrayAdd<TArray, T>(self, other);
}

export function NdInt32ArraySub(self: ndta.NdTypedArray<TArray, T>, other: ndta.NdTypedArray<TArray, T>): void {
    return ndta.NdTypedArraySub<TArray, T>(self, other);
}

export function NdInt32ArrayMax(self: ndta.NdTypedArray<TArray, T>, axis: i32 = -1): ndta.NdTypedArray<TArray, T> {
    return ndta.NdTypedArrayMax<TArray, T>(self, axis);
}

export function NdInt32ArrayMin(self: ndta.NdTypedArray<TArray, T>, axis: i32 = -1): ndta.NdTypedArray<TArray, T> {
    return ndta.NdTypedArrayMin<TArray, T>(self, axis);
}

export function NdInt32ArrayArgmax(self: ndta.NdTypedArray<TArray, T>, axis: i32 = -1): ndta.NdTypedArray<Int32Array, i32> {
    return ndta.NdTypedArrayArgMax<TArray, T>(self, axis);
}

export function NdInt32ArrayArgmin(self: ndta.NdTypedArray<TArray, T>, axis: i32 = -1): ndta.NdTypedArray<Int32Array, i32> {
    return ndta.NdTypedArrayArgMin<TArray, T>(self, axis);
}

export function NdInt32ArraySoftmax(self: ndta.NdTypedArray<TArray, T>): void {
    return ndta.NdTypedArraySoftmax<TArray, T>(self);
}

export function NdInt32ArrayTopK(self: ndta.NdTypedArray<TArray, T>, k: i32 = 1, axis: i32 = -1): ndta.NdTypedArray<Int32Array, i32> {
    return ndta.NdTypedArrayTopK<TArray, T>(self, k, axis);
}

export function NdInt32ArrayArgSort(self: ndta.NdTypedArray<TArray, T>, axis: i32 = -1, descending: boolean = true): ndta.NdTypedArray<Int32Array, i32> {
    return ndta.NdTypedArrayArgSort<TArray, T>(self, axis, descending);
}

export function NdInt32ArrayScatter(self: ndta.NdTypedArray<TArray, T>, axis: i32 = -1, indices: ndta.NdTypedArray<Int32Array, i32>, source: ndta.NdTypedArray<TArray, T>): void {
    return ndta.NdTypedArrayScatter<TArray, T>(self, axis, indices, source);
}

export function NdInt32ArrayWhere(self: ndta.NdTypedArray<TArray, T>, cond: (v: T) => u8): ndta.NdTypedArray<Uint8Array, u8> {
    return ndta.NdTypedArrayWhere<TArray, T>(self, cond);
}

export function NdInt32ArrayMaskedFill(self: ndta.NdTypedArray<TArray, T>, mask: ndta.NdTypedArray<Uint8Array, u8>, value: T): void {
    return ndta.NdTypedArrayMaskedFill<TArray, T>(self, mask, value);
}

export function NdInt32ArrayCumsum(self: ndta.NdTypedArray<TArray, T>, axis: i32 = -1): void {
    return ndta.NdTypedArrayCumsum<TArray, T>(self, axis);
}

export function NdInt32ArrayArgChoice(self: ndta.NdTypedArray<TArray, T>, size: i32 = 1, p: ndta.NdTypedArray<Float64Array, f64>): ndta.NdTypedArray<TArray, T> {
    return ndta.NdTypedArrayArgChoice<TArray, T>(self, size, p);
}
