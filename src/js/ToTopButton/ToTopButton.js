$(window).scroll(function() {
  if ($(this).scrollTop() >= 100) {
    $('.ToTopButton').fadeIn(200);
  } else {
    $('.ToTopButton').fadeOut(200);
  }
});
$('.ToTopButton').click(function() {
  $('body,html').animate({
    scrollTop : 0
  }, 500);
});