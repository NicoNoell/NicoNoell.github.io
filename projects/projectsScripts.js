window.addEventListener('resize', setupCollapsibleContent, true);

var coll = document.getElementsByClassName("ContinueReadingButton");

function onPageLoad(){
    setAllCollapsablesToInactive();
    setupCollapsibleContent();
}

function setAllCollapsablesToInactive() {
    for (var i = 0; i < coll.length; i++) {
        coll[i].classList.add("inactive");
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
        this.innerText = "⮮ Continue reading ⮯";
        this.classList.remove("active");
        this.classList.add("inactive");
    } else {
        content.style.maxHeight = content.scrollHeight + "px";
        this.style.marginTop = "20px";
        this.innerText = "⮬ Minimize content ⮭";
        this.classList.active = true;
        this.classList.remove("inactive");
        this.classList.add("active");
    }
}