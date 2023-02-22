import {Int8NdArrayNew} from "../src/asc/index.asc";

describe("Typescript tests", async () => {

    it("Check 1", async () => {
        const a = Int8NdArrayNew(new Int8Array([1, 2, 3, 4, 5, 6]), new Uint8Array([2, 3]));
        const b = Int8NdArrayNew(new Int8Array([-1, -2, -3, -4, -5, -6]), new Uint8Array([2, 3]));
        const c = a.add(b);
        console.log(c.data.toString());
        return true;
    }).timeout(60000);

    return true;
});
