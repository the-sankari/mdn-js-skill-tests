/**
 * Loops 3
 * In this final task, you are provided with the following:
 * i — starts off with a value of 500; intended to be used as an iterator.
 * para — contains a reference to a paragraph, which will be used to report the results.
 * isPrime() — a function that, when passed a number, returns true if the number is a prime number, and false if not.
 *
 * You need to use a loop to go through the numbers 2 to 500 backwards (1 is not counted as a prime number), and run the provided isPrime() function on them. For each number that isn't a prime number, continue on to the next loop iteration. For each one that is a prime number, add it to the paragraph's textContent along with some kind of separator.
 *
 * You should use a type of loop that you've not used in the previous two tasks.
 *
 */

let limit = 500;
const para4 = document.createElement("p");

function isPrime(num) {
  for (let k = 2; k < num; k++) {
    if (num % k === 0) {
      return false;
    }
  }

  return true;
}

// Add your code here

for (let j = limit; j >= 2; j--) {
  if (isPrime(j)) {
    para4.textContent += `${j} `;
  }
}

// Don't edit the code below here!
const section3 = document.getElementById("loops3");
section3.appendChild(para4);
