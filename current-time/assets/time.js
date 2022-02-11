
setInterval(function(){
  let i = 5;
  const timer = setInterval(() => {
      var today = new Date();
      var day = today.getDay();
      var daylist = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
      // ("0" + (today.getMonth()+1)) makes it display this month, not the month before this current month.
      var date = today.getFullYear()+'-'+ ("0" + (today.getMonth()+1)).slice(-2) +'-'+ ("0" + today.getDate()).slice(-2);
      // today.get____()).slice(-2) forces it to show both digits. Without this it was just showing one place if <10 .
      var time = ("0" + today.getHours()).slice(-2) + ":" + ("0" + today.getMinutes()).slice(-2) + ":" + ("0" + today.getSeconds()).slice(-2)
      document.getElementById('curr_time').innerHTML = time;
      var dateTime = date+' at '+time;
      // daylist[day] gets today from the daylist, then represents it how it is written in the daylist list.
      document.getElementById("curr_time").innerHTML =  daylist[day] + ', ' + ' ' + dateTime ;

      i--;
      if (i < 0) {
          clearInterval(timer)
      }
  }, 1000);
});


















//~~~~~~~~~~~~~~~~ HOUR ANIMATION ONLY ~~~~~~~~~~~~~~~~~~~
// the element's id = "hour_anim"
setInterval(showHour, 1000);
function showHour() {
	let time = new Date();
  let hour = time.getHours();
	clock = "🕑";

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

 // ~~~~~~~~~ just the hour clock ~~~~~~~~~~
 //name the html div id="clock_anim"
  let curr_hour = clock;

  document.getElementById("hour_anim")
      .innerHTML = curr_hour;
    
    

}
showTime();

      













//~~~~~~~~~~~~~~~~ SUN & MOON ANIMATION ONLY ~~~~~~~~~~~~~~~~
// the element's id = "sun_moon"
// var f = ['🌑', '🌒', '🌓', '🌔', '🌕', '🌖', '🌗', '🌘'];

setInterval(showTime, 1000);
function showTime() {
	let time = new Date();
  let hour = time.getHours();
	sunMoon = "🌞";

  // if lessthan-or-equal-to b and greaterthan-or-equal-to a.
  if (hour <= 4 && hour >= 2) {
		sunMoon = "🌒";     //0 position
	}
  if (hour <= 7 && hour >= 5) {
		sunMoon = "🌓";     //5 position
	}
  if (hour <= 10 && hour >= 8) {
		sunMoon = "🌔";      //10
	}
  if (hour <= 13 && hour >= 11) {
		sunMoon = "🌕";     //30
	}
  if (hour <= 16 && hour >= 14) {
		sunMoon = "🌖";
	}
  if (hour <= 19 && hour >= 17) {
		sunMoon = "🌗";
	}
  if (hour <= 22 && hour >= 20) {
		sunMoon = "🌘";
	}
  if (hour == 23) {
		sunMoon = "🌑";
	}
  if (hour == 1) {
		sunMoon = "🌑";
	}

	if (hour == 0 || hour == 24) {
		sunMoon = "🎆";
	}

	hour = hour < 10 ? "0" + hour : hour;

	let currentTime = sunMoon;

	document.getElementById("sun_moon")
			.innerHTML = currentTime;


}
showTime();


