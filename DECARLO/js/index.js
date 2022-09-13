const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const menuOpen = $('.btn-menu');
const menuClose = $('.close-menu');

menuOpen.addEventListener('click', function () {
  document.querySelector('.menu-list').style.transition = 'all 0.5s ease';
  // document.querySelector('.menu-list').style.height = '367px';
  document.querySelector('.menu-list').style.display = 'block';
  menuOpen.classList.add('disabled');
  menuClose.classList.add('active');
  document.querySelector('.overlay').style.display = 'block';
})

menuClose.addEventListener('click', function () {
  // document.querySelector('.menu-list').style.height = '0';
  document.querySelector('.menu-list').style.display = null;
  menuOpen.classList.remove('disabled');
  menuClose.classList.remove('active');
  document.querySelector('.overlay').style.display = 'none';
})

const searchOpen = $('.btn-search');
const searchClose = $('.icon-search-close');

searchOpen.addEventListener('click', function () {
  document.querySelector('.search').style.transition = 'all 0.5s ease';
  // document.querySelector('.menu-list').style.height = '367px';
  document.querySelector('.menu-list').style.display = 'none';
  searchOpen.classList.add('disabled');
  searchClose.classList.add('active');
  document.querySelector('.search').style.display = 'block';
})

searchClose.addEventListener('click', function () {
  // document.querySelector('.menu-list').style.height = '0';
  document.querySelector('.menu-list').style.display = null;
  searchOpen.classList.remove('disabled');
  searchClose.classList.remove('active');
  document.querySelector('.search').style.display = null;
})