import backend from "../src/backend/wasm";
import {NdArray} from "../src";

describe("Wasm tests", async () => {

    it("Check 1", async () => {
        const nt = await backend();

        const a = nt.NdInt8ArrayNew(new Int8Array([1, 2, 3, 4, 5, 6]), new Int32Array([2, 3]));
        const b = nt.NdInt8ArrayNew(new Int8Array([-1, -2, -3, -4, -5, -6]), new Int32Array([2, 3]));
        console.log(nt.NdInt8ArrayGetData(a));
        nt.NdInt8ArrayAdd(a, b);
        console.log(nt.NdInt8ArrayGetData(a));
    }).timeout(60000);

    it("Check 2", async () => {
        const a = await NdArray.From([1, 2, 3, 4, 5, 6], [2, 3], "i8", "wasm");
        const b = await NdArray.From([-1, -2, -3, -4, -5, -6], [2, 3], "i8", "wasm");
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
    }).timeout(60000);

    it("Check Profiling", async () => {
        const nt = await backend();

        const t = Date.now();

        const shape = new Int32Array([20000, 3000]);

        const a = nt.NdInt32ArrayRandom(shape);
        console.log("Processing time (ms)", Date.now() - t);
        const b = nt.NdInt32ArrayRandom(shape);
        console.log("Processing time (ms)", Date.now() - t);
        nt.NdInt32ArrayAdd(a, b);
        console.log("Processing time (ms)", Date.now() - t);

        nt.NdInt32ArraySoftmax(a);
        console.log("Processing time (ms)", Date.now() - t);
        nt.NdInt32ArraySoftmax(a);
        console.log("Processing time (ms)", Date.now() - t);
    }).timeout(60000);

});
