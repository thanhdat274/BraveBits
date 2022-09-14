const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const menuOpen = $('.btn-menu');
const menuClose = $('.close-menu');
const overLayClose = $('.overlay');

menuOpen.addEventListener('click', function () {
  document.querySelector('.menu-list').style.display = 'block';
  menuOpen.classList.add('disabled');
  menuClose.classList.add('active');
  overLayClose.classList.add('active');
  document.querySelector('.overlay').style.display = 'block';
})

menuClose.addEventListener('click', function () {
  document.querySelector('.menu-list').style.display = null;
  menuOpen.classList.remove('disabled');
  menuClose.classList.remove('active');
  overLayClose.classList.remove('active');
  document.querySelector('.overlay').style.display = null;
})

overLayClose.addEventListener('click', function () {
  document.querySelector('.menu-list').style.display = null;
  menuOpen.classList.remove('disabled');
  menuClose.classList.remove('active');
  overLayClose.classList.remove('active');
  document.querySelector('.overlay').style.display = null;
})


// phần search
const searchOpen = $('.btn-search');
const searchClose = $('.icon-search-close');

searchOpen.addEventListener('click', function () {
  document.querySelector('.menu-list').style.display = 'none';
  searchOpen.classList.add('disabled');
  searchClose.classList.add('active');
  document.querySelector('.search').style.display = 'block';
})

searchClose.addEventListener('click', function () {
  document.querySelector('.menu-list').style.display = null;
  searchOpen.classList.remove('disabled');
  searchClose.classList.remove('active');
  document.querySelector('.search').style.display = null;
})