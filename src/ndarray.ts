import * as js from "./backend/js";
import * as wasm from "./backend/wasm";
import TypedArray = NodeJS.TypedArray;

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
            default:
                throw Error("Invalid DataType");
        }
    }
}
