import * as js from "./backend/js";
import * as wasm from "./backend/wasm";

type TypedArray =
    | Int8Array
    | Uint8Array
    | Uint8ClampedArray
    | Int16Array
    | Uint16Array
    | Int32Array
    | Uint32Array
    | Float32Array
    | Float64Array;

let jsF: js.FType;
let wasmF: wasm.FType;

async function GetBackend(backend: "js" | "wasm"): Promise<js.FType | wasm.FType> {
    switch (backend) {
        case "js":
            return jsF ?? (jsF = await js.default());
        case "wasm":
            return wasmF ?? (wasmF = await wasm.default());
    }
}

export type DataType = "i8" | "u8" | "u8c" | "i16" | "u16" | "i32" | "u32" | "f32" | "f64";

export class NdArray {
    public i: js.IType | wasm.IType;
    public t: DataType
    private f: js.FType | wasm.FType;

    constructor(f: js.FType | wasm.FType, i: js.IType | wasm.IType, t: DataType) {
        this.f = f;
        this.i = i;
        this.t = t;
    }

    public static async From(data: Array<number>, shape: Array<number>, type: DataType, backend: "js" | "wasm" = "js"): Promise<NdArray> {
        const f = await GetBackend(backend);
        switch (type) {
            case "i8":
                return new NdArray(f, f.NdInt8ArrayNew(new Int8Array(data), new Uint32Array(shape)), type);
            case "u8":
                return new NdArray(f, f.NdUint8ArrayNew(new Uint8Array(data), new Uint32Array(shape)), type);
            case "u8c":
                return new NdArray(f, f.NdUint8ClampedArrayNew(new Uint8ClampedArray(data), new Uint32Array(shape)), type);
            case "i16":
                return new NdArray(f, f.NdInt16ArrayNew(new Int16Array(data), new Uint32Array(shape)), type);
            case "u16":
                return new NdArray(f, f.NdUint16ArrayNew(new Uint16Array(data), new Uint32Array(shape)), type);
            case "i32":
                return new NdArray(f, f.NdInt32ArrayNew(new Int32Array(data), new Uint32Array(shape)), type);
            case "u32":
                return new NdArray(f, f.NdUint32ArrayNew(new Uint32Array(data), new Uint32Array(shape)), type);
            case "f32":
                return new NdArray(f, f.NdFloat32ArrayNew(new Float32Array(data), new Uint32Array(shape)), type);
            case "f64":
                return new NdArray(f, f.NdFloat64ArrayNew(new Float64Array(data), new Uint32Array(shape)), type);
            default:
                throw Error("Invalid DataType");
        }
    }

    public getData(): TypedArray {
        switch (this.t) {
            case "i8":
                return this.f.NdInt8ArrayGetData(this.i as js.IInt8Type & wasm.IInt8Type);
            case "u8":
                return this.f.NdUint8ArrayGetData(this.i as js.IUint8Type & wasm.IUint8Type);
            case "u8c":
                return this.f.NdUint8ClampedArrayGetData(this.i as js.IUint8ClampedType & wasm.IUint8ClampedType);
            case "i16":
                return this.f.NdInt16ArrayGetData(this.i as js.IInt16Type & wasm.IInt16Type);
            case "u16":
                return this.f.NdUint16ArrayGetData(this.i as js.IUint16Type & wasm.IUint16Type);
            case "i32":
                return this.f.NdInt32ArrayGetData(this.i as js.IInt32Type & wasm.IInt32Type);
            case "u32":
                return this.f.NdUint32ArrayGetData(this.i as js.IUint32Type & wasm.IUint32Type);
            case "f32":
                return this.f.NdFloat32ArrayGetData(this.i as js.IFloat32Type & wasm.IFloat32Type);
            case "f64":
                return this.f.NdFloat64ArrayGetData(this.i as js.IFloat64Type & wasm.IFloat64Type);
            default:
                throw Error("Invalid DataType");
        }
    }

