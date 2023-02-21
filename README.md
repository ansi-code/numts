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

const a = new NdArray([[1, 2, 3], [4, 5, 6]]);
const b = new NdArray([[-1, -2, -3], [-4, -5, -6]]);

const c = a.add(b); // Returns [[0, 0, 0], [0, 0, 0]]
```

### Mathematical functions

NumTs provides a range of mathematical functions that you can use to perform numerical operations.
Here's an example:

```js
import { exp } from 'numts';

const a = 2;
const result = exp(a); // Returns 7.3890560989306495
```

### Linear algebra

NumTs provides a range of functions that you can use to perform linear algebra operations.
Here's an example:

```js
import { NdArray } from 'numts';

const a = new NdArray([[1, 2], [3, 4]]);
const b = new NdArray([[1, 2], [2, 1]]);

const c = a.dot(b); // Returns [[5, 4], [11, 10]]
```

## Contributing

If you'd like to contribute to NumTs, please fork the repository and make your changes. Once you've made your changes, create a pull request, and we'll review your changes.

## License

This project is licensed under the Apache 2.0 License. See the [LICENSE](./LICENSE) file for details.
