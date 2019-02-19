$(document).ready(function ($) {
  let carouselBigBoard = $('#Carousel-bigBoard');
  let carouselBigBoardThumb = $('#Carousel-bigBoard--thumbs');
  let carouselPopular = $('#Carousel-popular');

  carouselBigBoard.owlCarousel({
    thumbs: true,
    thumbImage: true,
    thumbContainerClass: 'owl-thumbs',
    thumbItemClass: 'owl-thumb-item',
    thumbsPrerendered: true,
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    dots: false,
  });

  carouselBigBoardThumb.owlCarousel({
    responsiveClass: true,
    margin: 10,
    responsive: {
      640: {
        items: 5,
      }
    },
  });

  carouselPopular.owlCarousel({
    dots: false,
    margin: 10,
    nav: false,
    responsive: {
      320: {
        items: 1
      },
      641:{
        items: 5
      }
    }
  });


  $('.Carousel-next').click(function() {
    carouselPopular.trigger('next.owl.carousel');
  });

  $('.Carousel-prev').click(function() {
    carouselPopular.trigger('prev.owl.carousel');
  });
});


