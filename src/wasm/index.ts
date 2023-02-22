import * as ABI from "../../dist/wasm/asc";
import fs from "fs";

export default async function (): Promise<typeof ABI.__AdaptedExports> {
    const bytes = fs.readFileSync("./dist/wasm/asc/index.wasm");
    return ABI.instantiate(await WebAssembly.compile(bytes), {env: {}});
}
