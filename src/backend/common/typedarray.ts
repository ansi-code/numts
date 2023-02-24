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
