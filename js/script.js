// slick Slider Start 
$('.sliders').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow:'<i class="fa-solid fa-circle-chevron-left prev"></i>',
    nextArrow:'<i class="fa-solid fa-circle-chevron-right next"></i>'
  });
// Slick Slider End 
$('.serviceSlider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows:false,
});
responsive: [
  {
    breakpoint: 575,
    settings: {
      arrows: false,
      centerMode: true,
      centerPadding: '40px',
      slidesToShow: 1,
    }
  },
  {
    
  }
]