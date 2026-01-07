# Scope in JavaScript

Scope determines **where a variable is accessible in the program**.

---

## Types of Scope

### 1️⃣ Global Scope
Variables declared outside any function/block → accessible everywhere.

### 2️⃣ Function Scope
Variables declared using `var` inside a function → available only inside that function.

### 3️⃣ Block Scope
Variables declared using `let` or `const` inside `{ }` → accessible only inside that block.

---

## Example

```javascript
var a = 10; // Global

function test() {
  var b = 20; // Function scope

  if (true) {
    let c = 30; // Block scope
    console.log(c); // 30
  }

  console.log(b); // 20
}

test();
console.log(a); // 10
