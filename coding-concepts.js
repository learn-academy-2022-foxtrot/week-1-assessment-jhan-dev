// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer:  5
// b) Verify and explain:  Console.log was 5. This is because colors.push("indigo") will display the new length of the colors array. To display the array with the new input, just console.log(colors) after the push.


// --------------------1) What will this log?

const cohort = "LEARN 2022"
// console.log(cohort.length)

// a) Your answer:  10
// b) Verify and explain:   Console.log was 10. This is because strings count every char including spaces, which the total length of cohort = 10.


// --------------------2) What will this log?

const greeting = "Hello World!"
// console.log(greeting[4])

// a) Your answer:  o
// b) Verify and explain:   Console.log was o. This is because the index of a variable will still pull the value from a string like an array.


// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
// console.log(languages[index])

// a) Your answer:  "Ruby"
// b) Verify and explain:   Console.log was Ruby. This is because the const index = 1, and the index of 1 in languages array is "Ruby".


// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer:  Should Error Out
// b) Verify and explain:   Errored Out. This is because the toUpperCase() method only works with strings. It will not work for Arrays. To do this, we wil have to convert the Array into a string, use toUpperCase() than convert back to an Array.


// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean"]
// console.log(typeof dataTypes.length)

// a) Your answer:  Number
// b) Verify and explain:   Console.log was Number. This is because the data type of dataTypes.length will output a number. To get the data type of the variable dataTypes, .length would have to be removed to get Array.
