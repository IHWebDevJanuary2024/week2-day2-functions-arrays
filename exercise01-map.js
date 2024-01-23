// array of cities:
const cities = ['miami', 'barcelona', 'madrid', 'amsterdam', 'berlin', 'sao paulo', 'lisbon', 'mexico city', 'paris'];
// create a new array with the names of the cities, first character capitalized
const newArray = cities.map((eachCity) => {
    return eachCity[0].toUpperCase() + eachCity.slice(1)
})

console.log(newArray);

const students = [
    {
        name: 'Tony Parker',
        firstProject: 80,
        secondProject: 75,
        finalExam: 90
    },
    {
        name: 'Marc Barchini',
        firstProject: 84,
        secondProject: 65,
        finalExam: 65
    },
    {
        name: 'Claudia Lopez',
        firstProject: 45,
        secondProject: 95,
        finalExam: 99
    },
    {
        name: 'Alvaro Briattore',
        firstProject: 82,
        secondProject: 92,
        finalExam: 70
    },
    {
        name: 'Isabel Ortega',
        firstProject: 90,
        secondProject: 32,
        finalExam: 85
    },
    {
        name: 'Francisco Martinez',
        firstProject: 90,
        secondProject: 55,
        finalExam: 78
    },
    {
        name: 'Jorge Carrillo',
        firstProject: 83,
        secondProject: 77,
        finalExam: 90
    },
    {
        name: 'Miguel López',
        firstProject: 80,
        secondProject: 75,
        finalExam: 75
    },
    {
        name: 'Carolina Perez',
        firstProject: 85,
        secondProject: 72,
        finalExam: 67
    },
    {
        name: 'Ruben Pardo',
        firstProject: 89,
        secondProject: 72,
        finalExam: 65
    }
];


const resultArray = students.map((eachStudent) => {
    const courseProjectsAVG = (eachStudent.firstProject + eachStudent.secondProject) / 2;
    return { name: eachStudent.name, finalGrade: Math.round(eachStudent.finalExam * 0.6 + courseProjectsAVG * 0.4) }
})

console.log(resultArray);