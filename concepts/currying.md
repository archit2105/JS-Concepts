# Currying in JavaScript

Currying transforms a function that takes multiple arguments into a sequence of functions, each taking one argument.

---

## Basic Example

```javascript
function sum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(sum(1)(2)(3));
