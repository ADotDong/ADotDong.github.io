var second = 1000
var minute = second * 60
var hour = minute * 60
var day = hour * 24;

document.getElementById("submit").onclick = function(event){
  var inputMonth = document.getElementById("month").value
  var inputDay = parseInt(document.getElementById("day").value)
  var inputYear = parseInt(document.getElementById("year").value)
  var inputHour1 = parseInt(document.getElementById("hour1").value)
  var inputHour2 = parseInt(document.getElementById("hour2").value)
  var inputMinute1 = parseInt(document.getElementById("minute1").value)
  var inputMinute2 = parseInt(document.getElementById("minute2").value)
  var inputSecond1 = parseInt(document.getElementById("second1").value)
  var inputSecond2 = parseInt(document.getElementById("second2").value)
  document.getElementById("countdown").innerHTML = `Countdown to ${document.getElementById("topic").value}`
  
  var countDown = new Date(`${inputMonth} ${inputDay}, ${inputYear} ${inputHour1}${inputHour2}:${inputMinute1}${inputMinute2}:${inputSecond1}${inputSecond2}`).getTime()
var x = setInterval(function() {
  var now = new Date().getTime()
  var distance = countDown - now;
  document.getElementById('days').innerText = Math.floor(distance / (day))
  document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour))
 document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute))
 document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);
   }, second)

document.getElementById("month").reset();
  document.getElementById("day").reset();
  document.getElementById("year").reset();
  document.getElementById("hour1").reset();
  document.getElementById("hour2").reset();
  document.getElementById("minute1").reset();
  document.getElementById("minute2").reset();
  document.getElementById("second1").reset();
  document.getElementById("second2").reset();
}