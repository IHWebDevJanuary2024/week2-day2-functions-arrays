// ARROW FUNCTIONS

// function expression syntax
const greeting1 = function (name) { console.log(`Hello, ${name}!`); };

// arrow function syntax
const greeting2 = (name) => { 
    console.log(`Hello, ${name}!`); 
};

greeting2("Amanda")

// We can make it even shorter
const greeting3 = name => console.log(`Hello ${name}`);

// When we do it in one line without the curly braces the return is implicit
const greeting4 = name => `Hello ${name}`

console.log(greeting4("marcel")); // Hello marcel