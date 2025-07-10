/**
 * Strings 4
In the final string task, we have given you the name of a theorem, two numeric values, and an incomplete string (the bits that need adding are marked with asterisks (*)). We want you to change the value of the string as follows:

Change it from a regular string literal into a template literal.
Replace the four asterisks with four template literal placeholders. These should be:
The name of the theorem.
The two number values we have.
The length of the hypotenuse of a right-angled triangle, given that the two other side lengths are the same as the two values we have. You'll need to look up how to calculate this from what you have. Do the calculation inside the placeholder.
Try updating the live code below to recreate the finished example:
 */

const theorem = "Pythagorean theorem";

const a = 5;
const b = 8;

let myString =
  "Using *, we can work out that that if the two shortest sides of a right-angled triangle have lengths of * and *, the length of the hypotenuse is *.";
myString = myString.replace("*", theorem)
  .replace("*", a)
  .replace("*", b)
  .replace("*", Math.sqrt(a * a + b * b).toFixed(2)); // Calculate hypotenuse and format to 2 decimal places

// Don't edit the code below here!
const section4 = document.getElementById("strings4");
const para6 = document.createElement("p");
para6.textContent = myString;

section4.appendChild(para6);
