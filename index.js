const header = document.getElementById("header");
const aboutElem = document.getElementById("about");
const logo = document.getElementById("logo");
var projects = document.getElementsByClassName("project");
var popup = document.getElementById("popup-message");
var popupBtn = document.getElementById("popup-button");


var previousY = window.scrollY;
var percentage;

// Event Listeners:
header.addEventListener("mouseover",visibleHeader)
logo.addEventListener("click",goUp)
for (i = 0; i < projects.length; i++){
    projects[i].addEventListener("click",(e)=>{
        if(e.currentTarget.dataset.adress){
            window.open(e.currentTarget.dataset.adress)
        } else {
            popup.style.opacity = "100%";
            popup.style.pointerEvents = "all";
            
        }
    })
}
popupBtn.addEventListener("click",function(){
    popup.style.opacity = "0%";
    popup.style.pointerEvents = "none";
})

// Callbacks
function visibleHeader() {
    header.style.opacity = "100%";
}

function goUp() {
    window.scrollBy({
        top: -100000,
        behavior: 'smooth'
      });
}

function scrollFunction() {
    percentage = Math.round(window.scrollY * 0.1)
    if (window.scrollY > previousY) {
        header.style.opacity = "5%";
    } else if (window.scrollY < previousY){
        header.style.opacity = "100%";
    }
    previousY = window.scrollY;
}



window.onscroll = scrollFunction;