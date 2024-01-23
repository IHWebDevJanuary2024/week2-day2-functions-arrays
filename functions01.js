// FUNCTION DECLARATION
function nameOfTheFunction(parameter1, parameter2){
    console.log(parameter1,parameter2);
    // Do all functions need a return?
    // NO
}

nameOfTheFunction("Hello") // Hello undefined

function createHelloWorldString(){
    return "Hello world!"
}

const helloMessage = createHelloWorldString();


function helloObject(){
    helloObject.message = "HEYY!!!"; // Functions are treated as objects in JS
    console.log(helloObject.message);
}

console.log(helloObject.name) // functions have properties and values

// FUNCTION EXPRESSION

const myFunction = function(){ // the function is stored in a variable
    console.log("this is the function stored in a variable");
}

myFunction() // it's called the same way

