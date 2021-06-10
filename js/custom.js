$(document).ready(function() {

    $(".menu-toggle").click(function() {
        $("#main-menu").slideToggle(200, "linear");
    });

    $("#main-menu .menu > li > a, #main-menu > ul > li.has-megamenu > ul > li > a").click(function() {
        var parent = $(this).parent();

        if( parent.hasClass("open") ) {
            $(this).next().slideUp(200, "linear", function() {
                parent.removeClass("open");
            });
        } else {
            parent.addClass( "open" );
            $(this).next().slideDown( 200, "linear" );
        }

    });

    $(".header-search").click(function() {
        $(".header-serach-form").fadeToggle("fast");
    });

    // Progress bar
    $('.progress-bars').appear(function() {
       $('.progress-bar .bar-bg').each(function() {
         var dataW = $(this).attr('data-width');
         var dataTime = $(this).attr('data-time');

         $(this).animate(
               {width: dataW + '%'},
               dataTime
            );
       });
    });

    // Owl Carousel
    var owl = $("#home-slider");

    owl.on('changed.owl.carousel', function(event) {
      var animationClass = $('.animate__animated').attr('data-animation');

      $('.animate__animated').removeClass(animationClass);
    });

    owl.on('initialized.owl.carousel, changed.owl.carousel', function(event) {
      var currentItem = $('.slide-item').eq(event.item.index);
      var animatedClass = currentItem.find('.animate__animated');

      animationInit(animatedClass);
    });

    owl.owlCarousel({
      items: 1,
      nav: true,
    });

    function animationInit(element) {
      $(element).each(function() {
        var animationClass = $(this).attr("data-animation"),
            animationDelay = $(this).attr("data-animation-delay");
  
        $(this).addClass(animationClass);
  
        $(this).css({
          '-webkit-animation-delay': animationDelay,
          '-moz-animation-delay': animationDelay,
          'animation-delay': animationDelay,
        });
      });
    }


    // Team Slider
    $("#team-slider").owlCarousel({
      nav: true,
      dots: false,
      margin: 30,
      responsive: {
         320: {
            items: 1,
         },

         480: {
            items: 2,
         },

         768: {
            items: 4,
         }
      }
    });

   // Counter Animation
   $('#counter').appear(function () {
      $('.counter-item').each(function () {
         var counterNum = $(this).find('.counter-value').text();
         $(this).find('.counter-value').delay(6000).countTo({
            from: 0,
            to: counterNum,
            speed: 3000,
            refreshInterval: 50,
         });
      });
   });

   // Nav Tabs
   $('.nav-tabs > li').click(function() {
      $('.nav-tabs > li').removeClass('active');
      $(this).addClass('active');

      $('.tab-content').hide();
      var className = $(this).attr('data-tab');
      $('.' + className).fadeIn();
   });

   // Single Portfolio Slider
   $("#single-portfolio-slider").owlCarousel({
      nav: true,
      dots: true,
      items: 1,
      navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>']
   });

   // Portfolio Filter
   var mixer = mixitup('.porfolio-items');
});