var clocklist = ["🕐","🕑","🕒","🕓","🕔","🕕","🕖","🕗","🕘","🕙","🕚","🕛"];


setInterval(showTime, 1000);
function showTime() {
	let time = new Date();
	let min = time.getMinutes();
	clock = "🕑";



  // if lessthan b and greater than a.
  //I realise the hour hand is the one moving. I don't think it matters. I might redo this by hours too.
  if (min < 3 && min > 0) {
		
		clock = "🕐";     //0 position
	}
  if (min < 8 && min > 3) {
		
		clock = "🕐";     //5 position
	}
  if (min < 13 && min > 8) {
		
		clock = "🕑";      //10
	}
  if (min < 18 && min > 13) {
		
		clock = "🕒";     //15
	}
  if (min < 23 && min > 18) {
		
		clock = "🕓";     //20
	}
  if (min < 28 && min > 23) {
		
		clock = "🕔";     //25
	}
  if (min < 33 && min > 28) {
		
		clock = "🕕";     //30
	}
  if (min < 38 && min > 33) {
		
		clock = "🕖";
	}
  if (min < 43 && min > 38) {
		
		clock = "🕗";
	}
  if (min < 48 && min > 43) {
		
		clock = "🕘";
	}
  if (min < 53 && min > 48) {
		
		clock = "🕙";
	}
  if (min < 58 && min > 53) {
		
		clock = "🕚";
	}
  if (min < 60 && min > 58) {
		
		clock = "🕚";
	}
  

	if (min == 0 || min == 60) {
		
		clock = "🕛";
	}

	min = min < 10 ? "0" + min : min;

	let currentTime = min + clock;

	document.getElementById("clock_anim")
			.innerHTML = currentTime;


}
showTime();



