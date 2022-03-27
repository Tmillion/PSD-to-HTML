
$(document).ready(function(){
  
  //MIXITUP
  var mixer = mixitup(".container");
  var selector = '.portfolio-filter';

    $(selector).on('click', function(){
    $(selector).removeClass('active');
    $(this).addClass('active');
    });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
        $('.navbar').addClass('nav-sticky');
    } else {
        $('.navbar').removeClass('nav-sticky');
    }
  })
});



