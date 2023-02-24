import {DataType, TypedArrayNew} from "./typedarray";

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
        for (let stride = 1, i = shape.length - 1; i >= 0; i--)
            this.strides[i] = (stride *= shape[i]);
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

export function NdTypedArrayArgmax<TArray extends TypedArray<T>, T extends number>(self: NdTypedArray<TArray, T>, axis: i32 = -1): NdTypedArray<TArray, T> {
    const nDims = self.shape.length;
    if (axis < -nDims || axis >= nDims) {
        throw new Error("Invalid axis value");
    }
    const reducedShape = new Int32Array(nDims - 1);
    let axisStride = 0;
    if (axis >= 0) {
        axisStride = self.strides[axis];
        for (let i = 0, j = 0; i < nDims; i++) {
            if (i !== axis) {
                reducedShape[j++] = self.shape[i];
            }
        }
    } else { // axis == -1
        axisStride = self.strides[nDims - 1];
        for (let i = 0; i < nDims - 1; i++) {
            reducedShape[i] = self.shape[i];
        }
    }
    const reducedData = TypedArrayNew<TArray, T>(reducedShape[0], self.type);
    let maxIndices = new Int32Array(reducedShape[0]);
    for (let i = 0; i < reducedShape[0]; i++) {
        let maxIndex = 0;
        let maxValue = self.data[i * axisStride];
        for (let j = 1; j < self.shape[axis]; j++) {
            const value = self.data[i * axisStride + j * self.strides[axis]];
            if (value > maxValue) {
                maxValue = value;
                maxIndex = j;
            }
        }
        maxIndices[i] = maxIndex;
        for (let j = 0, k = 0; j < nDims; j++) {
            if (j !== axis) {
                k++;
                reducedData[i * reducedShape[k - 1]] = self.data[i * axisStride + maxIndex * self.strides[axis] + self.strides[j]];
            }
        }
    }
    const newShape = new Int32Array(nDims);
    if (axis >= 0) {
        for (let i = 0, j = 0; i < nDims; i++) {
            if (i !== axis) {
                newShape[i] = self.shape[j++];
            }
        }
    } else { // axis == -1
        for (let i = 0; i < nDims - 1; i++) {
            newShape[i] = self.shape[i];
        }
        newShape[nDims - 1] = 1;
    }
    return new NdTypedArray<TArray, T>(newShape, reducedData, self.type);
}
