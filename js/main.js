
$(document).ready(function() {

    // DROPDOWN MENU TOGGLE
    $('.navbar .dropdown-toggle').click(function(){
        $('#doDropdown').slideToggle(200);
    });



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