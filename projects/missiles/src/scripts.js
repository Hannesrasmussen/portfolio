const background = document.getElementById("filter");
const content = document.getElementById("content");
const cover = document.getElementById('album-element-cover');

function init() {
    content.addEventListener("mousemove", (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const offsetX = e.clientX - rect.left;
        const offsetY = e.clientY - rect.top;
        
        background.style.backgroundPositionX = -offsetX / 35 + "px";
        background.style.backgroundPositionY = -offsetY / 35 + "px";
    });
}

window.onload = init();