$(window).scroll(function(e) {
    parallax();
  })
  
  
  function parallax() {
    var scroll = $(window).scrollTop();
    var screenHeight = $(window).height();
  
    $('.parallax').each(function() {
      var offset = $(this).offset().top;
      var distanceFromBottom = offset - scroll - screenHeight
      
      if (offset > screenHeight && offset) {
        $(this).css('transform', 'translateY( ' + (( distanceFromBottom  ) * 0.03) +'vw)');
      } else {
        $(this).css('transform', 'translateY( ' + (( -scroll ) * 0.03) + 'vw)');
      }
    })
  }