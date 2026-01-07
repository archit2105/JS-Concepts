/**
 * Memoization in JavaScript
 *
 * Theory:
 * Memoization is an optimization technique where the result
 * of a function call is cached, so the same inputs return the
 * stored result instead of recomputing.
 *
 * Benefits:
 * - Improves performance
 * - Avoids repeated expensive computations
 * - Common in recursion, math operations, API caching
 *
 * Idea:
 * - Check if result already exists in cache
 * - If yes → return cached value
 * - If no → compute, store, and return value
 */

function memoize(fn) {
  const cache = {};

  return function (...args) {
    const key = JSON.stringify(args);

    if (cache[key]) {
      console.log("Returning cached result for", key);
      return cache[key];
    }

    console.log("Calculating result for", key);
    const result = fn.apply(this, args);
    cache[key] = result;
    return result;
  };
}

/* -----------------------------------------
   Example: Expensive Computation
----------------------------------------- */

function slowSquare(n) {
  for (let i = 0; i < 1e7; i++) {} // simulate heavy work
  return n * n;
}

const memoSquare = memoize(slowSquare);

console.time("First call");
console.log(memoSquare(5));
console.timeEnd("First call");

console.time("Second call (cached)");
console.log(memoSquare(5));
console.timeEnd("Second call (cached)");

/* -----------------------------------------
   Example: Fibonacci with Memoization
----------------------------------------- */

const fib = memoize(function (n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
});

console.log("Fibonacci:", fib(10));

/* -----------------------------------------
   Summary:
   - Memoization stores results of function calls
   - Reuses cached values for same inputs
   - Major performance boost in recursive tasks
----------------------------------------- */
