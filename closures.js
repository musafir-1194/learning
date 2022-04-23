// A closure is the combination of a function bundled together 
// (enclosed) with references to its surrounding state (the lexical environment).

// In other words, a closure gives you access to an outer function's scope 
// from an inner function.

function displayFunction() {
    var message = 'Learning is cool!!';

    function displayMessage() {
        console.log(message);
    }
    return displayMessage;
}

var myFunc = displayFunction();
myFunc();

// y() inner function is returned from the outer function before being executed.

// In some programming languages, the local variables within a function exist for just 
// the duration of that function's execution

// Once x() finishes executing, you might expect that the name variable would no 
// longer be accessible. However, because the code still works as expected, this is 
// obviously not the case in JavaScript.

// The reason is that functions in JavaScript form closures. 


// Reference : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures



