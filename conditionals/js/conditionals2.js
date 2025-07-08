/**
 * @file conditionals2.js
 * @description JavaScript code for the index.html file.
 * Conditionals 2
 * For this task you are given three variables:
 * machineActive — contains an indicator of whether the answer machine is switched on or not (true/false)
 * score — Contains your score in an imaginary game. This score is fed into the answer machine, which provides a response to indicate how well you did.
 * response — begins uninitialized, but is later used to store a response that will be printed to the output panel
 * You need to create an if...else structure that checks whether the machine is switched on and puts a message into the response variable if it isn't, telling the user to switch the machine on.
 *
 * Inside the first if...else, you need to nest another if...else that puts appropriate messages into the response variable depending on what the value of score is — if the machine is turned on. The different conditional tests (and resulting responses) are as follows:
 *
 * Score of less than 0 or more than 100 — "This is not possible, an error has occurred.
 * Score of 0 to 19 — "That was a terrible score — total fail!
 * Score of 20 to 39 — "You know some things, but it\'s a pretty bad score. Needs improvement."
 * Score of 40 to 69 — "You did a passable job, not bad!"
 * Score of 70 to 89 — "That\'s a great score, you really know your stuff."
 * Score of 90 to 100 — "What an amazing score! Did you cheat? Are you for real?"
 *
 * Try updating the live code below to recreate the finished example. After you've entered your code, try changing machineActive to true, to see if it works.
 *
 * Please note that, for the scope of this exercise, the Your score is __ statement will remain on the screen regardless of the machineActive's value.
 */

const conditionals2Div = document.getElementById("conditionals2");

let response2;
let score = 4;
let machineActive = true;

// Check if the machine is active
if (!machineActive) {
  // If the machine is not active, set the response accordingly
  response2 = "Please switch on the machine to get a response.";
} else {
  // If the machine is active, check the score
  if (score < 0 || score > 100) {
    response2 = "This is not possible, an error has occurred.";
  } else if (score >= 0 && score <= 19) {
    response2 = " That was terrible score - total fail!";
  } else if (score >= 20 && score <= 39) {
    response2 =
      "You know some things, but it's a pretty bad score. Needs improvement";
  } else if (score >= 40 && score <= 69) {
    response2 = "You did a passable job, not bad!";
  } else if (score >= 70 && score <= 89) {
    response2 = "That's a great score, you really know your stuff.";
  } else if (score >= 90 && score <= 100) {
    response2 = "What an amazing score! Did you cheat? Are you for real?";
  }
}

const conditionals2Result = document.createElement("p");

conditionals2Result.innerHTML = `<h2>Conditionals 2 Result</h2><p>${response2}</p>`;

conditionals2Div.appendChild(conditionals2Result);

// Log the results to the console for debugging
console.log("Conditionals 2 Response:", response2);
console.log("Machine Active:", machineActive);
console.log("Score:", score);

// Display the score regardless of machineActive
const scoreDisplay = document.createElement("p");
scoreDisplay.innerHTML = `<h3>Your Score</h3><p>${score}</p>`;
conditionals2Div.appendChild(scoreDisplay);

// Display the machine status
const machineStatus = document.createElement("p");
machineStatus.innerHTML = `<h3>Machine Status</h3><button id="machineStatus">${
  machineActive ? "Active" : "Inactive"
}</button>`;
conditionals2Div.appendChild(machineStatus);
