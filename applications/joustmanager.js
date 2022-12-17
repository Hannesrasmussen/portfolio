var playBtn = document.getElementById("playbutton");
var instrct = document.getElementById("instructions");

playBtn.addEventListener("click",function(){
    

    var that = this;
    this.style.transition = "0.2s";
    instrct.style.transition = "0.2s";
    this.style.opacity = "0%";
    instrct.style.opacity = "0%";

    setTimeout(function(){

        if ((document.fullScreenElement && document.fullScreenElement !== null) ||    
   (!document.mozFullScreen && !document.webkitIsFullScreen)) {
    if (document.documentElement.requestFullScreen) {  
      document.documentElement.requestFullScreen();  
    } else if (document.documentElement.mozRequestFullScreen) {  
      document.documentElement.mozRequestFullScreen();  
    } else if (document.documentElement.webkitRequestFullScreen) {  
      document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);  
    }  
  } else {  
    if (document.cancelFullScreen) {  
      document.cancelFullScreen();  
    } else if (document.mozCancelFullScreen) {  
      document.mozCancelFullScreen();  
    } else if (document.webkitCancelFullScreen) {  
      document.webkitCancelFullScreen();  
    }  
  }  

        that.style.display = "none";
        instrct.style.display = "none";
        var app = new joust.system.Main();
        app.start();
    }, 500);
    
})

