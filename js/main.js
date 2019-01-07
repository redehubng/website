// SCROLL CHANGE 

window.onscroll = function() { scrollFunction() };

// function scrollFunction() {
//     if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
//         document.getElementById("topnav").style.background = "rgba(0,0,0,0.8)";
//         document.getElementById("topnav").style.borderBottom = "3px solid red";
//         // document.getElementById("logo").style.fontSize = "25px";
//     } else {
//         document.getElementById("topnav").style.backgroundColor = "rgba(255,255,255,0)";
//         document.getElementById("logo").style.fontSize = "35px";
//     }
// }

//owl carousel function
$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop: true,
        nav: false,
        margin: 10,
        // stagePadding: 25,
        center: true,
        animateIn: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }

        }

    });
});