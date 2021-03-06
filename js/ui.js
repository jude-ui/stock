(function ($) {
  "use strict";
  $(document).ready(function() {
    var $btnTop = $('.btn_top');
    $(window).on('scroll', function() {
      if ( $(this).scrollTop() > 0 ) {
        if ($btnTop.hasClass('hide')) {
          $btnTop.removeClass('hide');
        }
      } else {
        $btnTop.addClass('hide');
      }
    });

    $btnTop.on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({scrollTop: 0}, 400, 'easeOutExpo');
    });
  });
}(jQuery));