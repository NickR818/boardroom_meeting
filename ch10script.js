// Practice exercise for Chapter 10
"use strict";
// Variable consisting of a new date object using current date and time
let todaysDate = new Date();
// Grab the value of the current month from that date
let currMonth = todaysDate.getMonth();
// Upgrade todaysDate to a string in local browser format
todaysDate = todaysDate.toLocaleDateString();
// Write the value of todaysDate to the web document
document.getElementById("today").textContent = todaysDate;
// See if we are in the special month
if(currMonth === 9) {
	document.getElementById("special").textContent = "Happy Halloween!";
} else if(currMonth === 6) {
	document.getElementById("special").textContent = "It's 4th of July!";
} else if(currMonth === 11) {
	document.getElementById("special").textContent = "Merry Christmas!";
} else {
	document.getElementById("special").textContent = "It's an ordinary month...";
}
// Array variable containing the roster of attendees
let roster = new Array("Tammy", "Hector", "Amanda", "Brian", "Greg", "Jody", "Jake", "Samantha");
// Let's sort the array in alphabetical order
roster.sort();
// Variable that will collect all of the loop HTML info
let rosterHTML = "";
// Loop through the roster array, use the counter variable as the index and add a line break after each value
for(let x = 0; x < roster.length; x++) {
	rosterHTML += roster[x] + "<br>";
}// end of the loop
// When the loop is done, write the value of rosterHTML to the document
document.getElementById("attendance").innerHTML = rosterHTML
// Variable to hold a random number that works with the array's length
let rando = Math.floor(Math.random() * roster.length);
// Write a random choice from the roster to the document
document.getElementById("coffee").textContent = roster[rando];