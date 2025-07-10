/**
 * Strings 2
In this task you are provided with two variables, quote and substring, which contain two strings. We would like you to:

Retrieve the length of the quote, and store it in a variable called quoteLength.
Find the index position where substring appears in quote, and store that value in a variable called index.
Use a combination of the variables you have and available string properties/methods to trim down the original quote to "I do not like green eggs and ham.", and store it in a variable called revisedQuote.
Try updating the live code below to recreate the finished example:
 */

const quote = "I do not like green eggs and ham. I do not like them, Sam-I-Am.";
const substring = "green eggs and ham";

let quoteLength = quote.length;
console.log(`The length of the quote is: ${quoteLength}`);

let index = quote.indexOf(substring)
console.log(`The index of the substring is: ${index}`);

let revisedQuote = quote.slice(0, index + substring.length)
revisedQuote = revisedQuote.trim() + "."; // Ensure it ends with a period
console.log(`The revised quote is: "${revisedQuote}"`);




// Add your code here

// Don't edit the code below here!
const section2 = document.getElementById("strings2");
const para2 = document.createElement("p");
para2.textContent = `The quote is ${quoteLength} characters long.`;
const para3 = document.createElement("p");
para3.textContent = revisedQuote;

section2.appendChild(para2);
section2.appendChild(para3);
