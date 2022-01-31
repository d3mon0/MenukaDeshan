var icon = document.getElementById("icon");
var head = document.getElementById("head");
var logo = document.getElementById("logo");
var back = document.getElementById("back");

    icon.onclick = function(){
        document.body.classList.toggle("darkmod");
        if(document.body.classList.contains("darkmod")){
            icon.src = "img/sun.png";
            head.src = "img/logo3.png"
            logo.src = "img/redd.png"
            back.src = "img/pred.png"
            boy.src= "img/boy.png"
        }else{
            icon.src = "img/moon.png";
            head.src = "img/logoDARK.png"
            logo.src = "img/logoDARK.png"
            back.src = "img/pattern.png"
            boy.src= "img/boyp.png"
            }
    }
