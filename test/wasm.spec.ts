import * as nt from "../src/backend/wasm";
import {NdArray} from "../src";

describe("ASC tests", async () => {

    it("Check 1", async () => {
        const nt1 = await nt.default();
        const a = nt1.NdInt8ArrayNew(new Int8Array([1, 2, 3, 4, 5, 6]), new Uint32Array([2, 3]));
        const b = nt1.NdInt8ArrayNew(new Int8Array([-1, -2, -3, -4, -5, -6]), new Uint32Array([2, 3]));
        console.log(nt1.NdInt8ArrayGetData(a));
        nt1.NdInt8ArrayAdd(a, b);
        console.log(nt1.NdInt8ArrayGetData(a));
    }).timeout(60000);

    it("Check 2", async () => {
        const a = await NdArray.From([1, 2, 3, 4, 5, 6], [2, 3], "i8", "wasm");
        const b = await NdArray.From([-1, -2, -3, -4, -5, -6], [2, 3], "i8", "wasm");
        console.log(a.getData());
        a.add(b);
        console.log(a.getData());
    }).timeout(60000);

});
