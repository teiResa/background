// var f = ['🌑', '🌒', '🌓', '🌔', '🌕', '🌖', '🌗', '🌘'];

setInterval(showTime, 1000);
function showTime() {
	let time = new Date();
  let hour = time.getHours();
	sunMoon = "🌞";

  // if lessthan b and greater than a.
  //I realise the hour hand is the one moving. I don't think it matters. 
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


