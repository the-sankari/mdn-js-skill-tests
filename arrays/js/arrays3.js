/**
 * @file arrays3.js
 * @description JavaScript code for the index.html file.
 * Remove the last item in the array.
 * Add two new names to the end of the array
 * Go over each item in the array and add its index number after the name inside parentheses, for example Ryu (0). Note that we don't teach how to do this in the Arrays article, so you'll have to do some research
 * Finally, join the array items together in a single string called myString, with a separator of "-".
 */

const task3Div = document.getElementById("task3");
let myArrayTask3 = [
  "Ryu",
  "Ken",
  "Chun-Li",
  "Cammy",
  "Guile",
  "Sakura",
  "Sagat",
  "Juri",
];

// Remove the last item in the array
myArrayTask3.pop();

// Add two new names to the end of the array
myArrayTask3.push("Akuma");
myArrayTask3.push("Blanka");

// Go over each item in the array and add its index number after the name inside parentheses
for (let i = 0; i < myArrayTask3.length; i++) {
  myArrayTask3[i] += ` (${i})`;
}

// Join the array items together in a single string called myString, with a separator of "-"
let myStringTask3 = myArrayTask3.join("-");

// Log the results to the console for debugging
console.log("Task 3 Array:", myArrayTask3);
console.log("My String:", myStringTask3);

const task3Result = document.createElement("p");

task3Result.innerHTML = `<h2>Task 3 Result</h2><p>Array: ${myStringTask3}</p>`;

task3Div.appendChild(task3Result);
