$(document).ready(function(){
    $('.carousel__inner').slick({
            infinite: true,
            speed: 1200,
            slidesToShow: 1,
            prevArrow: '<button type="button" class="slick-prev"><img src="src/icons/arrow-left.png"></button>',
            nextArrow: '<button type="button" class="slick-next"><img src="src/icons/arrow-right.png"></button>'
          });
  });
      