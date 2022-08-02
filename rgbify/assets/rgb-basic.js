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

//Checks which selection is chosen in 'colors-dropdown' select list
var selectedColor = document.getElementById('colors-dropdown');
document.write('<p>' + selectedColor.value + '</p>');


