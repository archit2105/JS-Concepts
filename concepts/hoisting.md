# Hoisting in JavaScript

Hoisting is JavaScript’s default behavior of moving declarations to the top of the current scope during the compilation phase.

Only declarations are hoisted, not initializations.

---

## Hoisting Example

```javascript
greet(); // Works

function greet() {
  console.log("Hello");
}




