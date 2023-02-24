import {DataType} from "./typedarray";

export class NdTypedArray<TArray extends TypedArray<T>, T> {
    public shape: Int32Array;
    public strides: Int32Array;
    public data: TArray;
    public type: DataType;

    constructor(shape: Int32Array, data: TArray, type: DataType) {
        this.shape = shape;
        this.data = data;
        this.type = type;

        this.strides = new Int32Array(shape.length);
        for (let stride = 1, i = shape.length - 1; i >= 0; i--) {
            this.strides[i] = stride;
            stride *= shape[i];
        }
    }
}

export function NdTypedArrayGetShape<TArray extends TypedArray<T>, T>(self: NdTypedArray<TArray, T>): Int32Array {
    return self.shape;
}

export function NdTypedArrayGetStrides<TArray extends TypedArray<T>, T>(self: NdTypedArray<TArray, T>): Int32Array {
    return self.strides;
}

export function NdTypedArrayGetData<TArray extends TypedArray<T>, T>(self: NdTypedArray<TArray, T>): TArray {
    return self.data;
}

export function NdTypedArrayNew<TArray extends TypedArray<T>, T>(data: TArray, shape: Int32Array, type: DataType): NdTypedArray<TArray, T> {
    if (data.length !== shape.reduce((a, b) => a * b, 1.0))
        throw new Error('Data and shape do not match');

    return new NdTypedArray<TArray, T>(shape, data, type);
}

export function NdTypedArrayAdd<TArray extends TypedArray<T>, T>(self: NdTypedArray<TArray, T>, other: NdTypedArray<TArray, T>): void {
    if (self.shape.length !== other.shape.length)
        throw new Error('Shapes do not match');

    for (let i = 0; i < self.data.length; i++)
        self.data[i] = (self.data[i] + other.data[i]);
}

export function NdTypedArrayGet<TArray extends TypedArray<T>, T>(self: NdTypedArray<TArray, T>, index: Int32Array): T {
    if (index.length !== self.shape.length)
        throw new Error('Invalid index length');

    return self.data[NdTypedArrayUnravel(self, index)] as T;
}

export function NdTypedArraySet<TArray extends TypedArray<T>, T extends number>(self: NdTypedArray<TArray, T>, index: Int32Array, value: T): void {
    if (index.length !== self.shape.length)
        throw new Error('Invalid index length');

    self.data[NdTypedArrayUnravel(self, index)] = value;
}

export function NdTypedArrayUnravel<TArray extends TypedArray<T>, T>(self: NdTypedArray<TArray, T>, index: Int32Array): i32 {
    let offset = 0;
    for (let i = 0; i < self.shape.length; i++) {
        if (index[i] >= self.shape[i])
            throw new Error('Index out of bounds');

        offset += index[i] * self.strides[i];
    }
    return offset;
}

export function NdTypedArrayArgmax<TArray extends TypedArray<T>, T extends number>(self: NdTypedArray<TArray, T>, axis: i32 = -1): NdTypedArray<Int32Array, i32> {
    const ndim = self.shape.length;
    if (axis < -ndim || axis >= ndim) throw new Error("Invalid axis");
    if (axis < 0) axis += ndim;

    const resultShape = new Int32Array(ndim - 1);
    let resultLength = 1;
    for (let i = 0, j = 0; i < ndim; i++) {
        if (i !== axis) {
            resultShape[j++] = self.shape[i];
            resultLength *= self.shape[i];
        }
    }
    //console.log("aaa")

    const result = new NdTypedArray<Int32Array, i32>(resultShape, new Int32Array(resultLength), DataType.i32);
    const axisStride = self.strides[axis];
    const axisLength = self.shape[axis];
    //console.log(axisStride.toString())
    //console.log(axisLength.toString())
    //console.log("bbb")

    for (let i = 0; i < resultLength; i++) {
        let maxIndex = 0;
        let maxVal = self.data[i * axisStride];
        ///console.log("ccc")
        for (let j = 0; j < axisLength; j++) {
            const val = self.data[i * axisLength + j * axisStride]; // TODO: Fix here
            //console.log("ddd")
            if (val > maxVal) {
                maxIndex = j;
                maxVal = val;
            }
        }
        result.data[i] = maxIndex;
    }

    return result;
}
