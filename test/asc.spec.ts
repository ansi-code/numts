import wasm from "../src/wasm";

describe("ASC tests", async () => {

    it("Check 1", async () => {
        const nt = await wasm();
        //const nt = await (await import("../src/wasm")).default();
        const a = nt.Int8NdArrayNew(new Int8Array([1, 2, 3, 4, 5, 6]), new Uint8Array([2, 3]));
        const b = nt.Int8NdArrayNew(new Int8Array([-1, -2, -3, -4, -5, -6]), new Uint8Array([2, 3]));
        const c = nt.Int8NdArrayAdd(a, b);
        console.log(c);
    }).timeout(60000);

});
