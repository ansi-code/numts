import {NdArray} from "../../common";

declare type Int8NdArray = NdArray<Int8Array, i8>;
declare type Uint8NdArray = NdArray<Uint8Array, u8>;
declare type Int16NdArray = NdArray<Int16Array, i16>;
declare type Uint16NdArray = NdArray<Uint16Array, u16>;
declare type Int32NdArray = NdArray<Int32Array, i32>;
declare type Uint32NdArray = NdArray<Uint32Array, u32>;
//declare type Int64NdArray = NdArray<Int64Array, i64>;
//declare type Uint64NdArray = NdArray<Uint64Array, u64>;
declare type Float32NdArray = NdArray<Float32Array, f32>;
declare type Float64NdArray = NdArray<Float64Array, f64>;

export function Int8NdArrayNew(data: Int8Array, shape: Uint8Array): Int8NdArray {
    return new NdArray(data, shape);
}

export function Int8NdArrayAdd(a: Int8NdArray, b: Int8NdArray): Int8NdArray {
    return a.add(b)
}
