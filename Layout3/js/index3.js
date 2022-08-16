const btn = document.getElementById('btn-menu')
const menu = document.querySelector('.menu-bottom')
btn.addEventListener('click', function () {
    menu.classList.toggle("show")
    console.log("ahihihi");
})


// phần Validate form
function validateForm() {
    let name = document.querySelector('#name')
    let phone = document.querySelector('#phone')
    let email = document.querySelector('#email')

    let error = document.getElementById('error')
    let error1 = document.getElementById('error1')
    let error2 = document.getElementById('error2')

    //phần kiểm tra validateForm của name
    if (name.value.length == 0) {
        name.style.border = "1px solid red";
        error.innerHTML = "Last name cannot be left blank!";
        return false;
    } else {
        name.style.border = "0";
        name.style.innerHTML = "none";
        error.innerHTML = "";
    }

    // phần kiểm tra validateForm của phone
    if (phone.value.length == 0) {
        phone.style.border = "1px solid red";
        error1.innerHTML = "Phone number cannot be blank!";
        return false;
    } else {
        phone.style.border = "0";
        phone.style.innerHTML = "none";
        error1.innerHTML = "";
    }

    if (email.value.length == 0) {
        email.style.border = "1px solid red";
        error2.innerHTML = "Email address cannot be blank!";
        return false;
    } else {
        email.style.border = "0";
        email.style.innerHTML = "none";
        error2.innerHTML = "";
    }

}