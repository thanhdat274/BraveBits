const swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  }
});


const btn = document.getElementById('btn-menu')
const menu = document.querySelector('.menu')
btn.addEventListener('click', function () {
  menu.classList.toggle("show")
  console.log("ahihihi");
})