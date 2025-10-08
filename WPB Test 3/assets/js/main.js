$(document).ready(function(){
  $(".mobile-nav-btn").click(function(){
    $("#navigation").slideToggle();
      $("body").toggleClass("no-scroll");
    
  });
});


$(window).resize(function(){
  if ($(window).width() > 1024) {
    $("#navigation").removeAttr("style"); 
  }
});

const logoSwiper = new Swiper('.logoSwiper', {
  slidesPerView: '3',      
  loop: true,                 
  spaceBetween: 40,          
  navigation: {
    nextEl: '.logoswiper-button-next',
    prevEl: '.logoswiper-button-prev',
  },
});


let mainSwiper = new Swiper(".main-swiper", {
  effect: "fade",
  speed: 800,
  loop: true, 
  allowTouchMove: false,
});

let thumbsSwiper = new Swiper(".thumbs-swiper", {
  spaceBetween: 20,
  slidesPerView: 1,
  loop: true, 
  pagination: {
    el: ".customswiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".cardswiper-button-next",
    prevEl: ".cardswiper-button-prev",
  },
  on: {
    slideChange: function () {
      mainSwiper.slideToLoop(this.realIndex); 
    }
  }
});
