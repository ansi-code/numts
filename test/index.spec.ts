import {NdArray} from "../src";

describe("Simple expression tests", async () => {

    it("Check 1", async () => {
        const a = new NdArray(new Int32Array([1, 2, 3, 4, 5, 6]), new Uint8Array([2, 3]));
        const b = new NdArray(new Int32Array([-1, -2, -3, -4, -5, -6]), new Uint8Array([2, 3]));
        const c = a.add(b); // Returns [[0, 0, 0], [0, 0, 0]]
        console.log(c);

    }).timeout(60000);

});
