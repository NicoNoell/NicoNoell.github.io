window.addEventListener('resize', setupCollapsibleContent, true);

var coll = document.getElementsByClassName("ContinueReadingButton");

function onPageLoad(){
    setAllCollapsablesToInactive();
    setupCollapsibleContent();
}

function setAllCollapsablesToInactive() {
    for (var i = 0; i < coll.length; i++) {
        coll[i].classList.add("inactive");
        coll[i].innerText = "▼ Continue reading ▼";
    }
}

function setupCollapsibleContent(){
    for (var i = 0; i < coll.length; i++) {
        coll[i].removeEventListener("click", onContinueReadingButtonClick);
        var content = coll[i].previousElementSibling;
        if (content.style.maxHeight){
            content.style.maxHeight = content.scrollHeight + "px";
        }
    }

    for (var i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", onContinueReadingButtonClick);
    }
}

function onContinueReadingButtonClick() {
    var content = this.previousElementSibling;
    if (content.style.maxHeight) {
        content.style.maxHeight = null;
        this.style.marginTop = "-40px";
        this.innerText = "▼ Continue reading ▼";
        this.classList.remove("active");
        this.classList.add("inactive");
    } else {
        content.style.maxHeight = content.scrollHeight + "px";
        this.style.marginTop = "20px";
        this.innerText = "▲ Minimize content ▲";
        this.classList.active = true;
        this.classList.remove("inactive");
        this.classList.add("active");
    }
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
    document.getElementById('TransitionHelper').className = 'AnimateTransition1';
    setTimeout(openPage => {window.open(pagename, "_self");}, 300);
}

function openPageWithoutAnimation(pagename){
    window.open(pagename, "_self");
}

function closeTransition(){
    document.getElementById('TransitionHelper').className = 'AnimateTransition2';
}