// phần menu favourite
const loveOpen = $('.icon-menu-account-none');
const loveClose = $('.overlay');

loveOpen.addEventListener('click', function () {
  document.querySelector('.box-menu-account').style.display = 'block';
  loveOpen.classList.add('disabled');
  loveClose.classList.add('active');
  document.querySelector('.overlay').style.display = 'block';
})

loveClose.addEventListener('click', function () {
  document.querySelector('.box-menu-account').style.display = null;
  loveOpen.classList.remove('disabled');
  loveClose.classList.remove('active');
  document.querySelector('.overlay').style.display = null;
})