    public getStrides(): TypedArray {
        switch (this.t) {
            case "i8":
                return this.f.NdInt8ArrayGetStrides(this.i as js.IInt8Type & wasm.IInt8Type);
            case "u8":
                return this.f.NdUint8ArrayGetStrides(this.i as js.IUint8Type & wasm.IUint8Type);
            case "u8c":
                return this.f.NdUint8ClampedArrayGetStrides(this.i as js.IUint8ClampedType & wasm.IUint8ClampedType);
            case "i16":
                return this.f.NdInt16ArrayGetStrides(this.i as js.IInt16Type & wasm.IInt16Type);
            case "u16":
                return this.f.NdUint16ArrayGetStrides(this.i as js.IUint16Type & wasm.IUint16Type);
            case "i32":
                return this.f.NdInt32ArrayGetStrides(this.i as js.IInt32Type & wasm.IInt32Type);
            case "u32":
                return this.f.NdUint32ArrayGetStrides(this.i as js.IUint32Type & wasm.IUint32Type);
            case "f32":
                return this.f.NdFloat32ArrayGetStrides(this.i as js.IFloat32Type & wasm.IFloat32Type);
            case "f64":
                return this.f.NdFloat64ArrayGetStrides(this.i as js.IFloat64Type & wasm.IFloat64Type);
            default:
                throw Error("Invalid DataType");
        }
    }

    public getShape(): TypedArray {
        switch (this.t) {
            case "i8":
                return this.f.NdInt8ArrayGetShape(this.i as js.IInt8Type & wasm.IInt8Type);
            case "u8":
                return this.f.NdUint8ArrayGetShape(this.i as js.IUint8Type & wasm.IUint8Type);
            case "u8c":
                return this.f.NdUint8ClampedArrayGetShape(this.i as js.IUint8ClampedType & wasm.IUint8ClampedType);
            case "i16":
                return this.f.NdInt16ArrayGetShape(this.i as js.IInt16Type & wasm.IInt16Type);
            case "u16":
                return this.f.NdUint16ArrayGetShape(this.i as js.IUint16Type & wasm.IUint16Type);
            case "i32":
                return this.f.NdInt32ArrayGetShape(this.i as js.IInt32Type & wasm.IInt32Type);
            case "u32":
                return this.f.NdUint32ArrayGetShape(this.i as js.IUint32Type & wasm.IUint32Type);
            case "f32":
                return this.f.NdFloat32ArrayGetShape(this.i as js.IFloat32Type & wasm.IFloat32Type);
            case "f64":
                return this.f.NdFloat64ArrayGetShape(this.i as js.IFloat64Type & wasm.IFloat64Type);
            default:
                throw Error("Invalid DataType");
        }
    }

    public add(b: NdArray): void {
        switch (this.t) {
            case "i8":
                return this.f.NdInt8ArrayAdd(this.i as js.IInt8Type & wasm.IInt8Type, b.i as js.IInt8Type & wasm.IInt8Type);
            case "u8":
                return this.f.NdUint8ArrayAdd(this.i as js.IUint8Type & wasm.IUint8Type, b.i as js.IUint8Type & wasm.IUint8Type);
            case "u8c":
                return this.f.NdUint8ClampedArrayAdd(this.i as js.IUint8ClampedType & wasm.IUint8ClampedType, b.i as js.IUint8ClampedType & wasm.IUint8ClampedType);
            case "i16":
                return this.f.NdInt16ArrayAdd(this.i as js.IInt16Type & wasm.IInt16Type, b.i as js.IInt16Type & wasm.IInt16Type);
            case "u16":
                return this.f.NdUint16ArrayAdd(this.i as js.IUint16Type & wasm.IUint16Type, b.i as js.IUint16Type & wasm.IUint16Type);
            case "i32":
                return this.f.NdInt32ArrayAdd(this.i as js.IInt32Type & wasm.IInt32Type, b.i as js.IInt32Type & wasm.IInt32Type);
            case "u32":
                return this.f.NdUint32ArrayAdd(this.i as js.IUint32Type & wasm.IUint32Type, b.i as js.IUint32Type & wasm.IUint32Type);
            case "f32":
                return this.f.NdFloat32ArrayAdd(this.i as js.IFloat32Type & wasm.IFloat32Type, b.i as js.IFloat32Type & wasm.IFloat32Type);
            case "f64":
                return this.f.NdFloat64ArrayAdd(this.i as js.IFloat64Type & wasm.IFloat64Type, b.i as js.IFloat64Type & wasm.IFloat64Type);
            default:
                throw Error("Invalid DataType");
        }
    }

