export class NdTypedArray<TArray extends TypedArray<T>, T> {
    public shape!: Uint32Array;
    public strides!: Uint32Array;
    public data!: TArray;

    constructor() { // Avoid object copying between Ts and As
    }
}

export function NdTypedArrayGetShape<TArray extends TypedArray<T>, T>(self: NdTypedArray<TArray, T>): Uint32Array {
    return self.shape;
}

export function NdTypedArrayGetStrides<TArray extends TypedArray<T>, T>(self: NdTypedArray<TArray, T>): Uint32Array {
    return self.strides;
}

export function NdTypedArrayGetData<TArray extends TypedArray<T>, T>(self: NdTypedArray<TArray, T>): TArray {
    return self.data;
}

export function NdTypedArrayNew<TArray extends TypedArray<T>, T>(data: TArray, shape: Uint32Array): NdTypedArray<TArray, T> {
    if (data.length !== shape.reduce((a, b) => a * b, 1.0))
        throw new Error('Data and shape do not match');

    const self = new NdTypedArray<TArray, T>();

    self.data = data;
    self.shape = shape;

    self.strides = new Uint32Array(shape.length);
    for (let stride = 1, i = shape.length - 1; i >= 0; i--)
        self.strides[i] = (stride *= shape[i]);

    return self;
}

export function NdTypedArrayAdd<TArray extends TypedArray<T>, T>(self: NdTypedArray<TArray, T>, other: NdTypedArray<TArray, T>): void {
    if (self.shape.length !== other.shape.length)
        throw new Error('Shapes do not match');

    for (let i = 0; i < self.data.length; i++)
        self.data[i] = (self.data[i] + other.data[i]);
}

export function NdTypedArrayGet<TArray extends TypedArray<T>, T>(self: NdTypedArray<TArray, T>, index: Uint32Array): T {
    if (index.length !== self.shape.length)
        throw new Error('Invalid index length');

    return self.data[NdTypedArrayUnravel(self, index)] as T;
}

export function NdTypedArraySet<TArray extends TypedArray<T>, T extends number>(self: NdTypedArray<TArray, T>, index: Uint32Array, value: T): void {
    if (index.length !== self.shape.length)
        throw new Error('Invalid index length');

    self.data[NdTypedArrayUnravel(self, index)] = value;
}

export function NdTypedArrayUnravel<TArray extends TypedArray<T>, T>(self: NdTypedArray<TArray, T>, index: Uint32Array): i32 {
    let offset = 0;
    for (let i = 0; i < self.shape.length; i++) {
        if (index[i] >= self.shape[i])
            throw new Error('Index out of bounds');

        offset += index[i] * self.strides[i];
    }
    return offset;
}
