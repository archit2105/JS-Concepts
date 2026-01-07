# Closures in JavaScript

A closure is created when an inner function remembers variables from its outer function even after the outer function has finished executing.

Closures allow functions to access and preserve their lexical scope.

---

## Basic Example

```javascript
function outer() {
  let count = 0;

  function inner() {
    count++;
    console.log(count);
  }

  return inner;
}

const counter = outer();
counter(); // 1
counter(); // 2
counter(); // 3
