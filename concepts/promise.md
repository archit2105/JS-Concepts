# Promises in JavaScript

A Promise represents the result of an asynchronous operation. It can be in one of three states:

pending → fulfilled → rejected

---

## Basic Example

```javascript
const task = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Done"), 1000);
});

task.then(result => console.log(result));
