/**
 * @file conditionals3.js
 * @description JavaScript code for the index.html file.
 * Conditionals 3
For the final task you are given four variables:

machineActive — contains an indicator of whether the login machine is switched on or not (true/false).
pwd — Contains the user's login password.
machineResult — begins uninitialized, but is later used to store a response that will be printed to the output panel, letting the user know whether the machine is switched on.
pwdResult — begins uninitialized, but is later used to store a response that will be printed to the output panel, letting the user know whether their login attempt was successful.
We'd like you to create an if...else structure that checks whether the machine is switched on and puts a message into the machineResult variable telling the user whether it is on or off.

If the machine is on, we also want a second conditional to run that checks whether the pwd is equal to cheese. If so, it should assign a string to pwdResult telling the user they logged in successfully. If not, it should assign a different string to pwdResult telling the user their login attempt was not successful. We'd like you to do this in a single line, using something that isn't an if...else structure.

Try updating the live code below to recreate the finished example:


 */






let machineActiveC3 = true;
let pwd = 'cheese';

let machineResult;
let pwdResult;

// Add your code here

if (!machineActiveC3) {
    machineResult = "The machine is switched off.";
} else {
    machineResult = "The machine is switched on.";
    pwdResult = (pwd === 'cheese') ? "Login successful!" : "Login failed. Incorrect password.";
}


// Log the results to the console for debugging
console.log("Machine Result:", machineResult);
console.log("Password Result:", pwdResult);

// Don't edit the code below here!

const conditionals3Div = document.getElementById("conditionals3");
const conditionals3Result = document.createElement("h2");
conditionals3Result.textContent = "Conditionals 3 Result";
conditionals3Div.appendChild(conditionals3Result);

// Check if the machine is active
let para1 = document.createElement('p');
let para2 = document.createElement('p');

para1.textContent = machineResult;
para2.textContent = pwdResult;

conditionals3Div.appendChild(para1);
conditionals3Div.appendChild(para2);
    