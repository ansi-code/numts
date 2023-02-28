import {DataType, TypedArrayArgQuickSort, TypedArrayEqual, TypedArrayFrom, TypedArrayFromNumberArray, TypedArrayNew, TypedArrayRandom} from "./typedarray";

export class NdTypedArray<TArray extends TypedArray<T>, T> {
    public data: TArray;
    public shape: Int32Array;
    public strides: Int32Array;
    public type: DataType;

    constructor(data: TArray, shape: Int32Array, type: DataType) {
        this.data = data;
        this.shape = shape;
        this.type = type;

        this.strides = new Int32Array(shape.length);
        for (let stride = 1, i = shape.length - 1; i >= 0; i--) {
            this.strides[i] = stride;
            stride *= shape[i];
        }
    }
}

export function NdTypedArrayNew<TArray extends TypedArray<T>, T>(data: TArray, shape: Int32Array, type: DataType): NdTypedArray<TArray, T> {
    if (data.length !== shape.reduce((a, b) => a * b, 1.0))
        throw new Error('Data and shape do not match');

    return new NdTypedArray<TArray, T>(data, shape, type);
}

export function NdTypedArrayRandom<TArray extends TypedArray<T>, T extends number>(shape: Int32Array, type: DataType): NdTypedArray<TArray, T> {
    const length = shape.reduce((a, b) => a * b, 1.0);
    return new NdTypedArray<TArray, T>(TypedArrayRandom<TArray, T>(length as u32, type), shape, type);
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

export function NdTypedArrayGetType<TArray extends TypedArray<T>, T>(self: NdTypedArray<TArray, T>): DataType {
    return self.type;
}

export function NdTypedArrayReshape<TArray extends TypedArray<T>, T>(self: NdTypedArray<TArray, T>, shape: Int32Array): void {
    self.shape = shape;
}

export function NdTypedArrayClone<TArray extends TypedArray<T>, T extends number>(self: NdTypedArray<TArray, T>): NdTypedArray<TArray, T> {
    return new NdTypedArray<TArray, T>(TypedArrayFrom<TArray, T>(self.data, self.type), TypedArrayFrom<Int32Array, i32>(self.shape, DataType.i32), self.type);
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

export function NdTypedArrayAdd<TArray extends TypedArray<T>, T>(self: NdTypedArray<TArray, T>, other: NdTypedArray<TArray, T>): void {
    if (self.shape.length !== other.shape.length)
        throw new Error('Shapes do not match');

    for (let i = 0; i < self.data.length; i++)
        self.data[i] = (self.data[i] + other.data[i]);
}

export function NdTypedArraySub<TArray extends TypedArray<T>, T>(self: NdTypedArray<TArray, T>, other: NdTypedArray<TArray, T>): void {
    if (self.shape.length !== other.shape.length)
        throw new Error('Shapes do not match');

    for (let i = 0; i < self.data.length; i++)
        self.data[i] = (self.data[i] - other.data[i]);
}

export function NdTypedArrayMax<TArray extends TypedArray<T>, T extends number>(self: NdTypedArray<TArray, T>, axis: i32): NdTypedArray<TArray, T> {
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

    const result = new NdTypedArray<TArray, T>(TypedArrayNew<TArray, T>(resultLength, self.type), resultShape, self.type);
    const axisStride = self.strides[axis];
    const axisLength = self.shape[axis];

    for (let i = 0; i < resultLength; i++) {
        let maxVal = self.data[i * axisStride];
        for (let j = 0; j < axisLength; j++) {
            const val = self.data[i * axisLength + j * axisStride]; // TODO: Fix here
            if (val > maxVal) {
                maxVal = val;
            }
        }
        result.data[i] = maxVal;
    }

    return result;
}

export function NdTypedArrayMin<TArray extends TypedArray<T>, T extends number>(self: NdTypedArray<TArray, T>, axis: i32): NdTypedArray<TArray, T> {
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

    const result = new NdTypedArray<TArray, T>(TypedArrayNew<TArray, T>(resultLength, self.type), resultShape, self.type);
    const axisStride = self.strides[axis];
    const axisLength = self.shape[axis];

    for (let i = 0; i < resultLength; i++) {
        let minVal = self.data[i * axisStride];
        for (let j = 0; j < axisLength; j++) {
            const val = self.data[i * axisLength + j * axisStride]; // TODO: Fix here
            if (val < minVal) {
                minVal = val;
            }
        }
        result.data[i] = minVal;
    }

    return result;
}

export function NdTypedArrayArgMax<TArray extends TypedArray<T>, T extends number>(self: NdTypedArray<TArray, T>, axis: i32): NdTypedArray<Int32Array, i32> {
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

    const result = new NdTypedArray<Int32Array, i32>(resultShape, new Int32Array(resultLength), DataType.i32);
    const axisStride = self.strides[axis];
    const axisLength = self.shape[axis];

    for (let i = 0; i < resultLength; i++) {
        let maxIndex = 0;
        let maxVal = self.data[i * axisStride];
        for (let j = 0; j < axisLength; j++) {
            const val = self.data[i * axisLength + j * axisStride]; // TODO: Fix here
            if (val > maxVal) {
                maxIndex = j;
                maxVal = val;
            }
        }
        result.data[i] = maxIndex;
    }

    return result;
}

export function NdTypedArrayArgMin<TArray extends TypedArray<T>, T extends number>(self: NdTypedArray<TArray, T>, axis: i32): NdTypedArray<Int32Array, i32> {
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

    const result = new NdTypedArray<Int32Array, i32>(resultShape, new Int32Array(resultLength), DataType.i32);
    const axisStride = self.strides[axis];
    const axisLength = self.shape[axis];

    for (let i = 0; i < resultLength; i++) {
        let minIndex = 0;
        let minVal = self.data[i * axisStride];
        for (let j = 0; j < axisLength; j++) {
            const val = self.data[i * axisLength + j * axisStride]; // TODO: Fix here
            if (val < minVal) {
                minIndex = j;
                minVal = val;
            }
        }
        result.data[i] = minIndex;
    }

    return result;
}

export function NdTypedArraySlice<TArray extends TypedArray<T>, T extends number>(self: NdTypedArray<TArray, T>, args: Array<Array<i32>>): NdTypedArray<TArray, T> {
    const shape = self.shape;
    const strides = self.strides;
    const data = self.data;

    const dims = args.length;
    const start = new Int32Array(dims);
    const stop = new Int32Array(dims);
    const step = new Int32Array(dims);

    let dimIndex = 0;
    let dataIndex = 0;

    for (let i = 0; i < dims; i++) {
        let arg = args[i];
        start[dimIndex] = arg[0] !== -1 ? arg[0] : 0;
        stop[dimIndex] = arg[1] !== -1 ? arg[1] : shape[dimIndex];
        step[dimIndex] = arg[2] !== -1 ? arg[2] : 1;
        dimIndex++;
    }

    const resultShape = new Int32Array(dims);
    const resultStrides = new Int32Array(dims);
    let resultLength = 1;

    for (let i = 0; i < dims; i++) {
        const startVal = start[i];
        const stopVal = stop[i];
        const stepVal = step[i];
        const shapeVal = shape[i];
        const lengthVal = Math.ceil((stopVal - startVal) / stepVal);

        if (lengthVal <= 0) {
            throw new Error("Invalid slice range");
        }

        resultShape[i] = lengthVal as i32;
        resultStrides[i] = strides[i] * stepVal;
        dataIndex += startVal * strides[i];
        resultLength *= lengthVal as i32;

        if (stopVal > shapeVal) {
            throw new Error("Invalid slice range");
        }
    }

    const result = new NdTypedArray<TArray, T>(TypedArrayNew<TArray, T>(resultLength, self.type), resultShape, self.type);

    for (let i = 0; i < resultLength; i++) {
        result.data[i] = data[dataIndex];
        dataIndex += resultStrides[dims - 1];

        for (let j = dims - 2; j >= 0; j--) {
            if (dataIndex >= (start[j] + resultShape[j]) * strides[j]) {
                dataIndex -= resultStrides[j];
            } else {
                break;
            }
        }
    }

    return result;
}

export function NdTypedArraySoftmax<TArray extends TypedArray<T>, T extends number>(self: NdTypedArray<TArray, T>): void {
    const n = self.shape[0];
    const m = self.data.length / n as i32;

    for (let i = 0; i < n; i++) {
        let expSum = 0;
        for (let j = 0; j < m; j++) {
            const expVal = Math.exp(self.data[i * m + j]) as T;
            self.data[i * m + j] = expVal;
            expSum += expVal as i32;
        }

        const scale = 1 / expSum;
        for (let j = 0; j < m; j++) {
            self.data[i * m + j] = (self.data[i * m + j]) * (scale as T);
        }
    }
}

export function NdTypedArrayTopK<TArray extends TypedArray<T>, T extends number>(self: NdTypedArray<TArray, T>, k: i32, axis: i32): NdTypedArray<Int32Array, i32> {
    if (k <= 0 || k > self.shape[axis]) {
        throw new Error("Invalid value of k");
    }

    if (axis < 0) {
        axis += self.shape.length;
    }

    const indicesData = TypedArrayNew<Int32Array, i32>(self.data.length, DataType.i32);
    const resultShape = self.shape.slice();
    resultShape[axis] = k;
    const resultData = TypedArrayNew<Int32Array, i32>(resultShape.reduce((a, b) => a * b, 1), DataType.i32);
    const result = new NdTypedArray<Int32Array, i32>(resultShape, resultData, DataType.i32);

    const n = self.shape[axis];
    const m = self.data.length / n;

    for (let i = 0; i < m; i++) {
        const start = i * n;
        const end = start + n;
        for (let j = start; j < end; j++) {
            indicesData[j] = j;
        }

        //const compare = (a: i32, b: i32): i32 => self.data[b] - self.data[a]; //TODO: FIX HERE
        const compare = (a: i32, b: i32): i32 => b - a;
        indicesData.subarray(start, end).sort(compare);

        for (let j = start; j < start + k; j++) {
            const index = indicesData[j];
            resultData[i * k + j - start] = index % n;
        }
    }

    return result;
}

export function NdTypedArrayArgSort<TArray extends TypedArray<T>, T extends number>(self: NdTypedArray<TArray, T>, axis: i32, descending: boolean = true): NdTypedArray<Int32Array, i32> {
    const shape = self.shape;
    const rank = shape.length;
    axis = axis < 0 ? rank + axis : axis;

    const axisSize = shape[axis];
    const sliceSize = self.strides[axis];
    const otherSize = self.data.length / axisSize;

    const indices = new Int32Array(self.data.length);
    for (let i = 0; i < indices.length; i++) indices[i] = i;

    const slice = TypedArrayNew<TArray, T>(axisSize, self.type);

    for (let i = 0; i < otherSize; i++) {
        const sliceStart = i * sliceSize;
        const sliceEnd = sliceStart + sliceSize;

        for (let j = 0; j < axisSize; j++) {
            const index = j * self.strides[axis] + sliceStart;

            for (let k = sliceStart, l = 0; k < sliceEnd; k += self.strides[axis], l++) {
                slice[l] = self.data[index + k];
            }

            TypedArrayArgQuickSort<TArray, T>(slice, indices.subarray(index / sliceSize, (index + sliceSize) / sliceSize), 0, sliceSize - 1, descending);
        }
    }

    return new NdTypedArray<Int32Array, i32>(indices, shape, DataType.i32);
}

export function NdTypedArrayScatter<TArray extends TypedArray<T>, T extends number>(self: NdTypedArray<TArray, T>, axis: i32, indices: NdTypedArray<Int32Array, i32>, source: NdTypedArray<TArray, T>): void {
    // Ensure that the axis is within the bounds of the shape.
    if (axis < -self.shape.length || axis >= self.shape.length) {
        throw new Error("axis out of bounds");
    }
    if (axis < 0) {
        axis += self.shape.length;
    }

    // Check that the indices array is a valid shape.
    const indicesShape = indices.shape;
    const sourceShape = source.shape;
    const expectedIndicesShape = self.shape.slice();
    expectedIndicesShape[axis] = sourceShape[axis];
    if (!TypedArrayEqual<Int32Array, i32>(indicesShape, expectedIndicesShape)) {
        throw new Error("indices array has incorrect shape");
    }

    // Compute the indices to scatter along the given axis.
    const indicesView = indices.data;
    const scatterIndices = new Int32Array(self.data.length);
    for (let i = 0; i < self.data.length; i++) {
        const offset = i % self.strides[axis];
        const index = Math.floor(i / self.strides[axis]) as i32;
        scatterIndices[i] = index * self.strides[axis] + indicesView[offset];
    }

    // Scatter the values from the source array into the self array.
    const sourceData = source.data;
    for (let i = 0; i < self.data.length; i++) {
        const value = sourceData[i];
        const index = scatterIndices[i];
        self.data[index] = value;
    }
}

export function NdTypedArrayWhere<TArray extends TypedArray<T>, T extends number>(self: NdTypedArray<TArray, T>, cond: (v: T) => u8): NdTypedArray<Uint8Array, u8> {
    let res = NdTypedArrayNew<Uint8Array, u8>(TypedArrayNew<Uint8Array, u8>(self.data.length, DataType.u8), self.shape, DataType.u8);
    for (let i = 0; i < res.data.length; i++)
        res.data[i] = cond(res.data[i] as T) ? 1 : 0;
    return res;
}

export function NdTypedArrayMaskedFill<TArray extends TypedArray<T>, T extends number>(self: NdTypedArray<TArray, T>, mask: NdTypedArray<Uint8Array, u8>, value: T): void {
    if (!TypedArrayEqual<Int32Array, i32>(self.shape, mask.shape)) {
        throw new Error("mask array has incorrect shape");
    }

    for (let i = 0; i < self.data.length; i++)
        if (mask.data[i])
            self.data[i] = value;
}

export function NdTypedArrayCumsum<TArray extends TypedArray<T>, T extends number>(self: NdTypedArray<TArray, T>, axis: i32): void {
    const shape = self.shape;
    const strides = self.strides;
    const data = self.data;
    const ndims = shape.length;
    const numel = shape.reduce((a, b) => a * b, 1);

    // Calculate the axis to perform cumulative sum along.
    if (axis < 0) {
        axis += ndims;
    }

    // Check if axis is valid.
    if (axis < 0 || axis >= ndims) {
        throw new Error("Invalid axis");
    }

    // Calculate the size of the cumulative sum blocks.
    const blocksize = strides[axis];

    // Create temporary arrays to hold the input and output data for each block.
    const blockdata = TypedArrayNew<TArray, T>(blocksize, self.type);
    const outdata = TypedArrayNew<TArray, T>(blocksize, self.type);

    // Iterate over each block along the given axis.
    for (let i = 0; i < numel; i += blocksize) {
        // Copy the block data into the temporary array.
        blockdata.set(data.subarray(i, i + blocksize));

        // Perform cumulative sum on the temporary array.
        for (let j = 1; j < blocksize; j++) {
            blockdata[j] += blockdata[j - 1];
        }

        // Copy the cumulative sum result into the output array.
        outdata.set(blockdata);

        // Copy the output data back into the original array.
        for (let j = 0; j < blocksize; j++) {
            data[i + j] = outdata[j];
        }
    }
}

export function NdTypedArrayArgChoice<TArray extends TypedArray<T>, T extends number>(self: NdTypedArray<TArray, T>, size: i32, p: NdTypedArray<Float64Array, f64>): NdTypedArray<TArray, T> {
    const length = self.shape[0];
    const cumSum = new Float64Array(length);
    cumSum[0] = p.data[0];

    for (let i = 1; i < length; i++) {
        cumSum[i] = cumSum[i - 1] + p.data[i];
    }

    const result = NdTypedArrayNew<TArray, T>(TypedArrayNew<TArray, T>(size, self.type), TypedArrayFromNumberArray<Int32Array, i32>([size], DataType.i32), self.type);
    const rand = Math.random();

    for (let i = 0; i < size; i++) {
        let j = 0;

        while (j < length && rand > cumSum[j]) {
            j++;
        }

        result.data[i] = self.data[j];
    }

    return result;
}
