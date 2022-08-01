// Javascript & JQuery textbook pg 46

var today = new Date();
var hourNow = today.getHours();
var greeting;

//Display the appropriate greeting based on current hour. Hour is gathered by hourNow
if (hourNow > 18) {
 greeting = 'Good Evening!';
} else if (hourNow > 12) {
 greeting = 'Good Afternoon!';
} else if (hourNow > 0) {
 greeting = 'Good Afternoon!';
} else {
 greeting = 'Welcome!';
}

document.write('<h3>' + greeting + '</h3>');