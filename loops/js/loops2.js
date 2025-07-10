/**
 * Loops 2
In this next task, we want you to write a simple program that, given a name, searches an array of objects containing names and phone numbers (phonebook) and, if it finds the name, outputs the name and phone number into the paragraph (para) and then exits the loop before it has run its course.

If you haven't read about objects yet, don't worry! For now, all you need to know is how to access a member-value pair. You can read up on objects in the JavaScript object basics tutorial.

You are given three variables to begin with:

name — contains a name to search for
para — contains a reference to a paragraph, which will be used to report the results
phonebook - contains the phonebook entries to search.
You should use a type of loop that you've not used in the previous task.
 */

const name = "Mustafa";
const para = document.createElement("p");
const para2 = document.createElement("p");

const phonebook = [
  { name: "Chris", number: "1549" },
  { name: "Li Kang", number: "9634" },
  { name: "Anne", number: "9065" },
  { name: "Francesca", number: "3001" },
  { name: "Mustafa", number: "6888" },
  { name: "Tina", number: "4312" },
  { name: "Bert", number: "7780" },
  { name: "Jada", number: "2282" },
];

// Loop through the phonebook array
for (let i = 0; i < phonebook.length; i++) {
  // Check if the current entry's name matches the search name
  if (phonebook[i].name === name) {
    // If a match is found, set the paragraph text and exit the loop
    para.textContent = `Found ${name} with number ${phonebook[i].number}.`;
    console.log(`Found ${name} with number ${phonebook[i].number}.`); // Log to console for debugging
    break; // Exit the loop once the name is found
  }
}
let i = 0; // Initialize the loop counter
while (i < phonebook.length) {
  // Check if the current entry's name matches the search name
  if (phonebook[i].name === name) {
    // If a match is found, set the paragraph text and exit the loop
    para2.textContent = `Found ${name} with number ${phonebook[i].number}.`;
    console.log(`Found ${name} with number ${phonebook[i].number}.`); // Log to console for debugging
    break; // Exit the loop once the name is found
  }
  i++;
}

do{
    // Check if the current entry's name matches the search name
    if (phonebook[i].name === name) {
      // If a match is found, set the paragraph text and exit the loop
      para2.textContent = `Found ${name} with number ${phonebook[i].number}.`;
      console.log(`Found ${name} with number ${phonebook[i].number}.`); // Log to console for debugging
      break; // Exit the loop once the name is found
    }
    i++;
}while (i < phonebook.length);


// Add your code here

// Don't edit the code below here!
const section2 = document.querySelector("#loops2");
section2.appendChild(para);
section2.appendChild(para2);
