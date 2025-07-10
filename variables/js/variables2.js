/**
 * The final task for now — in this case you are provided with some existing code, which has two errors present in it. The results panel should be outputting the name Chris, and a statement about how old Chris will be in 20 years' time. How can you fix the problem and correct the output?
 *
 * Try updating the live code below to recreate the finished example:
 */

// Add your code here

let myName2 = "Default";
myName2 = "Chris";

let myAge = "42";


myAge = parseInt(myAge);


// Don't edit the code below here!
const variableSection2 = document.getElementById("variables2");
variableSection2.innerHTML = " ";
const para1 = document.createElement("p");
const para2 = document.createElement("p");
para1.textContent = myName2;
para2.textContent = `In 20 years, I will be ${myAge + 20}`;
variableSection2.appendChild(para1);
variableSection2.appendChild(para2);
