/**
 * In this task you need to add a new line to correct the value stored in the existing myName variable to your own name.
 * Try updating the live code below to recreate the finished example:
 *
 */

// Add your code here

let myName = "Kajol Sutra Dhar";

// Don't edit the code below here!
const variableSection1 = document.getElementById("variables1");
variableSection1.innerHTML = " ";
const para = document.createElement("p");
para.textContent = myName;
variableSection1.appendChild(para);
