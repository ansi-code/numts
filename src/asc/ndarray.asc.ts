export class NdArray<ArrayType extends TypedArray<DataType>, DataType extends number> {
    public readonly shape: Uint8Array;
    public readonly strides: Uint8Array;
    public readonly data: ArrayType;

    constructor(data: ArrayType, shape: Uint8Array) {
        if (data.length !== shape.reduce((a, b) => a * b, 1))
            throw new Error('Data and shape do not match');

        this.data = data;
        this.shape = shape;
        this.strides = new Uint8Array(shape.length);
        for (let stride = 1, i = shape.length - 1; i >= 0; i--)
            this.strides[i] = (stride *= shape[i]);
    }

    public add(b: NdArray<ArrayType, DataType>): NdArray<ArrayType, DataType> {
        if (this.shape.length !== b.shape.length)
            throw new Error('Shapes do not match');

        for (let i = 0; i < this.data.length; i++)
            this.data[i] = (this.data[i] + this.data[i]) as DataType;

        return this;
    }

    public get(index: Uint8Array): DataType {
        if (index.length !== this.shape.length)
            throw new Error('Invalid index length');

        return this.data[this.unravel(index)] as DataType;
    }

    public set(index: Uint8Array, value: DataType): NdArray<ArrayType, DataType> {
        if (index.length !== this.shape.length)
            throw new Error('Invalid index length');

        this.data[this.unravel(index)] = value;

        return this;
    }

    public unravel(index: Uint8Array): u8 {
        let offset = 0;
        for (let i = 0; i < this.shape.length; i++) {
            if (index[i] >= this.shape[i])
                throw new Error('Index out of bounds');

            offset += index[i] * this.strides[i];
        }
        return offset;
    }
}
