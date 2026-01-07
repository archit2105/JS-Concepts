
# Event Loop in JavaScript

JavaScript is single-threaded, but it handles asynchronous operations using the event loop.

The call stack executes synchronous code, while async tasks are placed into queues and processed later.
---

## Event Loop Diagram

![JavaScript Event Loop Diagram](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*k3yFQki71RJK-CQXC7GzLg.png)

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