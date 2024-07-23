function onPageLoad(){
    setupCollapsibleContent();
}

function setupCollapsibleContent(){
    var coll = document.getElementsByClassName("ContinueReadingButton");

    for (var i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
          var content = this.previousElementSibling;
          if (content.style.maxHeight) {
            content.style.maxHeight = null;
            this.innerText = "⮮ Continue reading ⮯";
            this.classList.remove("active");
          } else {
            content.style.maxHeight = content.scrollHeight + "px";
            this.innerText = "⮬ Minimize content ⮭";
            this.classList.active = true;
            this.classList.add("active");
          }
        });
      }
}