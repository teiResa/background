var clocklist = ["🕐","🕑","🕒","🕓","🕔","🕕","🕖","🕗","🕘","🕙","🕚","🕛"];


setInterval(showTime, 1000);
function showTime() {
	let time = new Date();
	let min = time.getMinutes();
  let hour = time.getHours();
	clock = "🕑";

  // var numbers = ("0" + today.getMinutes()).slice(-2) + ":" + ("0" + today.getSeconds()).slice(-2)
  // document.getElementById('clock_anim').innerHTML = numbers;


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







// setInterval(function(){
//   let i = 5;
//  	 const timer = setInterval(() => {
//     // start of timer
//       var today = new Date();
// 			var time = ("0" + today.getHours()).slice(-2) + ":" + ("0" + today.getMinutes()).slice(-2) 
//       document.getElementById("clock_animation").innerHTML = time;
		  
//       var c = ["🕐","🕑","🕒","🕓","🕔","🕕","🕖","🕗","🕘","🕙","🕚","🕛"];

//       let min = time.getMinutes();
//       clock = "🕐";
    
//       if (min > 30) {
//           min -= 30;
//           clock = "🕒";
//       }
//       if (hour == 0) {
//           hr = 12;
//           am_pm = "AM";
//       }



//       // function loop() {
//       //     location.hash = c[Math.floor((Date.now()/100)%c.length)];
  
//       //     setTimeout(loop, 50);
//       // }
  
//       // loop();
		
		
// 			i--;
//       if (i < 0) {
//           clearInterval(timer)
//       }

//     // end of timer
//   }, 30000);
// });








