window.onload += typeWriter;

var i = 0;
var txt = 'And welcome to my Website :)';
var speed = 50;

function onPageLoad() {
    setTimeout(typeWriter, 1000)
}

function typeWriter() {
    if (i < txt.length) {
      document.getElementById("WelcomeToWebsite").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }