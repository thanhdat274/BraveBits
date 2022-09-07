const $ = document.querySelector.bind(document);

const menuOpen = $('.btn-menu');
const menuClose = $('.close-menu');

menuOpen.addEventListener('click', function () {
  document.querySelector('.menu-list').style.transition = 'all 0.5s ease';
  document.querySelector('.menu-list').style.height = '367px';
  menuOpen.classList.add('disabled');
  menuClose.classList.add('active');
  document.querySelector('.overlay').style.display = 'block';
})

menuClose.addEventListener('click', function () {
  document.querySelector('.menu-list').style.height = '0';
  menuOpen.classList.remove('disabled');
  menuClose.classList.remove('active');
  document.querySelector('.overlay').style.display = 'none';

})