const body = document.body;
const header = document.getElementById("header");
const aboutElem = document.getElementById("about");
const extras = document.getElementsByClassName("extras-img");
const projects = document.getElementsByClassName("project");

const popupdarkness = document.getElementById("popup-container");
const popupimg = document.getElementById("popup-img");

const yearElems = document.getElementsByClassName("year");
const date = new Date();


var previousY = window.scrollY;
var percentage;



// Callbacks
function visibleHeader() {
    header.style.opacity = "100%";
}

function init() {
    
    for (i = 0; i < yearElems.length; i++) {
        yearElems[i].innerHTML = date.getFullYear();
    }

    // Event Listeners:
    header.addEventListener("mouseover",visibleHeader)

    body.addEventListener("mousemove", (e) => {
        body.style.backgroundPositionX = -e.offsetX + "px";
        body.style.backgroundPositionY = -e.offsetY + "px";
    });

    for (let i = 0; i < projects.length; i++) {
        if (projects[i].dataset.href == "") {
            projects[i].style.cursor = "default";
        } else {
            projects[i].style.backgroundColor = "rgb(7,7,7)";
            projects[i].addEventListener("click",function(e){
                window.open(e.currentTarget.dataset.href)
                
            })
        }

        projects[i].addEventListener("click",function(e){
            if (e.currentTarget.dataset.href == "") {
                return;
            } else {
                window.open(e.currentTarget.dataset.href)
            }
        })
    }

    // Other:

    setInterval(() => {
        if (window.innerWidth < 800) {
            header.style.display = "flex";
            popupdarkness.style.display = "none";
            for (i = 0; i < extras.length; i++) {
                extras[i].removeEventListener("click", showImage);
            }
        } else {
            for (i = 0; i < extras.length; i++) {
                extras[i].addEventListener("click", showImage)
            }
        }
    }, 1000);

    body.addEventListener("mousemove", (e) => {
        body.style.backgroundPositionX = -e.offsetX + "px";
        body.style.backgroundPositionY = -e.offsetY + "px";
      });


}

// Night mode!
function lightOrNight() {
    let hours = new Date().getHours()
    let isDayTime = hours > 6 && hours < 17;

    
    if (isDayTime) {
        // If the user has dark mode.
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return
        }
        
        // Otherwise:
        document.getElementsByTagName("html")[0].style.filter = "invert()";
        document.getElementsByTagName("html")[0].style.background = "rgb(255,255,255)";

        for (i = 0; i < document.getElementsByTagName("img").length; i++) {
            document.getElementsByTagName("img")[i].style.filter = "grayscale()";
        }
    }
}


function showImage(e) {
    popupdarkness.style.display = "block";
    popupimg.src = e.target.src;
    header.style.display = "none";
    
    popupdarkness.addEventListener("click",() => {
    header.style.display = "flex";
    popupdarkness.style.display = "none";
    })
}

function clickProject(e) {
    
}

function scrollFunction() {

    // Check if mobile, cuz it doesnt work there.

    if (window.innerWidth < 800) {
        header.style.opacity = "100%";
        return
    } else {
        percentage = Math.round(window.scrollY * 0.1)
        if (window.scrollY > previousY) {
            header.style.opacity = "5%";
        } else if (window.scrollY < previousY){
            header.style.opacity = "100%";
        }
        previousY = window.scrollY;
    }

    
}

addEventListener("resize", () => {
    if (window.innerWidth < 800) {
        header.style.opacity = "100%";
        return
    } else {
        let y;
        clearTimeout(y);
        let x = $('#site-landing');
        
        x[0].style.transition = "0.4s";
        x[0].style.opacity = "0%";
        
        y = setTimeout(() => {
            x[0].style.opacity = "100%";
            x[0].style.transition = "0.4s";
        }, 1000);
    }
    
    $('#site-landing').polygonizr({
        canvasWidth: $("body").width(),
        canvasHeight: $("body").height(),
    })
});

$('#site-landing').polygonizr({
    numberOfNodes: 60,
    nodeEase: 'linear',
    duration: 10,
    // If set to true, the animation will rotate. Default: false
    node3dRotate: false,
    // If node3dRotate is set to true, the following option indicate if rotation should pause between n restNodeMovements. Default: 1
    node3dRotateOnNthNodeMovement: 6,
    // If node3dRotate is set to true, the following option indicate the alpha of the nodes at the far end of the rotation, creating depth. Default: 0.1
    node3dRotateDepthAlpha: 0.8,
    // If node3dRotate is set to true, the following option indicates the ease mode of each node movement (linear, easeIn, easeOut, easeInOut, accelerateDecelerate). Default: linear
    node3dRotatEase: "linear",
    // If node3dRotate is set to true, the following option indicate the axis on the canvas around which the animation will rotate (median, center, left, right). Default: center
    node3dRotateAxis: "center",

    // Indicates the fill color's alpha level (1-0). Default: 0.5
    nodeFillAlpha: 0.05,
    // Indicates the alpha level (1-0) of the line drawn between connected nodes. Default: 0.5
    nodeLineAlpha: 0.05,
    // Indicates the alpha level (1-0) of each node's "dot". Default: 1.0
    nodeDotAlpha: 0.05,

    // Indicates the width of the canvas on which to paint each node. Default: $(this).width()
    canvasWidth: $(this).width(),
    // Indicates the height of the canvas on which to paint each node. Default: $(this).height();
    canvasHeight: $(this).height(),

    // Indicate the CSS z-index property by which to specify the stack order of the canvas. Default: "auto"
    canvasZ: "1"
});

window.onscroll = scrollFunction;
window.onload = init;