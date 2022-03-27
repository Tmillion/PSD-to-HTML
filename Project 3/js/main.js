$(document).ready(function(){
  $('#menu').slicknav();
  $.scrollUp();
  $(function(){
    $('.slider').bxSlider({
      mode: 'fade',
      speed: 1000,
      control: false,
      // auto: true,
    });
  });
});