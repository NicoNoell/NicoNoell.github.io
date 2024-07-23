function onPageLoad(){
    setupCollapsibleContent();
}

function setupCollapsibleContent(){
    var coll = document.getElementsByClassName("ContinueReadingButton");

    for (var i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
          this.classList.toggle("active");
          var content = this.previousElementSibling;
          if (content.style.maxHeight) {
            content.style.maxHeight = null;
            this.innerText = "⮮ Continue reading ⮯";
          } else {
            content.style.maxHeight = content.scrollHeight + "px";
            this.innerText = "⮬ Minimize content ⮭";
          }
        });
      }
}