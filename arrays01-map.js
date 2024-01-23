// MAP METHOD RETORNS A NEW ARRAY

const names = ['John', 'Jane', 'Mike', 'Emily'];

/* names.forEach((eachName, index) => {
    const tempName = eachName + "y"
    // names.splice(index, 1, tempName)
    names[index] = tempName;
}) */

// console.log(names);

const newArray = names.map((eachName) => {
    return eachName + "y"
})

// SHORTER WAY OF DOING THE SAME THING
const anotherArrayShorter = names.map(eachName => eachName + "y")

console.log(newArray);
console.log(names);