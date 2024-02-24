<!--

@license Apache-2.0

Copyright (c) 2019 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# iterNonFibonacciSeq

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Create an iterator which generates a [non-Fibonacci integer sequence][fibonacci-number].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The nth [non-Fibonacci number][fibonacci-number] is given by

<!-- <equation class="equation" label="eq:nonfibonacci_number" align="center" raw="f(n) = \left \lfloor{ n + 1 + \log_\varphi \biggl( \sqrt{5}( n + 1 + \log_\varphi(\sqrt{5}(n+1))) - 5 + \tfrac{3}{n+1} \biggr) - 2 } \right \rfloor" alt="Formula to compute the nth non-Fibonacci number."> -->

```math
f(n) = \left \lfloor{ n + 1 + \log_\varphi \biggl( \sqrt{5}( n + 1 + \log_\varphi(\sqrt{5}(n+1))) - 5 + \tfrac{3}{n+1} \biggr) - 2 } \right \rfloor
```

<!-- <div class="equation" align="center" data-raw-text="f(n) = \left \lfloor{ n + 1 + \log_\varphi \biggl( \sqrt{5}( n + 1 + \log_\varphi(\sqrt{5}(n+1))) - 5 + \tfrac{3}{n+1} \biggr) - 2 } \right \rfloor" data-equation="eq:nonfibonacci_number">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@aa77a2f6e76d2e9da5b49bffa45ee5167d6c16e1/lib/node_modules/@stdlib/math/iter/sequences/nonfibonacci/docs/img/equation_nonfibonacci_number.svg" alt="Formula to compute the nth non-Fibonacci number.">
    <br>
</div> -->

<!-- </equation> -->

where `φ` is the [golden ratio][golden-ratio].

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import iterNonFibonacciSeq from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-iter-sequences-nonfibonacci@deno/mod.js';
```

#### iterNonFibonacciSeq( \[options] )

Returns an iterator which generates a [non-Fibonacci integer sequence][fibonacci-number].

```javascript
var it = iterNonFibonacciSeq();
// returns <Object>

var v = it.next().value;
// returns 4

v = it.next().value;
// returns 6

v = it.next().value;
// returns 7

// ...
```

The returned iterator protocol-compliant object has the following properties:

-   **next**: function which returns an iterator protocol-compliant object containing the next iterated value (if one exists) assigned to a `value` property and a `done` property having a `boolean` value indicating whether the iterator is finished.
-   **return**: function which closes an iterator and returns a single (optional) argument in an iterator protocol-compliant object.

The function supports the following `options`:

-   **iter**: number of iterations. Default: `1e308`.

By default, the function returns an infinite iterator (i.e., an iterator which never ends). To limit the number of iterations, set the `iter` option.

```javascript
var opts = {
    'iter': 2
};
var it = iterNonFibonacciSeq( opts );
// returns <Object>

var v = it.next().value;
// returns 4

v = it.next().value;
// returns 6

var bool = it.next().done;
// returns true
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If an environment supports `Symbol.iterator`, the returned iterator is iterable.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import iterNonFibonacciSeq from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-iter-sequences-nonfibonacci@deno/mod.js';

// Create an iterator:
var opts = {
    'iter': 100
};
var it = iterNonFibonacciSeq( opts );

// Perform manual iteration...
var v;
while ( true ) {
    v = it.next();
    if ( v.done ) {
        break;
    }
    console.log( v.value );
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

* * *

<section class="references">

## References

-   Gould, H.W. 1965. "Non-Fibonacci Numbers." _Fibonacci Quarterly_, no. 3: 177–83. [&lt;http://www.fq.math.ca/Scanned/3-3/gould.pdf>][@gould:1965a].
-   Farhi, Bakir. 2011. "An explicit formula generating the non-Fibonacci numbers." _arXiv_ abs/1105.1127 \[Math.NT] (May): 1–5. [&lt;https://arxiv.org/abs/1105.1127>][@farhi:2011a].

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math-base/special/nonfibonacci`][@stdlib/math/base/special/nonfibonacci]</span><span class="delimiter">: </span><span class="description">compute the nth non-Fibonacci number.</span>
-   <span class="package-name">[`@stdlib/math-iter/sequences/fibonacci`][@stdlib/math/iter/sequences/fibonacci]</span><span class="delimiter">: </span><span class="description">create an iterator which generates a Fibonacci sequence.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-iter-sequences-nonfibonacci.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-iter-sequences-nonfibonacci

[test-image]: https://github.com/stdlib-js/math-iter-sequences-nonfibonacci/actions/workflows/test.yml/badge.svg?branch=v0.2.1
[test-url]: https://github.com/stdlib-js/math-iter-sequences-nonfibonacci/actions/workflows/test.yml?query=branch:v0.2.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-iter-sequences-nonfibonacci/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-iter-sequences-nonfibonacci?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-iter-sequences-nonfibonacci.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-iter-sequences-nonfibonacci/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-iter-sequences-nonfibonacci/tree/deno
[deno-readme]: https://github.com/stdlib-js/math-iter-sequences-nonfibonacci/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/math-iter-sequences-nonfibonacci/tree/umd
[umd-readme]: https://github.com/stdlib-js/math-iter-sequences-nonfibonacci/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/math-iter-sequences-nonfibonacci/tree/esm
[esm-readme]: https://github.com/stdlib-js/math-iter-sequences-nonfibonacci/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/math-iter-sequences-nonfibonacci/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-iter-sequences-nonfibonacci/main/LICENSE

[fibonacci-number]: https://en.wikipedia.org/wiki/Fibonacci_number

[golden-ratio]: https://en.wikipedia.org/wiki/Golden_ratio

[@gould:1965a]: http://www.fq.math.ca/Scanned/3-3/gould.pdf

[@farhi:2011a]: https://arxiv.org/abs/1105.1127

<!-- <related-links> -->

[@stdlib/math/base/special/nonfibonacci]: https://github.com/stdlib-js/math-base-special-nonfibonacci/tree/deno

[@stdlib/math/iter/sequences/fibonacci]: https://github.com/stdlib-js/math-iter-sequences-fibonacci/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->
