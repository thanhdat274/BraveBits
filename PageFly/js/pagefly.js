$(document).ready(function () {
  $(".box-section2-slide").slick({
    slidesToShow: 3,
    slidesToScroll: 2,
    infinite: true,
    arrows: false,
    draggable: false,
    prevArrow: `<button type='button' class='slick-prev slick-arrow'><ion-icon name="arrow-back-outline"></ion-icon></button>`,
    nextArrow: `<button type='button' class='slick-next slick-arrow'><ion-icon name="arrow-forward-outline"></ion-icon></button>`,
    dots: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 739,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          arrows: false,
          infinite: false,
        },
      },
    ],
    // autoplay: true,
    // autoplaySpeed: 1000,
  });
});


const btn = document.getElementById('btn-menu')
const menu = document.querySelector('.menu')
btn.addEventListener('click', function () {
  menu.classList.toggle("show")
  console.log("ahihihi");
})