const revealSection = () => {
    ScrollReveal().reveal('#about', { reset: true, delay: 50 });
    ScrollReveal().reveal("#projects", { reset: true, delay: 50 });
    ScrollReveal().reveal(".project-container", { reset: true, delay: 50 });
    ScrollReveal().reveal("#skills", { reset: true, delay: 50 });
    ScrollReveal().reveal("#contact", { reset: true, delay: 50 });
}

const mainNavToggles = () => {
    $('.header-nav-button').on('click', function () {
        $('body').toggleClass('open');
    });

    $('.main-nav-anchors').on('click', function () {
        $('body').toggleClass('open');
    })
}

const init = () => {
    revealSection();
    mainNavToggles();
}

$(function() {
    init();
})

// $(function() {
//     if (isScrolledIntoView(document.getElementsByClassName('.project-container-img'))) {
//         console.log('hi');
//         $('.project-container-img img').toggleClass('hovered');
//     }
// })

// function isScrolledIntoView(el) {
//   var rect = el.getBoundingClientRect();
//   var elemTop = rect.top;
//   var elemBottom = rect.bottom;

//   // Only completely visible elements return true:
//   var isVisible = elemTop >= 0 && elemBottom <= window.innerHeight;
//   // Partially visible elements return true:
//   //isVisible = elemTop < window.innerHeight && elemBottom >= 0;
//   return isVisible;
// }