/**
 * @file arrays1.js
 * @description JavaScript code for the index.html file.
 * This file contains functions to manipulate an * array and display results in the HTML.
 * This task gives you some basic array practice. * Create an array of three items, and store it in a variable called myArray. The items can be anything you want — how about your favorite foods or bands?
 * Next, modify the first two items in the array using simple bracket notation and assignment. Then add a new item to the beginning of the array.
 */

const task1Div = document.getElementById("task1");

let task1Array = ["Banana", "Apple", "Orange"]; // Created array with 3 items

task1Array[0] = "mango"; // Modified first item
task1Array[1] = "kiwi"; // Modified second item

task1Array.unshift("Pineapple"); // Added item to beginning

console.log("Task 1 Array:", task1Array); // Log the result to the console

const task1Result = document.createElement("p");

task1Result.innerHTML = `<h2>Task 1 Result</h2><p> ${task1Array}</p>`;

task1Div.appendChild(task1Result);
