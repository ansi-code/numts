import {NdArray} from "numts";

async function main() {
    const a = await NdArray.From([1, 2, 3, 4, 5, 6, 7, 8], [2, 4], "i8", "wasm");
    const b = await NdArray.From([-1, -2, -3, -4, -5, -6, -7, -8], [2, 4], "i8", "wasm");
    console.log(a.getData());
    a.add(b);
    console.log(a.getData());

    const a1 = await NdArray.From([1, 2, 3, 4, 5, 6, 7, 8], [2, 4], "i8", "js");
    const b1 = await NdArray.From([-1, -2, -3, -4, -5, -6, -7, -8], [2, 4], "i8", "js");
    console.log(a1.getData());
    a1.add(b1);
    console.log(a1.getData());
}

(async () => {
    await main();
})();
