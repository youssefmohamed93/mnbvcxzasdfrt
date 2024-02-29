// Show Menu Icon On Mobile Devices //
let menuIcon = document.querySelector("#menu-icon");
let navBar = document.querySelector(".navbar ul");

menuIcon.onclick = function () {
    menuIcon.classList.toggle("bx-x");
    navBar.classList.toggle("active");
};

// Owl Carousel //
$('.owl-carousel').owlCarousel({
    items: 3,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout: 2500,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1300:{
            items:1
        },
        1400:{
            items:2
        },
    }
});