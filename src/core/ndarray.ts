export type i8 = number;
export type i16 = number;
export type i32 = number;
export type i64 = number;
export type u8 = number;
export type u8c = number;
export type u16 = number;
export type u32 = number;
export type u64 = number;
export type f32 = number;
export type f64 = number;

export interface DataTypedArray {
    i8: Int8Array;
    i16: Int16Array;
    i32: Int32Array;
    i64: BigInt64Array;
    u8: Uint8Array;
    u8c: Uint8ClampedArray;
    u16: Uint16Array;
    u32: Uint32Array;
    u64: BigUint64Array;
    f32: Float32Array;
    f64: Float64Array;

    number: Float64Array; // number[] or Float64Array
    string: Array<string>;
}

export type DataType = keyof DataTypedArray;
//export type DataType = "i8" | "i16" | "i32" | "i64" | "u8" | "u8c" | "u16" | "u32" | "u64" | "f32" | "f64" | "number" | "string";

export class NdArray<T extends DataType> {
    private readonly data: DataTypedArray[T];
    private readonly shape: DataTypedArray["u8"];
    private readonly strides: DataTypedArray["u8"];

    constructor(data: DataTypedArray[T], shape: DataTypedArray["u8"]) {
        if (data.length !== shape.reduce((a, b) => a * b))
            throw new Error('Data and shape do not match');

        this.data = data;
        this.shape = shape;
        this.strides = this.computeStrides(shape);
    }

    public get(index: DataTypedArray["u8"]): T {
        if (index.length !== this.shape.length)
            throw new Error('Invalid index length');

        return this.data[this.computeOffset(index)] as T;
    }

    public set(index: DataTypedArray["u8"], value: DataType): NdArray<T> {
        if (index.length !== this.shape.length)
            throw new Error('Invalid index length');

        this.data[this.computeOffset(index)] = value;

        return this;
    }

    public add<V extends DataType>(other: NdArray<V>): NdArray<T> {
        if (this.shape.length !== other.shape.length)
            throw new Error('Shapes do not match');

        for (let i = 0; i < this.data.length; i++)
            this.data[i] = this.data[i] + (other.data[i] as V);

        return this;
    }

    private computeOffset(index: DataTypedArray["u8"]): u8 {
        let offset = 0;
        for (let i = 0; i < this.shape.length; i++) {
            if (index[i] >= this.shape[i])
                throw new Error('Index out of bounds');

            offset += index[i] * this.strides[i];
        }
        return offset;
    }

    private computeStrides(shape: DataTypedArray["u8"]): DataTypedArray["u8"] {
        const strides = new Uint8Array(shape.length);
        for (let stride = 1, i = shape.length - 1; i >= 0; i--)
            strides[i] = (stride *= shape[i]);
        return strides;
    }
}
