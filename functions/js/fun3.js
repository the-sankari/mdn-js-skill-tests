/**
 * Task 3
In this task, you return to the problem posed in Task 1, with the aim of improving it. The three improvements we want you to make are:

Refactor the code that generates the random number into a separate function called random(), which takes as parameters two generic bounds that the random number should be between, and returns the result.
Update the chooseName() function so that it makes use of the random number function, takes the array to choose from as a parameter (making it more flexible), and returns the result.
Print the returned result into the paragraph (para)'s textContent.
Try updating the live code below to recreate the finished example:
 */

const names3 = [
  "Chris",
  "Li Kang",
  "Anne",
  "Francesca",
  "Mustafa",
  "Tina",
  "Bert",
  "Jada",
];
const para3 = document.createElement("p");

// Add your code here
const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const chooseName1 = (namesArray) => {
  const randomIndex = random(0, namesArray.length - 1);
  return `The chosen name is: ${namesArray[randomIndex]}`;
};

// Call the function to execute it and set the paragraph's textContent
para3.textContent = chooseName1(names3);

console.log("Task 3 Result:", para3.textContent);

// Don't edit the code below here!
const section3 = document.getElementById("fun3");
section3.appendChild(para3);
