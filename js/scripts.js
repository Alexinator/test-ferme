/*!
 * Start Bootstrap - Creative v6.0.1 (https://startbootstrap.com/themes/creative)
 * Copyright 2013-2020 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-creative/blob/master/LICENSE)
 */
(function($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 72)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
        $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: 75
    });

    // Collapse Navbar
    var navbarCollapse = function() {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-scrolled");
        } else {
            $("#mainNav").removeClass("navbar-scrolled");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);

    // Magnific popup calls
    $('#portfolio').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    });
})(jQuery); // End of use strict


// values definitions
let map = new Map();
map.set("OL", "3");
map.set("CI", "4");
map.set("OR", "2");
map.set("BA", "5");

let mapName = new Map();
mapName.set("OL", "Olives");
mapName.set("CI", "Citrons");
mapName.set("OR", "Oranges");
mapName.set("BA", "Bananes");

loadInfos();

function loadInfos() {
    var element = $("#second");

    for (var key of map.keys()) {
        console.log("key: " + key)
        element.append("<option value=" + key + ">" + mapName.get(key) + " (" + map.get(key) + "€ / kilo)" + "</option>");
    }
}


var language = "";

function changeLanguage(current) {
    if (language != current.value) {
        language = current.value;
        if (language === "Français") {
            window.location.replace("./index.html");
        } else {
            window.location.replace("./index_en.html");
        }
    }
}

function calculer() {
    let first = document.getElementById("premier").value;
    let second = document.getElementById("second").value;
    console.log(first, second);

    if (isNaN(first)) {
        console.log("erreur")
        document.getElementById("errormessage").style.visibility = "visible";
        document.getElementById("premier").value = "";

        var el = document.getElementById("errormessage");
        var x = 1;

        setTimeout(function() {
            fade();
        }, 5000)

        function fade() {
            el.style.opacity = x;
            x = x - 0.05;
            console.log(x);

            if (x >= 0) {
                setTimeout(function() {
                    fade();
                }, 100)
            }
            return;
        }
        return;
    }

    let val = first * map.get(second);

    console.log(val);

    document.getElementById("value").innerHTML = val + "€"
}