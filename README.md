# NumTs

NumTs is a TypeScript library that provides a set of mathematical functions and data structures that aim to reproduce some of the functionalities of NumPy, a popular Python library for numerical computing. 
NumTs is designed for developers who work with TypeScript and want to perform numerical operations efficiently.

## Installation

You can install NumTs via npm:

```bash
$ npm install numts
```

## Usage

NumTs provides a range of mathematical functions and data structures that you can use in your TypeScript code.
Here's a quick overview of what NumTs offers:

### Arrays

NumTs provides an NdArray class that you can use to create and manipulate n-dimensional arrays.
Here's an example:

```js
import { NdArray } from 'numts';

const a = await NdArray.From([1, 2, 3, 4, 5, 6], [2, 3], "i8");
const b = await NdArray.From([-1, -2, -3, -4, -5, -6], [2, 3], "i8");
a.add(b);
```

### Support for WebAssembly

NumTs provides a range of functions that you can use to perform linear algebra operations leveraging on webassembly performances.
Here's an example:

```js
import { NdArray } from 'numts';

const a = await NdArray.From([1, 2, 3, 4, 5, 6], [2, 3], "i8", "wasm");
const b = await NdArray.From([-1, -2, -3, -4, -5, -6], [2, 3], "i8", "wasm");
a.dot(b);
```

## Contributing

If you'd like to contribute to NumTs, please fork the repository and make your changes. Once you've made your changes, create a pull request, and we'll review your changes.

## License

This project is licensed under the Apache 2.0 License. See the [LICENSE](./LICENSE) file for details.
