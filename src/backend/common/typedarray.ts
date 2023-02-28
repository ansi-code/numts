import * as crypto from "crypto";

export enum DataType {
    i8,
    u8,
    u8c,
    i16,
    u16,
    i32,
    u32,
    f32,
    f64,
}

export function TypedArrayNew<TArray extends TypedArray<T>, T>(length: u32, type: DataType): TArray {
    switch (type) {
        case DataType.i8:
            return changetype<TArray>(new Int8Array(length));
        case DataType.u8:
            return changetype<TArray>(new Uint8Array(length));
        case DataType.u8c:
            return changetype<TArray>(new Uint8ClampedArray(length));
        case DataType.i16:
            return changetype<TArray>(new Int16Array(length));
        case DataType.u16:
            return changetype<TArray>(new Uint16Array(length));
        case DataType.i32:
            return changetype<TArray>(new Int32Array(length));
        case DataType.u32:
            return changetype<TArray>(new Int32Array(length));
        case DataType.f32:
            return changetype<TArray>(new Float32Array(length));
        case DataType.f64:
            return changetype<TArray>(new Float64Array(length));
        default:
            throw Error("Invalid DataType");
    }
}

export function TypedArrayNewFilled<TArray extends TypedArray<T>, T extends number>(length: u32, type: DataType, value: T): TArray {
    const res = TypedArrayNew<TArray, T>(length, type);
    if (value !== 0)
        res.fill(value, 0, length);
    return res;
}

export function TypedArrayFromNumberArray<TArray extends TypedArray<T>, T extends number>(source: Array<number>, type: DataType): TArray {
    const res = TypedArrayNew<TArray, T>(source.length, type);
    res.set(source);
    return res;
}

export function TypedArrayFrom<TArray extends TypedArray<T>, T extends number>(source: TArray, type: DataType): TArray {
    const res = TypedArrayNew<TArray, T>(source.length, type);
    res.set(source);
    return res;
}

export function TypedArrayRandom<TArray extends TypedArray<T>, T extends number>(length: u32, type: DataType): TArray {
    const res = TypedArrayNew<TArray, T>(length, type);
    for (let i: u32 = 0; i < length; i++) {
        switch (type) {
            case DataType.f32:
            case DataType.f64:
                res[i] = Math.random() as T;
                break;
            case DataType.i8:
            case DataType.i16:
            case DataType.i32:
            case DataType.u8:
            case DataType.u16:
            case DataType.u32:
                res[i] = Math.floor(Math.random() * 256) as T;
                break;
            default:
                throw new Error(`Unsupported data type: ${type}`);
        }
    }
    return res;
}

export function TypedArrayArgQuickSort<TArray extends TypedArray<T>, T extends number>(self: TArray, indices: Int32Array, left: i32, right: i32, descending: boolean): void {
    if (left >= right) return;

    const pivotIndex = (left + right) >>> 1;
    const pivotValue = self[pivotIndex];

    let i = left - 1;
    let j = right + 1;

    const compare = (a: T, b: T, descending: boolean): T => (descending ? b - a : a - b) as T;

    while (true) {
        do i++; while (compare(self[i] as T, pivotValue as T, descending) < 0);
        do j--; while (compare(self[j] as T, pivotValue as T, descending) > 0);
        if (i >= j) break;

        TypedArraySwap<TArray, T>(self, i, j);
        TypedArraySwap<Int32Array, i32>(indices, i, j);
    }

    TypedArrayArgQuickSort<TArray, T>(self, indices, left, j, descending);
    TypedArrayArgQuickSort<TArray, T>(self, indices, j + 1, right, descending);
}

export function TypedArraySwap<TArray extends TypedArray<T>, T extends number>(self: TArray, i: i32, j: i32): void {
    const tmp = self[i];
    self[i] = self[j];
    self[j] = tmp;
}

export function TypedArrayEqual<TArray extends TypedArray<T>, T extends number>(a: TArray, b: TArray): boolean {
    if (a.length !== b.length) {
        return false;
    }
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            return false;
        }
    }
    return true;
}
