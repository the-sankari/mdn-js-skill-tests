/**
 * Task 2
For our next functions-related task, you need to create a function that draws a rectangle on the provided <canvas> (reference variable canvas, context available in ctx), based on the five provided input variables:

x — the x coordinate of the rectangle.
y — the y coordinate of the rectangle.
width — the width of the rectangle.
height — the height of the rectangle.
color — the color of the rectangle.
You'll want to clear the canvas before drawing, so that when the code is updated in the case of the live version, you don't get lots of rectangles drawn on top of one another.

Try updating the live code below to recreate the finished example:
 */

const canvas1 = document.querySelector("#canvas1");
const ctx = canvas1.getContext("2d");

const x = 50;
const y = 60;
const width = 100;
const height = 75;
const color = "blue";

// Add your code here

const drawRectangle = (x, y, width, height, color) => {
  ctx.clearRect(0, 0, canvas1.width, canvas1.height); // Clear the canvas
  ctx.fillStyle = color; // Set the fill color
  ctx.fillRect(x, y, width, height); // Draw the rectangle
};

// Call the function to draw the rectangle
drawRectangle(x, y, width, height, color);
