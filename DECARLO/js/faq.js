const listQuestion = $$('.list-question__item');
const questionMore = $$('.list-question__title span');
const solve = $$('.solve');

// active menu 

const menuItem = $$('.faq-menu__item');
const menuLink = $$('.faq-menu__link');


const heightSolveEle = solve[2].clientHeight;
console.log(heightSolveEle)


listQuestion.forEach(function (ele, index) {
  solve[index].style.height = '0';
  document.querySelector('.solve.active').style.height = `${heightSolveEle}px`;

  ele.addEventListener('click', function (e) {
    if (questionMore[index].innerText === '+') {
      questionMore[index].innerHTML = '-';
      solve[index].style.height = `${heightSolveEle}px`;

    }
    else {
      questionMore[index].innerHTML = '+';
      solve[index].style.height = '0';

    }
    solve[index].style.transition = 'all 0.5s ease';
  })
})


// menu

const question = $$('.question')

menuItem.forEach(function (ele, index) {
  ele.addEventListener('click', function (e) {
    document.querySelector('.active.faq-menu__item').classList.remove('active');
    document.querySelector('.faq-menu__link--active.faq-menu__link').classList.remove('faq-menu__link--active');

    ele.classList.add('active');
    menuLink[index].classList.add('faq-menu__link--active');

    document.querySelector('.question.active').classList.remove('active');
    question[index].classList.add('active');
  })
})