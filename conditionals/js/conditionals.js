/** @fileoverview JavaScript for the Conditionals skill test page.
 * This file contains functions to demonstrate conditional statements in JavaScript.
 * The task is to create a simple conditional statement that checks a variable and displays a message based on its value.
 * Conditionals 1
 * In this task you are provided with two variables:
 * season — contains a string that says what the current season is.
 * response — begins uninitialized, but is later used to store a response that will be printed to the output panel.
 * We want you to create a conditional that checks whether season contains the string "summer", and if so assigns a string to response that gives the user an appropriate message about the season. If not, it should assign a generic string to response that tells the user we don't know what season it is.
 * To finish off, you should then add another test that checks whether season contains the string "winter", and again assigns an appropriate string to response.
 * Try updating the live code below to recreate the finished example:
 */

const conditionals1 = document.getElementById("conditionals1");

let season = "summer"; // Change this to "winter" to test the second condition
let response = ""; // Initialize response variable

// Check if the season is summer
if (season === "summer") {
  response = "It's summer! Time for some fun in the sun!";
} else if (season === "winter") {
  // Check if the season is winter
  response = "It's winter! Time to bundle up and enjoy the snow!";
}

// Console log the response for debugging
console.log("Response:", response);

const element1 = document.createElement("p");
element1.innerHTML = `<h2>Task 1 Result</h2>
<p>${response}</p>`;

conditionals1.appendChild(element1);
