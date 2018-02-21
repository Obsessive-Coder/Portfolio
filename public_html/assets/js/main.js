$(document).ready(function() {
  // On Window Scroll And Load
  $(window).on('scroll resize', function() {
    // Set the positioning of the site navbar.
    controlNavbar();

    if (isAutoScrolling) {
      return false;
    }

    var windowHeight = $(window).height();
    var windowTopPosition = $(window).scrollTop();
    var windowBottomPosition = (windowTopPosition + windowHeight);

    // Anamite when in viewport
    $.each(animatableElements, function() {
      var section = $(this);

      var height = section.outerHeight();
      var topPosition = section.offset().top;
      var bottomPosition = topPosition + height;
      // var selector = '#' + section.attr('id') + ' .animated[data-animation]';
      var sectionElements = $('#' + section.attr('id')).find('.animated');

      if ((bottomPosition >= windowTopPosition + 300) && (topPosition <= windowBottomPosition - 300)) {

        // Change the active nav item.
        $('.nav-item').removeClass('active');
        $('.nav-link[href="#' + section.attr('id') + '"]').parent().addClass('active');

        if (!section.hasClass('in-view')) {

          section.addClass('in-view');

          sectionElements.addClass(function(element) {
            return $(this).data('animation');
          });

          console.log('in view');
        }
      } else {
        // section.removeClass('in-view');
        // sectionElements.removeClass(function() {
        //   return $(this).data('animation');
        // });
      }

    });

  });

  // Nav Item Clicked
  $('.nav-link').click(function() {
    // Set to true to prevent other animations.
    isAutoScrolling = true;

    // Set timer for 1.25 second that will allow section animations.
    window.setTimeout(function() {
      isAutoScrolling = false;
    }, 1250);

    // Change the active nav item.
    if (!$(this).parent().hasClass('resume-item')) {
      $('.nav-item').removeClass('active');
      $(this).parent().addClass('active');
    }

    // Scroll the page to the section that was clicked in the navbar.
    var elementID = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(elementID).offset().top
    }, 1500);
  });

  // Contact Form Submitted
  $('form').submit(function() {
    event.preventDefault();

    var params = $('form').serializeArray().reduce(function(obj, item) {
      obj[item.name] = item.value;
      return obj;
    }, {});

    var idService = "default_service";
    var idTemplate = "request_for_proposal";

    var submitButton = $(this).find("#submit");

    submitButton.text("Sending It...");

    emailjs.send(idService, idTemplate, params)
      .then(function() {
        // CreateStatusAlert("alert-success");
        submitButton.text("Send It");
      }, function(err) {
        console.log("Send email failed!\r\n Response:\n" + JSON.stringify(err));
        // CreateStatusAlert("alert-warning");
        submitButton.text("Send It");
      });
  });

  // Control Navbar
  function controlNavbar() {
    // *** The navbar controller uses the screen position of the navbar to
    // set its css postion using Bootstrap classes.

    // Is Nav Top
    function isNavTop() {
      // Return true if the site navigation is within 100px of the top of the screen.
      if ($(window).scrollTop() > navTopOffset - 20) {
        return true;
      }
      return false;
    }

    // Is Nav Bottom
    function isNavBottom() {
      // Return true if the site navigation is below the bottom of the screen.

      var windowPosition = $(window).scrollTop() + $(window).height();
      var navPosition = $('nav').offset().top + $('nav').height();

      if (windowPosition < navPosition) {
        return true;
      }
      return false;
    }

    // Remove fixed-bottom class from the nav if it exists.
    if ($('nav').hasClass('fixed-bottom')) {
      $('nav').removeClass('fixed-bottom');
    }

    // If the site nav is at the top of the screen ...
    if (isNavTop()) {
      // Add fixed-bottom class to nav if it doesn't exist.
      if (!$('nav').hasClass('fixed-top')) {
        $('nav').addClass('fixed-top');
        return true;
      }
    } else {
      // The site nav is NOT at the top of the screen.
      // Remove fixed-top class from nav if it exists.
      if ($('nav').hasClass('fixed-top')) {
        $('nav').removeClass('fixed-top');
      }

      // If the nav scrolls past the bottom of the windown then add the fixed-bottom class to it.
      if (isNavBottom()) {
        // Add fixed-bottom class to nav it it doesn't exist.
        if (!$('nav').hasClass('fixed-bottom')) {
          $('nav').addClass('fixed-bottom');
        }
      }
    }
    // End controlNavbar
  }

  // Main section elements used to trigger animations when the secion is in view.
  var animatableElements = $('.main-header, .main-section');

  var isAutoScrolling = false;
  // Store the position of the nav.
  var navTopOffset = $('nav').offset().top;

  // Trigger the scroll even to ensure the navbar is positioned correctly
  $(window).trigger('scroll');
});
