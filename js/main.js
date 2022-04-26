AOS.init();

new Swiper('.review__slider', {
    
      pagination : {
        el: '.swiper-pagination',
        clickable:true,
      },
  });


  const menuBtn = document.querySelector('.menu__btn');
  const menu = document.querySelector('.menu');
  const closeBtn = document.querySelector('.close__menu');

menuBtn.addEventListener('click', function(){
    menu.classList.toggle('active');
})

closeBtn.addEventListener('click', function(){
    menu.classList.toggle('active');
  })