window.onload += typeWriter;

var i = 0;
var txt = 'And welcome to my Website :)';
var speed = 50;

// window.addEventListener('scroll', () => {
//     setSectionPositions(window.scrollY);
// }, false);

function onPageLoad() {
    setTimeout(typeWriter, 1800)
}

function typeWriter() {
    if (i < txt.length) {
      document.getElementById("WelcomeToWebsite").innerHTML += txt.charAt(i);
      const s1 = document.getElementById("Section1");
      //s1.style.transform = 'translateY(' + i * 5 + 'px)';
      i++;
      setTimeout(typeWriter, speed);
    }
  }

function setSectionPositions(scroll) {
    const s1 = document.getElementById("Section1");
    s1.style.transform = 'translateY(' + scroll * -1 + 'px)';
    const s2 = document.getElementById("Section2");
    s2.style.transform = 'translateY(' + scroll * -2 + 'px)';
    const s3 = document.getElementById("Section3");
    s3.style.transform = 'translateY(' + scroll * -3 + 'px)';
}

function scrollToTop(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
}

function smoothScroll(id){
    document.getElementById(id).scrollIntoView({
        behavior: 'smooth'
    });
}