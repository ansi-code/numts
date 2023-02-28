import * as ndta from "./ndtypedarray";
import * as ta from "./typedarray";

type TArray = Int8Array;
type T = i8;
const DataType = ta.DataType.i8;

export function NdInt8ArrayNew(data: TArray, shape: Int32Array): ndta.NdTypedArray<TArray, T> {
    return ndta.NdTypedArrayNew<TArray, T>(data, shape, DataType);
}

export function NdInt8ArrayRandom(shape: Int32Array): ndta.NdTypedArray<TArray, T> {
    return ndta.NdTypedArrayRandom<TArray, T>(shape, DataType);
}

export function NdInt8ArrayGetShape(self: ndta.NdTypedArray<TArray, T>): Int32Array {
    return ndta.NdTypedArrayGetShape<TArray, T>(self);
}

export function NdInt8ArrayGetStrides(self: ndta.NdTypedArray<TArray, T>): Int32Array {
    return ndta.NdTypedArrayGetStrides<TArray, T>(self);
}

export function NdInt8ArrayGetData(self: ndta.NdTypedArray<TArray, T>): TArray {
    return ndta.NdTypedArrayGetData<TArray, T>(self);
}

export function NdInt8ArrayGetType(self: ndta.NdTypedArray<TArray, T>): ta.DataType {
    return ndta.NdTypedArrayGetType<TArray, T>(self);
}

export function NdInt8ArrayReshape(self: ndta.NdTypedArray<TArray, T>, shape: Int32Array): void {
    return ndta.NdTypedArrayReshape<TArray, T>(self, shape);
}

export function NdInt8ArrayClone(self: ndta.NdTypedArray<TArray, T>): ndta.NdTypedArray<TArray, T> {
    return ndta.NdTypedArrayClone<TArray, T>(self);
}

export function NdInt8ArrayGet(self: ndta.NdTypedArray<TArray, T>, index: Int32Array): T {
    return ndta.NdTypedArrayGet<TArray, T>(self, index);
}

export function NdInt8ArraySet(self: ndta.NdTypedArray<TArray, T>, index: Int32Array, value: T): void {
    return ndta.NdTypedArraySet<TArray, T>(self, index, value);
}

export function NdInt8ArrayUnravel(self: ndta.NdTypedArray<TArray, T>, index: Int32Array): i32 {
    return ndta.NdTypedArrayUnravel<TArray, T>(self, index);
}

export function NdInt8ArraySlice(self: ndta.NdTypedArray<TArray, T>, args: Array<Array<i32>>): ndta.NdTypedArray<TArray, T> {
    return ndta.NdTypedArraySlice<TArray, T>(self, args);
}

export function NdInt8ArrayAdd(self: ndta.NdTypedArray<TArray, T>, other: ndta.NdTypedArray<TArray, T>): void {
    return ndta.NdTypedArrayAdd<TArray, T>(self, other);
}

export function NdInt8ArraySub(self: ndta.NdTypedArray<TArray, T>, other: ndta.NdTypedArray<TArray, T>): void {
    return ndta.NdTypedArraySub<TArray, T>(self, other);
}

export function NdInt8ArrayMax(self: ndta.NdTypedArray<TArray, T>, axis: i32): ndta.NdTypedArray<TArray, T> {
    return ndta.NdTypedArrayMax<TArray, T>(self, axis);
}

export function NdInt8ArrayMin(self: ndta.NdTypedArray<TArray, T>, axis: i32): ndta.NdTypedArray<TArray, T> {
    return ndta.NdTypedArrayMin<TArray, T>(self, axis);
}

export function NdInt8ArrayArgmax(self: ndta.NdTypedArray<TArray, T>, axis: i32): ndta.NdTypedArray<Int32Array, i32> {
    return ndta.NdTypedArrayArgMax<TArray, T>(self, axis);
}

export function NdInt8ArrayArgmin(self: ndta.NdTypedArray<TArray, T>, axis: i32): ndta.NdTypedArray<Int32Array, i32> {
    return ndta.NdTypedArrayArgMin<TArray, T>(self, axis);
}

export function NdInt8ArraySoftmax(self: ndta.NdTypedArray<TArray, T>): void {
    return ndta.NdTypedArraySoftmax<TArray, T>(self);
}

export function NdInt8ArrayTopK(self: ndta.NdTypedArray<TArray, T>, k: i32, axis: i32): ndta.NdTypedArray<Int32Array, i32> {
    return ndta.NdTypedArrayTopK<TArray, T>(self, k, axis);
}

export function NdInt8ArrayArgSort(self: ndta.NdTypedArray<TArray, T>, axis: i32, descending: boolean = true): ndta.NdTypedArray<Int32Array, i32> {
    return ndta.NdTypedArrayArgSort<TArray, T>(self, axis, descending);
}

export function NdInt8ArrayScatter(self: ndta.NdTypedArray<TArray, T>, axis: i32, indices: ndta.NdTypedArray<Int32Array, i32>, source: ndta.NdTypedArray<TArray, T>): void {
    return ndta.NdTypedArrayScatter<TArray, T>(self, axis, indices, source);
}

export function NdInt8ArrayWhere(self: ndta.NdTypedArray<TArray, T>, cond: (v: T) => u8): ndta.NdTypedArray<Uint8Array, u8> {
    return ndta.NdTypedArrayWhere<TArray, T>(self, cond);
}

export function NdInt8ArrayMaskedFill(self: ndta.NdTypedArray<TArray, T>, mask: ndta.NdTypedArray<Uint8Array, u8>, value: T): void {
    return ndta.NdTypedArrayMaskedFill<TArray, T>(self, mask, value);
}

export function NdInt8ArrayCumsum(self: ndta.NdTypedArray<TArray, T>, axis: i32): void {
    return ndta.NdTypedArrayCumsum<TArray, T>(self, axis);
}

export function NdInt8ArrayArgChoice(self: ndta.NdTypedArray<TArray, T>, size: i32, p: ndta.NdTypedArray<Float64Array, f64>): ndta.NdTypedArray<TArray, T> {
    return ndta.NdTypedArrayArgChoice<TArray, T>(self, size, p);
}
