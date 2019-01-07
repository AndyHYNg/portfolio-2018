const revealSection = () => {
    ScrollReveal().reveal('#about', { reset: true, delay: 50 });
    ScrollReveal().reveal(".project-container", { reset: true, delay: 50 });
    ScrollReveal().reveal("#skills", { reset: true, delay: 50 });
    ScrollReveal().reveal("#contact", { reset: true, delay: 50 });
}

// const smoothScroll = () => {
//     $(".main-nav-anchors").smoothScroll({speed: 500});
//     $(".down-arrow").smoothScroll({ speed: 500 });
// }

const mainNavToggles = () => {
    $('.header-nav-button').on('click', function () {
        $('body').toggleClass('open');
    });

    $('.header-nav-button').on('touch', function () {
        $('body').toggleClass('open');
    });

    $('.main-nav-anchors').on('click', function () {
        $('body').toggleClass('open');
    })

    $('.main-nav-anchors').on('touch', function () {
        $('body').toggleClass('open');
    })
}

// const triggerFocus = () => {
//     $('.flip').trigger("focus");
// }

const init = () => {
    revealSection();
    mainNavToggles();
    // triggerFocus();
    // smoothScroll();
}

$(function() {
    init();
})