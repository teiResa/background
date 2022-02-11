var clocklist = ["🕐","🕑","🕒","🕓","🕔","🕕","🕖","🕗","🕘","🕙","🕚","🕛"];


setInterval(showHour, 1000);
function showHour() {
	let time = new Date();
  let hour = time.getHours();
	clock = "🕑";


  //~~~~~~~~~~~~~~~~ HOUR ANIMATION ONLY ~~~~~~~~~~~~~~~~~~~
  // if lessthan b and greater than a.
  //I realise the hour hand is the one moving. I don't think it matters. I might redo this by hours too.
  
  if (hour == 0 || hour == 12 || hour == 24) {
		clock = "🕛";     //1 position
	}
  if (hour == 1 || hour == 13 ) {
		clock = "🕐";     //1 position
	}
  if (hour == 2 || hour == 14 ) {
		clock = "🕑";      //10
	}
  if (hour == 3 || hour == 15 ) {
		clock = "🕒";     //15
	}
  if (hour == 4 || hour == 16 ) {
		clock = "🕓";     //20
	}
  if (hour == 5 || hour == 17) {
		clock = "🕔";     //25
	}
  if (hour == 6 || hour == 18 ) {
		clock = "🕕";     //30
	}
  if (hour == 7 || hour == 19 ) {
		clock = "🕖";
	}
  if (hour == 8 || hour == 20 ) {
		clock = "🕗";
	}
  if (hour == 9 || hour == 21 ) {
		clock = "🕘";
	}
  if (hour == 10 || hour == 22 ) {
		clock = "🕙";
	}
  if (hour == 11 || hour == 23 ) {
		clock = "🕚";
	}
  
  

	

	hour = hour < 10 ? "0" + hour : hour;

	let currentHour = hour + clock;

	document.getElementById("hour_anim")
			.innerHTML = currentHour;


 // ~~~~~~~~~ just the hour clock ~~~~~~~~~~
 //name the html div id="clock_anim"
  let curr_hour = clock;

  document.getElementById("hour_clock")
      .innerHTML = curr_hour;
    
    

}
showTime();









