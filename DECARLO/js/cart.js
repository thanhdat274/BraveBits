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