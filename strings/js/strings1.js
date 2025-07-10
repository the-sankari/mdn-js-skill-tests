/**
 *  @file strings1.js
 * @description JavaScript code for the index.html file.
 * This file contains functions to manipulate strings and display results in the HTML.
 * Strings 1
In our first strings task, we start off small. You already have half of a famous quote inside a variable called quoteStart; we would like you to:

Look up the other half of the quote, and add it to the example inside a variable called quoteEnd.
Concatenate the two strings together to make a single string containing the complete quote. Save the result inside a variable called finalQuote.
You'll find that you get an error at this point. Can you fix the problem with quoteStart, so that the full quote displays correctly?

Try updating the live code below to recreate the finished example:

*/

// Add your code here

const quoteStart = "Don't judge each day by the harvest you reap, ";
const quoteEnd = "but by the seeds that you plant.";
const finalQuote = `${quoteStart}${quoteEnd}`;
// Don't edit the code below here!
const section1 = document.getElementById("strings1");
const para1 = document.createElement("p");
para1.textContent = finalQuote;
section1.appendChild(para1);
