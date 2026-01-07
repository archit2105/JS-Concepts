
# Event Loop in JavaScript

JavaScript is single-threaded, but it handles asynchronous operations using the event loop.

The call stack executes synchronous code, while async tasks are placed into queues and processed later.

---

## Example

```javascript
console.log("Start");

setTimeout(() => console.log("Timeout"), 0);

Promise.resolve().then(() => console.log("Promise"));

console.log("End");

Output:
Start
End
Promise
Timeout