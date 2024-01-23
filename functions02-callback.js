// CALLBACK FUNCTIONS

function withCallback(anotherFunction) { // this is a parameter (ditto) and a callback function
    anotherFunction()
}

function helloWorld() {
    console.log("Hello world");
}

function helloIronhack() {
    console.log("Hello Ironhack!");
}

withCallback(helloWorld)
withCallback(helloIronhack)

// ANOTHER EXAMPLE WITH MORE CALLBACKS
function putShirt() {
    console.log('Putting on the shirt.');
}

function putSocks() {
    console.log('Putting on the socks.');
}

function putPants() {
    console.log('Putting on the pants.');
}

function putShoes() {
    console.log('Putting on the shoes.');
}


function getReadyForWork(callback1, callback2, callback3, callback4) {
    callback1();
    callback2();
    callback3();
    callback4();
    console.log("I'm ready to go to work!!!");
}

getReadyForWork(putShirt, putSocks, putPants, helloIronhack)

getReadyForWork(function () { console.log("This is the anonymous function"); }, putSocks, putPants, helloIronhack)

function getLength(str, anonFunc) {
    anonFunc(str);
}

getLength('aleksandra', function (str) {
    console.log(`${str} has ${str.length} letters.`);
});

// => aleksandra has 10 letters.

getLength('nick', function (str) {
    console.log(`${str} has ${str.length} letters.`);
});
// => nick has 4 letters.

const students = ['anna', 'brian', 'chloe'];

// Loop over an array and print each element
students.forEach(function (el) {
    console.log('Hello ' + el);
});

/*
TO AVOID writing this code every time we want to loop an array we use the foreach 
function forEach(callback, array){
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        callback(element)
    }
} 
*/

// ASYNC functions also use callbacks
setTimeout(function () {
    console.log('I am anonymous function and I will execute after 2 seconds');
}, 2000);

console.log("This is the console log after the set timeout");

// ... nothing happens for 2 seconds
// => I am anonymous function and I will execute after 2 seconds

let counter = 0;
const myInterval = setInterval(function () {
    counter++
    console.log("this is an interval: ", counter);

    if(counter % 2 === 0){
        console.log("A monster appeared");
    }

    if (counter === 20) {
        clearInterval(myInterval) // like this we stop the interval, otherwise it runs forever
    }

}, 1000) 

