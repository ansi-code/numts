import * as ABI from "./asc/build";
import wasm from "./asc/build/index.wasm.b64"

export const F = ABI.__AdaptedExports;

export type FType = typeof F;

export type IUint8Type = ReturnType<typeof F.NdUint8ArrayNew>;
export type IInt8Type = ReturnType<typeof F.NdInt8ArrayNew>;

export type IType =
    | IUint8Type
    | IInt8Type;

export default async function (): Promise<FType> {
    const bytes = Buffer.from(wasm, 'base64');
    return ABI.instantiate(await WebAssembly.compile(bytes), {env: {}});
}
