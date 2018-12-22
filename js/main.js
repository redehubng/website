
// SCROLL CHANGE 

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("topnav").style.background = "rgba(0,0,0,0.8)";
        document.getElementById("topnav").style.borderBottom = "3px solid red";
        // document.getElementById("logo").style.fontSize = "25px";
    } else {
        document.getElementById("topnav").style.backgroundColor = "rgba(255,255,255,0)";
        document.getElementById("logo").style.fontSize = "35px";
    }
} 