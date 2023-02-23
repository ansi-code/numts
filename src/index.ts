import * as cpu from "./cpu";
import * as wasm from "./wasm";
import TypedArray = NodeJS.TypedArray;
import {IInt8Type} from "./cpu";

let cpuF: cpu.FType;
let wasmF: wasm.FType;

async function GetBackend(backend: "cpu" | "wasm"): Promise<cpu.FType | wasm.FType> {
    switch (backend) {
        case "cpu":
            return cpuF ?? (cpuF = await cpu.default());
        case "wasm":
            return wasmF ?? (wasmF = await wasm.default());
    }
}

export type DataType = "i8" | "u8" | "u8c" | "i16" | "u16" | "i32" | "u32" | "f32" | "f64";

export class NdArray {
    public i: cpu.IType | wasm.IType;
    public t: DataType
    private f: cpu.FType | wasm.FType;

    constructor(f: cpu.FType | wasm.FType, i: cpu.IType | wasm.IType, t: DataType) {
        this.f = f;
        this.i = i;
        this.t = t;
    }

    public static async From(data: Array<number>, shape: Array<number>, type: DataType, backend: "cpu" | "wasm" = "cpu"): Promise<NdArray> {
        const f = await GetBackend(backend);
        switch (type) {
            case "i8":
                return new NdArray(f, f.NdInt8ArrayNew(new Int8Array(data), new Uint32Array(shape)), type);
            case "u8":
                return new NdArray(f, f.NdUint8ArrayNew(new Uint8Array(data), new Uint32Array(shape)), type);
            default:
                throw Error("Invalid TypedArray DataType");
        }
    }

    public add(b: NdArray): void {
        switch (this.t) {
            case "i8":
                // @ts-ignore
                return this.f.NdInt8ArrayAdd(this.i, b.i);
            case "u8":
                // @ts-ignore
                return this.f.NdInt8ArrayAdd(this.i, b.i);
            default:
                throw Error("Invalid TypedArray DataType");
        }
    }

    public getData(): TypedArray {
        switch (this.t) {
            case "i8":
                return (this.f as cpu.FType).NdInt8ArrayGetData(this.i as cpu.IInt8Type);
            case "u8":
                // @ts-ignore
                return this.f.NdUint8ArrayGetData(this.i);
            default:
                throw Error("Invalid TypedArray DataType");
        }
    }

    /*
        public get(index: Uint8Array): number {
            return
        }

        public set(index: Uint8Array, value: DataType): NdArray {
            return this;
        }

        public unravel(index: Uint8Array): u8 {
        }
     */
}
