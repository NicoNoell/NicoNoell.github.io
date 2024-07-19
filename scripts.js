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
    setTimeout(openPage => {window.open(pagename, "_self");}, 300);
}