import backend from "../src/backend/js";
import {NdArray} from "../src"

describe("Typescript tests", async () => {

    it("Check 1", async () => {
        const nt = await backend();
        const a = nt.NdInt8ArrayNew(new Int8Array([1, 2, 3, 4, 5, 6]), new Uint32Array([2, 3]));
        const b = nt.NdInt8ArrayNew(new Int8Array([-1, -2, -3, -4, -5, -6]), new Uint32Array([2, 3]));
        console.log(nt.NdInt8ArrayGetData(a));
        nt.NdInt8ArrayAdd(a, b);
        console.log(nt.NdInt8ArrayGetData(a));
    }).timeout(60000);

    it("Check 2", async () => {
        const a = await NdArray.From([1, 2, 3, 4, 5, 6], [2, 3], "i8", "js");
        const b = await NdArray.From([-1, -2, -3, -4, -5, -6], [2, 3], "i8", "js");
        console.log(a.getData());
        a.add(b);
        console.log(a.getData());
    }).timeout(60000);

});
