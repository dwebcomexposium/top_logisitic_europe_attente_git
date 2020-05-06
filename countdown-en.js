// COUNTDOWN

var countDownDate = new Date("Sept 23, 2020 09:00:00").getTime();

var x = setInterval(function() {
var now = new Date().getTime();
var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML =
  "<p class='nombrecountdown'><span class='chiffrecountdown'>" + days + "</span> <span class='textcountdown'> Days </span> </p> <p class='deuxpoint'>:</p>" + 
  "<p class='nombrecountdown'><span class='chiffrecountdown'>" + hours + "</span> <span class='textcountdown'> Hours </span> <p class='deuxpoint'>:</p>" + 
  "<p class='nombrecountdown'><span class='chiffrecountdown'>" + minutes + "</span> <span class='textcountdown'> Minutes </span> <p class='deuxpoint'>:</p>" +
  "<p class='nombrecountdown'><span class='chiffrecountdown'>" + seconds + "</span> <span class='textcountdown'> Seconds </span>" ;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);