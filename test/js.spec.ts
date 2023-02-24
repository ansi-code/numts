import backend from "../src/backend/js";
import {NdArray} from "../src"

describe("Js tests", async () => {

    it("Check 1", async () => {
        const nt = await backend();

        const a = nt.NdInt8ArrayNew(new Int8Array([1, 2, 3, 4, 5, 6]), new Int32Array([2, 3]));
        const b = nt.NdInt8ArrayNew(new Int8Array([-1, -2, -3, -4, -5, -6]), new Int32Array([2, 3]));
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

    it("Check 3", async () => {
        const nt = await backend();

        const a = nt.NdInt8ArrayNew(new Int8Array([1, 2, -3, -9, 5, 6]), new Int32Array([6]));
        console.log(nt.NdInt8ArrayGetData(a));
        const b = nt.NdInt8ArrayArgmax(a, -1);
        console.log(nt.NdInt32ArrayGetData(b));

        const c = nt.NdInt8ArrayNew(new Int8Array([1, 2, -3, -9, 5, 6]), new Int32Array([2, 3]));
        console.log(nt.NdInt8ArrayGetData(c));
        const d = nt.NdInt8ArrayArgmax(c, 0);
        console.log(nt.NdInt32ArrayGetData(d));

        /*
        import numpy as np
        arr = np.array([1, 2, -3, -9, 5, 6]).reshape([2, 3])
        print(arr)
        print(arr.argmax(1))
         */
    }).timeout(60000);

});
