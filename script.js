//your JS code here. If required.
// script.js

// Get a reference to the element with id="level"
var targetElement = document.getElementById("level");

// Initialize the level count to 0
var levelCount = 1;

// Traverse up the DOM tree until the top-most parent (html element)
while (targetElement !== null && targetElement.parentElement !== null) {
    targetElement = targetElement.parentElement;
    levelCount++;
}

// Display the DOM level using alert
alert("The level of the element is: " + levelCount);
