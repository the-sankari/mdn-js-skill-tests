/**
 * Task 1
For this task, create a simple function—chooseName()—that prints a random name from the provided array (names) into the provided paragraph (para), and then run it once.

Try updating the live code below to recreate the finished example:
 */

const names = [
  "Chris",
  "Li Kang",
  "Anne",
  "Francesca",
  "Mustafa",
  "Tina",
  "Bert",
  "Jada",
];
const para1 = document.createElement("p");

// Add your code here

const chooseName = () => {
  const randomIndex = Math.floor(Math.random() * names.length);
  para1.textContent = `The chosen name is: ${names[randomIndex]}`;
};

// Call the function to execute it
chooseName();

// Don't edit the code below here!

const section1 = document.getElementById("fun1");

section1.appendChild(para1);
