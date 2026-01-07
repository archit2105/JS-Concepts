# Async / Await in JavaScript

async/await is built on top of Promises and makes async code look synchronous.

---

## Basic Example

```javascript
function fetchData() {
  return new Promise(resolve =>
    setTimeout(() => resolve("Data loaded"), 1000)
  );
}

async function load() {
  const result = await fetchData();
  console.log(result);
}

load();
```

---

## Error Handling

```javascript
async function run() {
  try {
    throw new Error("Something failed");
  } catch (e) {
    console.log(e.message);
  }
}

run();
```

---

## Parallel Execution

```javascript
async function start() {
  const [a, b] = await Promise.all([
    Promise.resolve("A"),
    Promise.resolve("B")
  ]);

  console.log(a, b);
}

start();
```

---

## Key Points

- async function always returns a Promise  
- await pauses execution until Promise settles  
- cleaner than promise chaining
