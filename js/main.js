// SCROLL CHANGE 

window.onscroll = function() { scrollFunction() };

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

//owl carousel function
$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        center: true,
        loop: true,
        nav: false,

        // stagePadding: 25,

        animateIn: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }

        }

    });
});