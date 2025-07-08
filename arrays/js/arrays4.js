/**
 * @file arrays4.js
 * @description JavaScript code for the index.html file.
For this array task, we provide you with a starting array listing the names of some birds.

Find the index of the "Eagles" item, and use that to remove the "Eagles" item.
Make a new array from this one, called eBirds, that contains only birds from the original array whose names begin with the letter "E". Note that startsWith() is a great way to check whether a string starts with a given character.
 */

const task4Div = document.getElementById("task4");

const birds = ["Parrots", "Falcons", "Eagles", "Emus", "Caracaras", "Egrets"];

// Find the index of "Eagles" and remove it

const indexOfEagles = birds.indexOf("Eagles");

// Remove "Eagles" from the array
if (indexOfEagles !== -1) {
  console.log(`Eagles found at index: ${indexOfEagles}`);
  birds.splice(indexOfEagles, 1);
}

// Create a new array eBirds with birds that start with "E"
const eBirds = birds.filter((bird) => bird.startsWith("E"));

// Log the results to the console for debugging
console.log("Original Birds Array:", birds);
console.log("eBirds Array:", eBirds);

// Create a result element and append it to the task4Div

const task4Result = document.createElement("p");

task4Result.innerHTML = `<h2>Task 4 Result</h2><p>ebirds Array: ${eBirds}</p>`;

task4Div.appendChild(task4Result);
