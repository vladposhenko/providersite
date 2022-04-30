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
const menu = document.querySelector('.menu');
const closeBtn = document.querySelector('.close__menu');

menuBtn.addEventListener('click', function(){
    menu.classList.toggle('active');
})

closeBtn.addEventListener('click', function(){
    menu.classList.toggle('active');
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