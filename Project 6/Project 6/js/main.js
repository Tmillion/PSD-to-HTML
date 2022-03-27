$('.owl-carousel').owlCarousel({
    loop:true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    smartSpeed: 300,
    margin:10,
    nav:false,
    items:1,
    dots:true,
    responsive:{
        0:{
            
        },
        600:{
            
        },
        1000:{
            
        }
    }
})

const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const menu = document.querySelector('nav .container ul');

menuBtn.addEventListener('click', () => {
  menu.style.display = 'block';
  menuBtn.style.display = 'none';
  closeBtn.style.display = 'inline-block';
})

closeBtn.addEventListener('click', () => {
  menu.style.display = 'none';
  menuBtn.style.display = 'inline-block';
  closeBtn.style.display = 'none';
})

const navItems = menu.querySelectorAll('li');
   
  const changeActiveItem = () => {
    navItems.forEach(item => {
      const link = item.querySelector('a');
      link.classList.remove('active');
    })
  }
    
  navItems.forEach(item => {
    const link = item.querySelector('a');
    link.addEventListener('click', () => {
      changeActiveItem();
      link.classList.add('active');
    })
  })

  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
        $('nav').addClass('nav-sticky');
    } else {
        $('nav').removeClass('nav-sticky');
    }
  })