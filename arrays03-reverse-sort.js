// REVERSE

const names = ['John', 'Emma', 'Michael', 'Sophia', 'William', 'Olivia', 'James', 'Ava', 'Benjamin', 'Isabella'];


console.log(names.reverse()); // we are modifying the array

console.log(names); // now it's reversed


// SORT

console.log(names.sort()); // this method is also mutating the array

names.sort((nameA, nameB) => { // -1 0 1 same as localeCompare (kind of)
    if (nameA.length > nameB.length) {
        return 1
    } else if (nameB.length > nameA.length) {
        return -1
    } else {
        return 0
    }
})

console.log(names);

const numbersArray = [5, 2, 9, 1, 8, 3, 7, 4, 10, 6];

numbersArray.sort() // [1, 10, 2, 3, 4,  5, 6, 7, 8, 9]

numbersArray.sort((a, b) => {
    if (a > b) return 1
    if (a < b) return -1
    if (a === b) return 0
}) // we sort them by value


// shorter way
numbersArray.sort((a, b) => a - b) // sort is checking if the return is positive, negative or 0
console.log(numbersArray);