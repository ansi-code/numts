class NdArray {
    private data: number[];
    private shape: number[];
    private strides: number[];

    constructor(data: number[], shape: number[]) {
        if (data.length !== shape.reduce((a, b) => a * b)) {
            throw new Error('Data and shape do not match');
        }

        this.data = data;
        this.shape = shape;
        this.strides = this.computeStrides(shape);
    }

    get(index: number[]): number {
        if (index.length !== this.shape.length) {
            throw new Error('Invalid index length');
        }

        let offset = 0;
        for (let i = 0; i < this.shape.length; i++) {
            if (index[i] >= this.shape[i]) {
                throw new Error('Index out of bounds');
            }
            offset += index[i] * this.strides[i];
        }

        return this.data[offset];
    }

    set(index: number[], value: number): void {
        if (index.length !== this.shape.length) {
            throw new Error('Invalid index length');
        }

        let offset = 0;
        for (let i = 0; i < this.shape.length; i++) {
            if (index[i] >= this.shape[i]) {
                throw new Error('Index out of bounds');
            }
            offset += index[i] * this.strides[i];
        }

        this.data[offset] = value;
    }

    add(other: NdArray): NdArray {
        if (this.shape.length !== other.shape.length) {
            throw new Error('Shapes do not match');
        }
        const resultData: number[] = [];
        for (let i = 0; i < this.data.length; i++) {
            resultData.push(this.data[i] + other.data[i]);
        }
        return new NdArray(resultData, this.shape);
    }

    private computeStrides(shape: number[]): number[] {
        const strides = new Array<number>(shape.length);
        let stride = 1;
        for (let i = shape.length - 1; i >= 0; i--) {
            strides[i] = stride;
            stride *= shape[i];
        }
        return strides;
    }
}