    public get(index: Uint32Array): number {
        switch (this.t) {
            case "i8":
                return this.f.NdInt8ArrayGet(this.i as js.IInt8Type & wasm.IInt8Type, index);
            case "u8":
                return this.f.NdUint8ArrayGet(this.i as js.IUint8Type & wasm.IUint8Type, index);
            case "u8c":
                return this.f.NdUint8ClampedArrayGet(this.i as js.IUint8ClampedType & wasm.IUint8ClampedType, index);
            case "i16":
                return this.f.NdInt16ArrayGet(this.i as js.IInt16Type & wasm.IInt16Type, index);
            case "u16":
                return this.f.NdUint16ArrayGet(this.i as js.IUint16Type & wasm.IUint16Type, index);
            case "i32":
                return this.f.NdInt32ArrayGet(this.i as js.IInt32Type & wasm.IInt32Type, index);
            case "u32":
                return this.f.NdUint32ArrayGet(this.i as js.IUint32Type & wasm.IUint32Type, index);
            case "f32":
                return this.f.NdFloat32ArrayGet(this.i as js.IFloat32Type & wasm.IFloat32Type, index);
            case "f64":
                return this.f.NdFloat64ArrayGet(this.i as js.IFloat64Type & wasm.IFloat64Type, index);
            default:
                throw Error("Invalid DataType");
        }
    }

    public set(index: Uint32Array, value: number): void {
        switch (this.t) {
            case "i8":
                return this.f.NdInt8ArraySet(this.i as js.IInt8Type & wasm.IInt8Type, index, value);
            case "u8":
                return this.f.NdUint8ArraySet(this.i as js.IUint8Type & wasm.IUint8Type, index, value);
            case "u8c":
                return this.f.NdUint8ClampedArraySet(this.i as js.IUint8ClampedType & wasm.IUint8ClampedType, index, value);
            case "i16":
                return this.f.NdInt16ArraySet(this.i as js.IInt16Type & wasm.IInt16Type, index, value);
            case "u16":
                return this.f.NdUint16ArraySet(this.i as js.IUint16Type & wasm.IUint16Type, index, value);
            case "i32":
                return this.f.NdInt32ArraySet(this.i as js.IInt32Type & wasm.IInt32Type, index, value);
            case "u32":
                return this.f.NdUint32ArraySet(this.i as js.IUint32Type & wasm.IUint32Type, index, value);
            case "f32":
                return this.f.NdFloat32ArraySet(this.i as js.IFloat32Type & wasm.IFloat32Type, index, value);
            case "f64":
                return this.f.NdFloat64ArraySet(this.i as js.IFloat64Type & wasm.IFloat64Type, index, value);
            default:
                throw Error("Invalid DataType");
        }
    }

    public unravel(index: Uint32Array): number {
        switch (this.t) {
            case "i8":
                return this.f.NdInt8ArrayUnravel(this.i as js.IInt8Type & wasm.IInt8Type, index);
            case "u8":
                return this.f.NdUint8ArrayUnravel(this.i as js.IUint8Type & wasm.IUint8Type, index);
            case "u8c":
                return this.f.NdUint8ClampedArrayUnravel(this.i as js.IUint8ClampedType & wasm.IUint8ClampedType, index);
            case "i16":
                return this.f.NdInt16ArrayUnravel(this.i as js.IInt16Type & wasm.IInt16Type, index);
            case "u16":
                return this.f.NdUint16ArrayUnravel(this.i as js.IUint16Type & wasm.IUint16Type, index);
            case "i32":
                return this.f.NdInt32ArrayUnravel(this.i as js.IInt32Type & wasm.IInt32Type, index);
            case "u32":
                return this.f.NdUint32ArrayUnravel(this.i as js.IUint32Type & wasm.IUint32Type, index);
            case "f32":
                return this.f.NdFloat32ArrayUnravel(this.i as js.IFloat32Type & wasm.IFloat32Type, index);
            case "f64":
                return this.f.NdFloat64ArrayUnravel(this.i as js.IFloat64Type & wasm.IFloat64Type, index);
            default:
                throw Error("Invalid DataType");
        }
    }
}
