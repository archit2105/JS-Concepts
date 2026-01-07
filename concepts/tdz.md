# Temporal Dead Zone (TDZ)

The Temporal Dead Zone is the period between entering a block and the actual variable declaration where `let` and `const` cannot be accessed.

Accessing them before declaration causes a ReferenceError.

---

## Example

```javascript
console.log(x); // ReferenceError
let x = 20;
