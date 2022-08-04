// when button on remote clicked, light up a example div the button's colour.
// After that, have the buttons change the colour of the "glow around the whiteboard" (leds variable)


document.getElementById('btn-red').onclick = function() {
 document.getElementById('tempLight').style.backgroundColor = 'red';
 leds.style.boxShadow = "0px 0px 20px red";
}

document.getElementById("btn-green").onclick = function() {
 document.getElementById("tempLight").style.backgroundColor = 'green';
 leds.style.boxShadow = "0px 0px 20px green";
}

document.getElementById("btn-blue").onclick = function() {
 document.getElementById("tempLight").style.backgroundColor = 'blue';
 leds.style.boxShadow = "0px 0px 20px blue";
}

document.getElementById("btn-white").onclick = function() {
 document.getElementById("tempLight").style.backgroundColor = 'white';
 leds.style.boxShadow = "0px 0px 20px white";
}

//skipping rows 3-5 for now

document.getElementById("btn-yellow").onclick = function() {
 document.getElementById("tempLight").style.backgroundColor = 'yellow';
 leds.style.boxShadow = "0px 0px 20px yellow";
}

document.getElementById("btn-cyan").onclick = function() {
 document.getElementById("tempLight").style.backgroundColor = 'cyan';
 leds.style.boxShadow = "0px 0px 20px cyan";
}

document.getElementById("btn-magenta").onclick = function() {
 document.getElementById("tempLight").style.backgroundColor = 'magenta';
 leds.style.boxShadow = "0px 0px 20px magenta";
}


