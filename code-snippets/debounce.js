/**
 * Debounce in JavaScript
 *
 * Theory:
 * Debouncing ensures a function runs ONLY after a specified delay has passed
 * since the last time it was called.
 *
 * Common Use Cases:
 * - Search input typing
 * - Resize events
 * - Button click spam prevention
 * - API calls optimization
 *
 * Idea:
 * - User keeps triggering the function
 * - Timer resets every time
 * - Function executes only when user STOPS triggering
 */

function debounce(fn, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

/* -----------------------------------------
   Example: Debounce Search Input
----------------------------------------- */

function fetchResults(query) {
  console.log("API call for:", query);
}

const debouncedSearch = debounce(fetchResults, 500);

// Simulated user typing
debouncedSearch("H");
debouncedSearch("He");
debouncedSearch("Hel");
debouncedSearch("Hell");
debouncedSearch("Hello"); // <-- Only this executes

/* -----------------------------------------
   Example: Window Resize Optimization
----------------------------------------- */

const handleResize = debounce(() => {
  console.log("Resized:", window.innerWidth);
}, 300);

window.addEventListener("resize", handleResize);
