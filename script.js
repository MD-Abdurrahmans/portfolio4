
// ========================== Change navbar style on scroll  =======================

$(window).scroll(function () {
  if ($(this).scrollTop() > 50) {
    $('.navbar').addClass('sticky');
  } else {
    $('.navbar').removeClass('sticky');
  }
});

// ========================== navbar Nav-link click shwo border bottom js  =======================
$(document).ready(function () {
  $('.navbar-nav .nav-link').on('click', function () {
    $('.navbar-collapse').removeClass('show')
    $('.navbar-nav .nav-link').removeClass('active');
    $(this).addClass('active');
  });
});

// ==========================SCROLL SELECTION ACTIVE LINK=======================
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {


      navlinks.forEach(links => {

        links.classList.remove('active');

        document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
      })
    }

  })
}




