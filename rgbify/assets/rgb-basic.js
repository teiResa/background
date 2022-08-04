// rgb-basic by Theresa Balsdon (2022-08-02)

/*
*
*  The colours flash through rgb sets like 
*  they would in RGB strip lights "flash?" 
*  effect.


https://css-tricks.com/getting-javascript-to-talk-to-css-and-sass/

*
*/

// document.write('<p>' + 'hello' + '</p>');

// function rgbLed(event){
//  // const el = event.target;
//  // el.setAttribute('style', 'color: blue');
// }

// var ledColor = yellow;

// function colorChange(event){
//  // const colorLed = document.querySelector('.rgb-effect');
//  // colorLed.classList.add('');

//   const el = event.target;
//   el.setAttribute('style', '$rgb-set-color: ledColor');


// }

// var selectedColor;
// var checkColor;

// function checkColor() {
//  // references to 'colors-dropdown' select list
// document.getElementById('colors-dropdown');

// }

// checkColor();

// const sel = document.querySelector("option");
const leds = document.querySelector(".rgb-effect");  //the box's text
// const glow = document.getElementsByClassName("rgb-effect"); //the box's glowing border
const btn = document.querySelector("button");  //when the button named "changer" is clicked
var reminder;

// btn.addEventListener("click", function(){
//  name.style.color = "selectedColor";
// })


var selectedColor = document.getElementById('colors-dropdown');
// var effectColor = selectedColor.id;


// when dropdown selection, match border to selected colour
selectedColor.addEventListener("change", colorRef);
      function colorRef() {
       // this works...
       // document.write('<p>' + selectedColor.value + '</p>');
       // leds.style.color = "blue";

       // This all updates the words. Now to figure out the box-shadow.
       if (selectedColor.value == "red"){
        leds.style.color = "red";  //the text
        // leds.style.boxShadow = "red";  //the glowing border
        // leds.style.setProperty('box-shadow', 'red', 'important');
        leds.style.boxShadow = "0px 0px 20px red"; //this just changes the colour. If it changes the shape of the glow, match it to the stylesheet.
       } else if (selectedColor.value == "green"){
        leds.style.color = "green";
        // leds.style.boxShadow = "green";  //the glowing border
        leds.style.boxShadow = "0px 0px 20px green"; //this just changes the colour. If it changes the shape of the glow, match it to the stylesheet.
       } else if (selectedColor.value == "blue"){
        leds.style.color = "blue";
        leds.style.boxShadow = "0px 0px 20px blue"; //this just changes the colour. If it changes the shape of the glow, match it to the stylesheet.
       } else if (selectedColor.value == "default") {
        leds.style.color = '#ff44CC';
        leds.style.boxShadow = "0px 0px 20px #ff44CC"; //this just changes the colour. If it changes the shape of the glow, match it to the stylesheet.
       } else {
        alert("Uh-oh, did you forget to select a colour?");
       }

       


       // if (selectedColor == "red"){
       //  effectColor = '#F00';
       // } else if (selectedColor == "green"){
       //  effectColor = '#0F0';
       // } else if (selectedColor == "blue"){
       //  effectColor = '#00F';
       // } else {
       //  effectColor = '#ff44CC';
       // }
      };   //end if colorRef()


btn.addEventListener("click", colorRef);

// works...
// document.write('<p>' + selectedColor.value + '</p>');
// document.write('<p>' + selectedColor.value + '</p>');




//Checks which selection is chosen in 'colors-dropdown' select list
// var selectedColor = document.getElementById('colors-dropdown');
// document.write('<p>' + selectedColor.value + '</p>');

// when button is clicked, border changes colour
// btn.addEventListener("click", changeColor);
//       function changeColor() {
//         leds.style.color = "blue";
// }


 
