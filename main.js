$(window).scroll(function() {
  
  if ($(this).scrollTop()>=100) {
    // длительность анимации - 'slow'
    // тип анимации -  'linear'
    $('.content').fadeIn('1500','linear');
  }

});