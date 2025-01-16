/**
 * Basic of Debouncing: It limits the rate at which a function is invoked in a JS Environment
 * Once a function is executed, it limits the rate by waiting for a certain amount of time
 * 
 * Use case: Product search in an e-commerce website -> do not call the search API on each and every keystroke, allow the search API call only when
 * there is a pause of certain milliseconds between two keystrokes
 * 
 * Returns: a Function
 * 
 * To put it in simple terms:

Throttling will delay executing a function. It will reduce the notifications of an event that fires multiple times.

Debouncing will bunch a series of sequential calls to a function into a single call to that function. It ensures that one notification is made for an event that fires multiple times.

If you have a function that gets called a lot - for example when a resize or mouse move event occurs, it can be called a lot of times. If you don't want this behaviour, you can Throttle it so that the function is called at regular intervals. Debouncing will mean it is called at the end (or start) of a bunch of events.
 */

const debounce = (fn, delay) => {
    let timer;
    return function() {
        // Just to keep a check that the current lexical environment is there
        // and we are calling this function
        // with correct context and args
        let context = this,
        args = arguments;

        // We are waiting for this delay and if a keystroke happens in between delay
        // we should stop calling this method
        // We need to clear this timeout whenever a new function call is made
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(context, args);
        }, delay);
    }
};

const debounce2 = (fn, d) => {
    let timer;
    return function() {
        clearTimeout(timer);
        timer = setTimeout(() => fn(), d);
    }
}





