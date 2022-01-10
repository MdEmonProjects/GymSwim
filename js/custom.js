$('.product_slider').slick({
  centerMode: true,
  centerPadding: false,
  slidesToShow: 4,
  dots: false,
  arrows: true,
  infinite: true,
  prevArrow: '<i class="fa fa-chevron-right slick-arrow-right"></i>',
  nextArrow: '<i class="fa fa-chevron-left slick-arrow-left"></i>',
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: false,
        arrows: false
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false
      }
    }
  ]

});