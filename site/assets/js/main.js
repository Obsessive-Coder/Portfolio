$(document).ready(function() {
  // Store the position of the nav.
  var navTopOffset = $('nav').offset().top;

  // On Window Scroll And Load
  $(window).on('scroll load', function() {
    // Remove fixed-bottom class from the nav if it exists.
    if ($('nav').hasClass('fixed-bottom')) {
      $('nav').removeClass('fixed-bottom');
    }

    // If the site nav is at the top of the screen ...
    if ($(window).scrollTop() > navTopOffset - 20) {
      // If the site nav does not hav the fixed-top class.
      if (!$('nav').hasClass('fixed-top')) {
        $('nav').addClass('fixed-top');
      }
      return;
    } else {
      // The site nav is not at the not top of the screen.
      if ($('nav').hasClass('fixed-top')) {
        $('nav').removeClass('fixed-top');
      }
    }

    // If the nav scrolls past the bottom of the windown then add the fixed-bottom class to it.
    var windowPosition = $(window).scrollTop() + $(window).height();
    var navPosition = $('nav').offset().top + $('nav').height();

    if (windowPosition < navPosition) {
      if (!$('nav').hasClass('fixed-bottom')) {
        $('nav').addClass('fixed-bottom');
      }
    }
  });

  // Nav Item Clicked
  $('#navbar-collapse').click(function() {
    // Trigger the scroll event so the nav is fixed and the section
    // is correctly positioned.
    $(window).trigger('scroll');
  });
});
