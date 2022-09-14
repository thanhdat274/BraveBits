let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// phần menu 
const menuItem = $$('.detail-menu__item');
const menuLink = $$('.detail-menu__link');
const detailDesc = $$('.detail-desc')

menuItem.forEach(function (ele, index) {
  ele.addEventListener('click', function (e) {
    document.querySelector('.active.detail-menu__item').classList.remove('active');
    document.querySelector('.detail-menu__link--active.detail-menu__link').classList.remove('detail-menu__link--active');

    ele.classList.add('active');
    menuLink[index].classList.add('detail-menu__link--active');

    document.querySelector('.detail-desc.active').classList.remove('active');
    detailDesc[index].classList.add('active');
  })
})

// phàn tăng số lượng
const amountProduct = $('.detail-info__addToCart-amount>span');
const dash = $('.fa-minus');
const plus = $('.fa-plus');
console.log(amountProduct);

function plusProduct() {
  let counterPro = 1;
  plus.addEventListener('click', function (e) {
    amountProduct.innerText = ++counterPro;
  })
  dash.addEventListener('click', function (e) {
    if (counterPro <= 1) {
      amountProduct.innerText = 1;
    }
    else {
      amountProduct.innerText = --counterPro;
    }
  })
}
plusProduct();


// phần yêu thích
function like() {
  const detailHeart = $('.icon-like');
  const detailHeartFill = $('.icon-like-fill');

  if ((detailHeart || detailHeartFill) === null) return;

  detailHeart.onclick = function (event) {
    detailHeart.classList.remove('active');
    detailHeartFill.classList.add('active');
  }
  detailHeartFill.onclick = function (event) {
    detailHeartFill.classList.remove('active');
    detailHeart.classList.add('active');
  }

}
like();