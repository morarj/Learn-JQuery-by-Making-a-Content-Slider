$(document).ready(function() {
    // Variables
    var speed = 500;            // Fade speed
    var autoswitch = true;      // Auto option
    var autoswitch_speed = 4000 // Auto fade

    // Add initial active
    $('.slide').first().addClass('active');

    // Hide Slides
    $('.slide').hide();

    // Hide Slides
    $('.active').show();

    $('#next').on('click', nextSlide);

    $('#prev').on('click', prevSlide);

    if(autoswitch) {
        setInterval(nextSlide, autoswitch_speed);
    }

    // Functions

    // Switch to next slide
    function nextSlide() {
      $('.active').removeClass('active').addClass('last');
      if($('.last').is(':last-child')) {
          $('.slide').first().addClass('active');
      } else {
          $('.last').next().addClass('active');
      }
      $('.last').removeClass('last');
      $('.slide').fadeOut(speed);
      $('.active').fadeIn(speed);
    }

    function prevSlide() {
      $('.active').removeClass('active').addClass('last');
      if($('.last').is(':first-child')) {
          $('.slide').last().addClass('active');
      } else {
          $('.last').prev().addClass('active');
      }
      $('.last').removeClass('last');
      $('.slide').fadeOut(speed);
      $('.active').fadeIn(speed);
    }
});
