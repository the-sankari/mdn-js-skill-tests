/**
 * @file arrays2.js
 * @description JavaScript code for the index.html file.
 * Convert the string into an array, removing the + characters in the process. Save the result in a variable called myArray.
 * Store the length of the array in a variable called arrayLength.
 * Store the last item in the array in a variable called lastItem.
 */

const task2Div = document.getElementById("task1");
let myString = "Ryu+Ken+Chun-Li+Cammy+Guile+Sakura+Sagat+Juri";

// Convert the string into an array, removing the + characters
let myArray = myString.split("+");

// Store the length of the array
let arrayLength = myArray.length;

// Store the last item in the array
let lastItem = myArray[myArray.length - 1];

// Log the results to the console for debugging
console.log("Task 2 Array:", myArray);
console.log("Array Length:", arrayLength);
console.log("Last Item:", lastItem);

const task2Result = document.createElement("p");

task2Result.innerHTML = `<h2>Task 2 Result</h2><p>Array:  ${myArray}</p> <p>The length of the array is  ${arrayLength}</p> <p>The last item in the array is ${lastItem}</p>`;

task1Div.appendChild(task2Result);
