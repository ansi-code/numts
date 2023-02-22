import { instantiate } from "../dist/asc";
import * as fs from "fs";

describe("Asm tests", async () => {

    it("Check 1", async () => {
        const asm = fs.readFileSync("./dist/asc/index.wasm");
        const nt = await instantiate(await WebAssembly.compile(asm), {env:{}});
        const a = nt.Int8NdArrayNew(new Int8Array([1, 2, 3, 4, 5, 6]), new Uint8Array([2, 3]));
        const b = nt.Int8NdArrayNew(new Int8Array([-1, -2, -3, -4, -5, -6]), new Uint8Array([2, 3]));
        const c = nt.Int8NdArrayAdd(a, b);
        console.log(c);
    }).timeout(60000);

});
