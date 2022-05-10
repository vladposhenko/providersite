// <ИНИЦИАЛИЗАЦИЯ БИБЛИОТЕКИ AOS>-----------------------------------------------------------------------------------//

AOS.init();

// <ПОДКЛЮЧЕНИЕ И НАСТРОЙКА СВАЙПЕРА>-----------------------------------------------------------------------------------//


new Swiper('.review__slider', {
    
      pagination : {
        el: '.swiper-pagination',
        clickable:true,
      },
  });

// <ОТКРЫТИЕ И ЗАКРЫТИЕ МОБИЛЬНОГО МЕНЮ>-----------------------------------------------------------------------------------//


const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.mobile-nav');
const closeBtn = document.querySelector('.close__menu');

console.log(closeBtn);

menuBtn.addEventListener('click', function(){
    menu.classList.toggle('active');
})

closeBtn.addEventListener('click', function(){
    menu.classList.remove('active');
  })

// <ОТКРЫТИЕ И ЗАКРЫТИЕ POPUP>-----------------------------------------------------------------------------------//

const modal = document.getElementById('popup');
const openModal = document.getElementById('openModal');
const closeModal = document.getElementById('closeModal');


openModal.addEventListener('click', function(){
    modal.classList.toggle('show');
})

closeModal.addEventListener('click', function(){
    modal.classList.toggle('show');
  })





  const swiper = new Swiper('.achievements__inner', {
    
    slidesPerView: 4,
    slidesPerGroup:4,
    spaceBetween:40,
    pagination : {
      el: '.swiper-pagination',
      clickable:true,
    },

    breakpoints: {
      220: {
        slidesPerView: 1,
        slidesPerGroup:1,
      },

      540: {
        slidesPerGroup:2,
        slidesPerView: 2,
        spaceBetween: 20,
      },

      740: {
        slidesPerView: 4,
        spaceBetween: 40,
      },

      
    }

  });