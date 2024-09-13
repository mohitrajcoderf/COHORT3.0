// function setTimeoutPromisified(ms){
//     let p= new Promise (resolve => setTimeout(resolve, ms));
//     return p;
// }

// function callback() {
//     console.log("after 3 seconds")
// }

// setTimeoutPromisified(3000).then(callback);

/*

function Promisecallback (resolve) {
    setTimeout(resolve, 10000)
}

function setTimeoutPromisified(){
    return new Promise(Promisecallback);
}

function main () {
    console.log("main will called.")
}

setTimeoutPromisified().then(main) // PROMISIFED APPROACH

*/

function random(resolve) {
 setTimeout(resolve,3000);
}

let p = new Promise(random);

function callback () {
    console.log("mohit")
}
p.then(callback);