var swiper = new Swiper(".mySwiper", {
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true,
        },
        loop: true,
        // slidesPerView: 3,
        spaceBetween: 40,
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 1,
            spaceBetween: 30
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 2,
            spaceBetween: 40
          },
          880: {
            slidesPerView: 3,
            spaceBetween: 40
          }
        }
});

var mixer = mixitup('.mixer');
var selector = '.show_btn';
$(selector).on('click', function(){
  $(selector).removeClass('active');
  $(this).addClass('active');
});

const hamburger = document.querySelector('header nav .hamburger');
const mobile_menu = document.querySelector('header nav ul');
const menu_item = document.querySelectorAll('header nav ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});


ScrollReveal({
   origin: 'top',
   distance: '60px',
   duration: 2000,
   delay: 200,
  //  reset: true
 });

 ScrollReveal().reveal('.hero_text,  .machine_container, .cars_container, .route_img, .show_btn, .cpmpany_container');
 ScrollReveal().reveal('.hero_img', { delay: 500 });
 ScrollReveal().reveal('.hero_extra', { delay: 600, interval:100, origin:'bottom' });
 ScrollReveal().reveal('.hero_btn', { delay: 200, origin:'bottom' });
 ScrollReveal().reveal('.machine_img', { origin:'left' });
 ScrollReveal().reveal('.machine_text', { origin:'right' });
 ScrollReveal().reveal('.map', { delay:600, origin:'bottom' });
 ScrollReveal().reveal('.show_container .item', { delay: 300, interval:100,});
 ScrollReveal().reveal('.offer_text', { delay:400, origin:'bottom' });
 ScrollReveal().reveal('.oofer_img', { delay:400, origin:'top' });
 ScrollReveal().reveal('.company_container span', {interval:150});
 
 
 