const swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  loop: true,
  autoPlay: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


const btn = document.getElementById('btn-menu')
const menu = document.querySelector('.menu')
btn.addEventListener('click', function () {
    menu.classList.toggle("show")
    console.log("ahihihi");
})