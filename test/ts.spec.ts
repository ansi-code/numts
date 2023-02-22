import {NdArray} from "../src/cpu";

describe("Typescript tests", async () => {

    it("Check 1", async () => {
        const a = new NdArray(new Int8Array([1, 2, 3, 4, 5, 6]), new Uint8Array([2, 3]));
        const b = new NdArray(new Int8Array([-1, -2, -3, -4, -5, -6]), new Uint8Array([2, 3]));
        const c = a.add(b);
        console.log(c.data.toString());
    }).timeout(60000);

});
