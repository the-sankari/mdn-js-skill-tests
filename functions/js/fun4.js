/**
 * Task 4
In this task, we have an array of names, and we're using Array.filter() to get an array of only names shorter than 5 characters. The filter is currently being passed a named function isShort() which checks the length of the name, returning true if the name is less than 5 characters long, and false otherwise.

We'd like you to change this into an arrow function. See how compact you can make it.


 */

const names4 = [
  "Chris",
  "Li Kang",
  "Anne",
  "Francesca",
  "Mustafa",
  "Tina",
  "Bert",
  "Jada",
];
const para4 = document.createElement("p");

// Add your code here
const isShort = (name) => name.length < 5;

// Use the filter method to get names shorter than 5 characters
const shortNames4 = names4.filter(isShort);

// Set the paragraph's textContent to the filtered names (clean way)
para4.textContent = `Short names: ${shortNames4.join(", ")}`;

console.log("Task 4 Result:", shortNames4);

// Don't edit the code below here!
const section4 = document.getElementById("fun4");
section4.appendChild(para4);
