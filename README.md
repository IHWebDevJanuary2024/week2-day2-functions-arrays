# ADVANCED FUNCTIONS AND ARRAY METHODS

In this class we've learned about advanced functions and array methods.

## Functions
Remember there is several ways to declare a function:
```javascript
// Function declaration
function myFunction() {
    // Code
}

// Function expression
const myFunction = function() {
    // Code
}

// Arrow function
const myFunction = () => {
    // Code
}
```

## Callbacks
A callback is a function that is passed **as an argument** to another function and is executed inside that function.

```javascript
function myFunction(callback) {
    // Code
    callback(); // callback is just a parameter name, it could be any name (Ditto)
}
```

## Array methods

### .map()
The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

```javascript
const numbers = [1, 2, 3, 4, 5];

const numbersTimesTwo = numbers.map((number) => {
    return number * 2;
});

console.log(numbersTimesTwo); // [2, 4, 6, 8, 10]
```

### .filter()
The filter() method creates a **new array** with all elements that pass the test implemented by the provided function.

```javascript
const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter((number) => {
    return number % 2 === 0;
});

console.log(evenNumbers); // [2, 4]
```

### .reduce()
The reduce() method executes a reducer function (that you provide as callback) on each element of the array, resulting in a **single output value**.

```javascript
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
});

console.log(sum); // 15
```

### .forEach()
The forEach() method executes a provided function once for each array element. It doesn't return anything.

```javascript
const numbers = [1, 2, 3, 4, 5];

numbers.forEach((number) => {
    console.log(number);
});

// 1
// 2
// 3
// 4
// 5
```

### .sort()

The sort() method sorts the elements of an array in place and returns the sorted array. It **modifies the array directly**.

```javascript
const numbers = [5, 3, 2, 4, 1];

const sortedNumbers = numbers.sort((a, b) => {
    return a - b; // when we return a negative number, a comes first
                  // when we return a positive number, b comes first
                  // when we return 0, nothing changes
});

console.log(sortedNumbers); // [1, 2, 3, 4, 5]
```

## reverse()

The reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first. It **modifies the array directly**.

```javascript
const numbers = [1, 2, 3, 4, 5];

const reversedNumbers = numbers.reverse();

console.log(reversedNumbers); // [5, 4, 3, 2, 1]
```
