window.onload += typeWriter;

var i = 0;
var txt = 'And welcome to my Website :)';
var speed = 50;

var sectionDifference = 50;

var lastHeight = 0;
var lastWidth = 0;
var updateBuffer = 0;

const sectionIDs = ["Section1", "Section2", "Section3"]  

// window.addEventListener('scroll', () => {
//     setSectionPositions(window.scrollY);
// }, false);

window.addEventListener('resize', setSectionHeights, true);

function onPageLoad() {
    document.getElementById('TransitionHelper').className = '';
    setTimeout(typeWriter, 1800)
    setSectionHeights();
}

function typeWriter() {
    if (i < txt.length) {
      document.getElementById("WelcomeToWebsite").innerHTML += txt.charAt(i);
      // const s1 = document.getElementById("Section1");
      //s1.style.transform = 'translateY(' + i * 5 + 'px)';
      i++;
      setTimeout(typeWriter, speed);
    }
  }

function setSectionHeights() {

    if (Math.abs(lastHeight - window.innerHeight) < updateBuffer && Math.abs(lastWidth - window.innerWidth) < updateBuffer){
        return;
    }

    lastHeight = window.innerHeight;
    lastWidth = window.innerWidth;

    // Reset heights
    for (var i=0; i < sectionIDs.length; i++) {
        document.getElementById(sectionIDs[i]).setAttribute("style", "height: auto; top:"+top+"px; margin-bottom: -200px; margin-top: 200px");
    }

    // Get heights of all Sections
    var heights = [];
    var biggest = 0;
    for (var i=0; i < sectionIDs.length; i++) {
        var height = document.getElementById(sectionIDs[i]).clientHeight + i*50;
        heights.push(height);
        if (height > biggest){
            biggest = height;
        }
    }

    // Set Css-Attributes accordingly
    for (var i=0; i < sectionIDs.length; i++) {
        var height = biggest - 50 * i;
        var top = Math.min(100 + i * 50, window.innerHeight - biggest + 50 * i);
        var marginTop = 50;
        if (i == 0){
            marginTop = 300;
        }
        document.getElementById(sectionIDs[i]).setAttribute("style", "height:" + height + "px; top:"+top+"px; margin-bottom: -70px; margin-top: "+marginTop+"px");
    }
    document.getElementById("FooterSection").setAttribute("style", "margin-top: 50px;");
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

function openPage(color, pagename){
    document.getElementById('TransitionHelper').style.backgroundColor = color;
    document.getElementById('TransitionHelper').className = 'AnimateTransition';
    setTimeout(openPage => {window.open(pagename, "_self");}, 500);
}