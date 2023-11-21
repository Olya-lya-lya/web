$(document).ready(function(){
    $('.carousel__inner').slick({
            infinite: true,
            speed: 1200,
            slidesToShow: 1,
            prevArrow: '<button type="button" class="slick-prev"><img src="src/icons/arrow-left.png"></button>',
            nextArrow: '<button type="button" class="slick-next"><img src="src/icons/arrow-right.png"></button>'
          });

          $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
                $(this)
                  .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
                  .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
              });

        function toggleSlide(item) {
                $(item).each(function(i) {
                        $(this).on('click', function(e) {
                                e.preventDefault();
                                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
                        })
                });
        };

        toggleSlide('.catalog-item__link');
        toggleSlide('.catalog-item__back');

        $('[data-modal=consaltation]').on('click', function() {
                $('.overlay, #consaltation').fadeIn('slow');
        });

        $('.modal__close').on('click', function() {
                $('.overlay, #consaltation, #thanks, #order').fadeOut('slow');
        });

        $('.button_mini').each(function (i) {
                $(this).on('click', function() {
                        $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
                        $('.overlay, #order').fadeIn('slow');
                });
        });


        function validateForms(form) {
                $(form).validate({
                        rules: {
                                name: "required",
                                phone: "required", 
                                email: {
                                        required: true,
                                        email: true
                                }
                        },
                        messages: {
                                name: "Пожалуйста, введите свое имя",
                                phone: "Пожалуйста введиет свой телефон",
                                email: {
                                        required: "Пожалуйста, введите свой email",
                                        email: "Неправильно введен адрес почты"
                                }
                        }
                });
        };
        validateForms('#consultation-form');
        validateForms('#consaltation form');
        validateForms('#order form');

        $("input [name=phone]").mask("+375 (29) 999-99-99");
  });


      