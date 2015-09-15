$(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if(scroll >= 20) {
      $('.navigation').addClass('navigation_fixed');
    } else {
      $('.navigation').removeClass('navigation_fixed');
    }
  })
});

$('.nav-icon').click(function () {
  $(this).toggleClass('nav-icon_state_active');
  $('.navigation').toggleClass('navigation_state_open');
  event.preventDefault();
});

new WOW().init();

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});
$(document).ready(function() {
  $('.fancy-blog__item').fancybox({
    padding: 4
  });
});
$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide"
  });
});


$(function() {

  $('a[href*=#]:not([href=#])').click(function() {



      var target = $(this).attr('href');
    target = document.getElementById(target);

        $('html,body').animate({
          scrollTop: $(target).offset().top
        }, 2000);
        return false;


  });

});
