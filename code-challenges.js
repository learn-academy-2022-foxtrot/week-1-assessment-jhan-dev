// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Describing your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create the code that determines which of the two strings has more characters. Use the two sets of test variables provided.

// Describe your process:
    //First create an if else statement to check both fruit lengths to determine if the     condition of having a greater length than the other is met.

    //If true, expected outcome is 'banana' for ex:1, 'cherry' for ex:2.

// Set one:
// const fruit1 = "apple"
// const fruit2 = "banana"
// // Expected outcome: "banana"

// if (fruit1.length < fruit2.length) {
//     console.log(fruit2)
// }
// else if (fruit1.length > fruit2.length) {
//     console.log(fruit1)
// }

// Set two:
// const fruit1 = "cherry"
// const fruit2 = "kiwi"
// Expected outcome: "cherry"

// if (fruit1.length > fruit2.length) {
//     console.log(fruit1)
// }
// else if (fruit1.length < fruit2.length) {
//     console.log(fruit2)
// }

// --------------------1) Create the code that determines if a given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Describe your process:
    //First create an if else statement to check if const temp is below 212, above 212, or = to 212.

    //If below 212, console log `${temp} is below boiling point`
    //else if above 212, console log `${temp} is above boiling point`
    //else if equal to 212, console log `${temp} is at boiling point`

// const temp = 42
// Expected output: "42 is below boiling point"

// if (temp < 212) {
//     console.log(`${temp} is below boiling point`)
// }


// const temp = 350
// Expected output: "350 is above boiling point"

// if (temp > 212) {
//     console.log(`${temp} is above boiling point`)
// }


// const temp = 212
// Expected output: "212 is at boiling point"

// if (temp === 212) {
//     console.log(`${temp} is at boiling point`)
// }


// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Describe your process:
    // First we have to concat both arrays into 1 array. After that, we will .length to get the new length of the array.

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 9

// console.log(padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns).length)


// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Describe your process:
    // We will want to use the reverse() method, but first we need to convert currentCohort from string to array. After applying reverse(), we will convert back to string w/ join().

const currentCohort = "Foxtrot 2022"
// Expected output: "2202 tortxoF"

console.log('Expected: 2202 tortxoF ', `Actual: ${currentCohort.split('').reverse().join('')}`)


// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Describe your process:
    // We will use the lastIndexOf() method to get the index of the given value.

const myNumbers = [13, 34, 42, 5, 5, 10, 27, 42, 10]
const givenValue1 = 42
// Expected output: 7

    console.log('Expected: 7 ', `Actual: ${myNumbers.lastIndexOf(givenValue1)}`)


const givenValue2 = 10
// Expected output: 8

    console.log('Expected: 8 ', `Actual: ${myNumbers.lastIndexOf(givenValue2)}`)


// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Describe your process:
    // We will use the sort() method and reverse() after to get the greatest to least array.

const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
// Expected output: [82, 80, 79, 77, 76, 73, 72]

    console.log('Expected: [82, 80, 79, 77, 76, 73, 72]', `Actual: ${sanDiegoSummerTemperatures.sort().reverse()}`)


const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
// Expected output: [68, 67, 66, 66, 62, 59, 59]

    console.log('Expected: [68, 67, 66, 66, 62, 59, 59]', `Actual: ${sanDiegoWinterTemperatures.sort().reverse()}`)