import * as ABI from "./asc/build";
import wasm from "./asc/build/index.wasm.b64"

export default async function (): Promise<typeof ABI.__AdaptedExports> {
    const bytes = Buffer.from(wasm, 'base64');
    return ABI.instantiate(await WebAssembly.compile(bytes), {env: {}});
}
