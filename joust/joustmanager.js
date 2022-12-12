var playBtn = document.getElementById("playbutton");
var instrct = document.getElementById("instructions");

playBtn.addEventListener("click",function(){
    var that = this;
    this.style.transition = "2s";
    instrct.style.transition = "2s";
    this.style.opacity = "0%";
    instrct.style.opacity = "0%";

    setTimeout(function(){
        that.style.display = "none";
        instrct.style.display = "none";
        var app = new joust.system.Main();
        app.start();
    }, 3000);
    
})

