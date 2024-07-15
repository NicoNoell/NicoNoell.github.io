window.onload += typeWriter;

var i = 0;
var txt = 'And welcome to my Website :)';
var speed = 50;

window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
  }, false);

function onPageLoad() {
    setTimeout(typeWriter, 1800)
}

function typeWriter() {
    if (i < txt.length) {
      document.getElementById("WelcomeToWebsite").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }