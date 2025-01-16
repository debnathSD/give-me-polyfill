/**
 * // Basic of Throttle: Allow a function call only after a certain milliseconds of time
 * // function throttle(fn, delay) --> takes a function and delay as arguments
 * 
 * // Example use case: window resize event -> allow to trigger a functionality only after a certain ms of time, even if the user
 * is resizing the window continuously
 * 
 * Returns: a Function
 * 
 * To put it in simple terms:

Throttling will delay executing a function. It will reduce the notifications of an event that fires multiple times.

Debouncing will bunch a series of sequential calls to a function into a single call to that function. It ensures that one notification is made for an event that fires multiple times.
You can visually see the difference here

If you have a function that gets called a lot - for example when a resize or mouse move event occurs, it can be called a lot of times. If you don't want this behaviour, you can Throttle it so that the function is called at regular intervals. Debouncing will mean it is called at the end (or start) of a bunch of events.
 */

function throttle(fn, delay) {
    let isAllowed = true;
    return function() {
        let currentContext = this,
        args = arguments; // In case our passed function fn has some arguments passed in it
        if (isAllowed) {
            fn.apply(currentContext, args); // we apply it here
            // Or else, only fn() would have worked
            isAllowed = false;
            setTimeout(() => {
                isAllowed = true;
            }, delay)
        }
    }
}


function throttle2(fn, d) {
    let isAllowed = true;
    return function() {
        if (isAllowed) {
            fn.call(this, arguments);
            isAllowed = false;
            setTimeout(() => isAllowed = true, d)
        }
    }
}

throttle2(() => {
    console.log("heyyyy")
}, 1000)();