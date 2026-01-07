/**
 * Throttle in JavaScript
 *
 * Theory:
 * Throttling ensures a function executes at MOST once
 * within a specified time interval, no matter how many
 * times it is triggered.
 *
 * Difference from Debounce:
 * - Debounce → runs AFTER user stops triggering
 * - Throttle → runs at regular controlled intervals
 *
 * Common Use Cases:
 * - Scroll events
 * - Mouse move / drag events
 * - Button click rate-limit
 * - API rate control
 */

function throttle(fn, delay) {
  let lastCall = 0;

  return function (...args) {
    const now = Date.now();

    if (now - lastCall >= delay) {
      lastCall = now;
      fn.apply(this, args);
    }
  };
}

/* -----------------------------------------
   Example: Scroll Event Throttling
----------------------------------------- */

const handleScroll = throttle(() => {
  console.log("Scroll event fired");
}, 500);

window.addEventListener("scroll", handleScroll);

/* -----------------------------------------
   Example: Rate-limit Button Clicks
----------------------------------------- */

function submitAction() {
  console.log("Button clicked");
}

const throttledClick = throttle(submitAction, 1000);

// Simulated multiple clicks
throttledClick();
throttledClick();
throttledClick(); // <-- Only first executes immediately

/* -----------------------------------------
   Summary:
   - Throttle controls execution frequency
   - Prevents performance-heavy repeated calls
   - Useful for continuous events
----------------------------------------- */
