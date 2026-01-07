/**
 * Currying in JavaScript
 *
 * Theory:
 * Currying transforms a function with multiple arguments
 * into a sequence of functions, each taking one argument.
 *
 * Example:
 * normal function  ->  f(a, b, c)
 * curried version  ->  f(a)(b)(c)
 *
 * Benefits:
 * - Reusability
 * - Function composition
 * - Cleaner partial application
 */

function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args); // enough arguments → call function
    }

    return function (...nextArgs) {
      return curried.apply(this, args.concat(nextArgs));
    };
  };
}

/* -----------------------------------------
   Example 1: Simple Add Function
----------------------------------------- */

function add(a, b, c) {
  return a + b + c;
}

const curriedAdd = curry(add);

console.log(curriedAdd(1)(2)(3));   // 6
console.log(curriedAdd(1, 2)(3));   // 6
console.log(curriedAdd(1)(2, 3));   // 6

/* -----------------------------------------
   Example 2: Partial Application
----------------------------------------- */

const add5 = curriedAdd(5);

console.log(add5(10)(20)); // 35

/* -----------------------------------------
   Example 3: Practical Use Case
   (Format log messages)
----------------------------------------- */

function log(level) {
  return message => console.log(`[${level}] ${message}`);
}

const info = log("INFO");
const error = log("ERROR");

info("Server started");
error("Something went wrong");

/* -----------------------------------------
   Summary:
   - Currying breaks multi-argument functions into smaller steps
   - Encourages reusable + modular code
   - Helpful in functional programming
----------------------------------------- */
