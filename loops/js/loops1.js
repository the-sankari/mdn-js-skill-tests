/**
 * Loops 1
In our first looping task we want you to start by creating a simple loop that goes through all the items in the provided myArray and prints them out on the screen inside list items (i.e., <li> elements), which are appended to the provided list.
 */

const myArray = ["tomatoes", "chick peas", "onions", "rice", "black beans"];
const list = document.createElement("ul");

// Add your code here
for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
  const listItem = document.createElement("li");
  listItem.textContent = element;
  list.appendChild(listItem);
  // Log the element to the console
  console.log(element);
}

// Don't edit the code below here!

const section1 = document.querySelector("#loops1");
section1.appendChild(list);
