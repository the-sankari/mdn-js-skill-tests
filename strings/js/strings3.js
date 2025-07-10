/**
 * Strings 3
In the next string task, you are given the same quote that you ended up with in the previous task, but it is somewhat broken! We want you to fix and update it, like so:

Change the casing to correct sentence case (all lowercase, except for upper case first letter). Store the new quote in a variable called fixedQuote.
In fixedQuote, replace "green eggs and ham" with another food that you really don't like.
There is one more small fix to do — add a period to the end of the quote, and save the final version in a variable called finalQuote.
Try updating the live code below to recreate the finished example:
 */

const quote1 = 'I dO nOT lIke gREen eGgS anD HAM';
const tolower = quote1.toLowerCase();

const fixedQuote = tolower.charAt(0).toUpperCase() + tolower.slice(1)
console.log(`The fixed quote is: "${fixedQuote}"`);

const foodIReallyDislike = 'broccoli';
const finalQuote1 = fixedQuote.replace('green eggs and ham', foodIReallyDislike) + '.';
console.log(`The final quote is: "${finalQuote1}"`);

// Add your code here

// Don't edit the code below here!
const section3 = document.getElementById('strings3');
const para4 = document.createElement('p');
para4.textContent = fixedQuote;
const para5 = document.createElement('p');
para5.textContent = finalQuote1;

section3.appendChild(para4);
section3.appendChild(para5);
    