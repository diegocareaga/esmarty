(function ($) {

    "use strict";

        // PRE LOADER
        $(window).load(function(){
          $('.preloader').delay(500).slideUp('slow'); // set duration in brackets    
        });


        // MENU
        $('.navbar-collapse a').on('click',function(){
          $(".navbar-collapse").collapse('hide');
        });

        $(window).scroll(function() {
          if ($(".navbar").offset().top > 50) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
              } else {
                $(".navbar-fixed-top").removeClass("top-nav-collapse");
              }
        });


        // SLIDESHOW
        $('#home').backstretch([
          "images/home-bg-slideshow1.jpg", 
          "images/home-bg-slideshow2.jpg",
          "images/home-bg-slideshow3.jpg",
          "images/home-bg-slideshow4.jpg"
        ],  {duration: 3000, fade: 1500});


        // PARALLAX JS
        function initParallax() {
          $('#home').parallax("90%", 90);
          $('#service').parallax("100%", 100);
          $('#about').parallax("40%", 40);
          $('#team').parallax("30%", 30);
          $('#project').parallax("30%", 30);
          $('#testimonial').parallax("80%", 80);
          $('#blog').parallax("50%", 50);
          $('#blog-header').parallax("70%", 70);
          $('#contact').parallax("10%", 10);
          }
        initParallax();


        // CONTACT FORM
        $("#contact").submit(function (e) {
          e.preventDefault();
          var name = $("#cf-name").val();
          var email = $("#cf-email").val();
          var subject = $("#cf-subject").val();
          var message = $("#cf-message").val();
          var dataString = 'name=' + name + '&email=' + email + '&subject=' + subject + '&message=' + message;

          function isValidEmail(emailAddress) {
              var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
              return pattern.test(emailAddress);
          };
          if (isValidEmail(email) && (message.length > 1) && (name.length > 1)) {
              $.ajax({
                  type: "POST",
                  url: "php/contact.php",
                  data: dataString,
                  success: function () {
                      $('.text-success').fadeIn(1000);
                      $('.text-danger').fadeOut(500);
                  }
              });
          }
          else {
              $('.text-danger').fadeIn(1000);
              $('.text-success').fadeOut(500);
          }
          return false;
        });


        // OWL TESTIMONIAL
        var owl = $("#owl-testimonial");
          owl.owlCarousel({
            items: 1,
            autoplay: true,
            smartSpeed: 5000,
            animateIn: true,
            responsiveClass:true,
        });


        // SMOOTHSCROLL
        $(function() {
          $('.custom-navbar a, #home a, #about a').on('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 49
            }, 1000);
            event.preventDefault();
          });
        }); 

})(jQuery);
