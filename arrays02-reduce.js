// REDUCE METHOD
const numbersArray = [30, 2, 3, 4, 5];

const reducedArray = numbersArray.reduce((accumulator, currentValue, index) => {
    console.log(`ITERATION OF THE LOOP: ${index}`);
    console.log("THE ACCUMULATOR IS: ", accumulator);
    console.log("THE CURRENT VALUE IS: ", currentValue);
    return accumulator + currentValue
})

console.log(reducedArray); // 44, only one value
console.log(numbersArray); // we don't modify the original array [30, 2, 3, 4, 5];

const citiesArray = ["New York", "London", "Paris", "Tokyo", "Berlin", "Rome", "Sydney", "Moscow", "Dubai", "Toronto"];

const allCities = citiesArray.reduce((accumulator, currentValue, index) => {
    console.log(`ITERATION OF THE LOOP: ${index}`);
    console.log("THE ACCUMULATOR IS: ", accumulator);
    console.log("THE CURRENT VALUE IS: ", currentValue);
    return `${accumulator} ${currentValue}` // this works with strings also
})

console.log(allCities);

const numbersArray2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const result = numbersArray2.reduce((acc, cur) => acc + cur, 1000) // we can add a second argument that will be the initial value of the accumulator

console.log("RESULT: ", result);

const words = ["Hello", "how", "are", "you"]

const resultPhrase = words.join(" ")

console.log(resultPhrase);

// CONCAT
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

console.log(array1.concat(array2))