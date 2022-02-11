// var today = new Date();
// var day = today.getDay();
// var daylist = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
// var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
// var dateTime = date+' at '+time;

// // document.getElementById("curr_time").innerHTML = dateTime + ' <br> Day: ' + daylist[day];
// document.getElementById("curr_time").innerHTML = 'For me it is currently ' + daylist[day] + ' ' + dateTime ;



setInterval(function(){
  let i = 5;
  const timer = setInterval(() => {
      var today = new Date();
      var day = today.getDay();
      var daylist = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
      // ("0" + (today.getMonth()+1)) makes it display this month, not the month before this current month.
      var date = today.getFullYear()+' - '+ ("0" + (today.getMonth()+1)).slice(-2) +' - '+ ("0" + today.getDate()).slice(-2);
      // today.get____()).slice(-2) forces it to show both digits. Without this it was just showing one place if <10 .
      var time = ("0" + today.getHours()).slice(-2) + ":" + ("0" + today.getMinutes()).slice(-2) + ":" + ("0" + today.getSeconds()).slice(-2)
      document.getElementById('curr_time').innerHTML = time;
      var dateTime = date+' at '+time;
      // daylist[day] gets today from the daylist, then represents it how it is written in the daylist list.
      document.getElementById("curr_time").innerHTML = 'For me it is currently ' + daylist[day] + ' ' + dateTime ;

      i--;
      if (i < 0) {
          clearInterval(timer)
      }
  }, 1000);
});

      