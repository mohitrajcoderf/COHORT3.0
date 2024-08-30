let counter = 1;
function callback() {
    console.clear();  
    console.log(counter);
    counter = counter + 1;

    setTimeout(callback, 1000);
}
setTimeout(callback, 1000);

// best way to do things like this is the 1-counter.js file.
