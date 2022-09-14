// phần menu favourite
const loveOpen = $('.icon-menu-favourite-none');
const loveClose = $('.overlay');

loveOpen.addEventListener('click', function () {
  document.querySelector('.box-menu-favourite').style.display = 'block';
  loveOpen.classList.add('disabled');
  loveClose.classList.add('active');
  document.querySelector('.overlay').style.display = 'block';
})

loveClose.addEventListener('click', function () {
  document.querySelector('.box-menu-favourite').style.display = null;
  loveOpen.classList.remove('disabled');
  loveClose.classList.remove('active');
  document.querySelector('.overlay').style.display = null;
})