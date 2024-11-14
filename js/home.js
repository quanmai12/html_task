const txtFullName = document.forms["registerForm"] ["fullname"];
const txtEmail = document.forms["registerForm"] ["email"];
const txtPhone = document.forms["registerForm"] ["phone"];
const txtPassWord = document.forms["registerForm"] ["password"];
const txtCheckPassWord = document.forms["registerForm"] ["check-password"]


const iconCorrectFullName = txtFullName.nextElementSibling;
const iconCorrectEmail = txtEmail.nextElementSibling;
const iconCorrectPhone = txtPhone.nextElementSibling;
const iconCorrectPassWord = txtPassWord.nextElementSibling;
const iconCorrectCheckPassWord = txtCheckPassWord.nextElementSibling;


const iconWrongFullName = iconCorrectFullName.nextElementSibling;
const iconWrongEmail = iconCorrectEmail.nextElementSibling;
const iconWrongPhone = iconCorrectPhone.nextElementSibling;
const iconWrongPassWord = iconCorrectPassWord.nextElementSibling;
const iconWrongCheckPassWord = iconCorrectCheckPassWord.nextElementSibling;


function validateFullName() {
    if (txtFullName.value === '' || txtFullName.length === 0) {
        iconWrongFullName.setAttribute("style", "display: inline; color: red");
        iconCorrectFullName.setAttribute("style", "display:none;");//thay đổi class
    } else {
        iconCorrectFullName.setAttribute("style", "display: inline; color: green");
        iconWrongFullName.setAttribute("style", "display:none;");//thay đổi class

    }
}
function validateEmail() {
    if (txtEmail.value === '' || txtEmail.length === 0) {
        iconWrongEmail.setAttribute("style", "display: inline; color: red");
        iconCorrectEmail.setAttribute("style", "display:none;");//thay đổi class
    } else {
        iconCorrectEmail.setAttribute("style", "display: inline; color: green");
        iconWrongEmail.setAttribute("style", "display:none;");//thay đổi class
    }
}
function validatePhone() {
    if (txtPhone.value === '' || txtPhone.length === 0) {
        iconWrongPhone.setAttribute("style", "display: inline; color: red");
        iconCorrectPhone.setAttribute("style", "display:none;");//thay đổi class
    } else {
        iconCorrectPhone.setAttribute("style", "display: inline; color: green");
        iconWrongPhone.setAttribute("style", "display:none;");//thay đổi class
    }
}
function validatePassWord() {
    if (txtPassWord.value === '' || txtPassWord.length === 0) {
        iconWrongPassWord.setAttribute("style", "display: inline; color: red");
        iconCorrectPassWord.setAttribute("style", "display:none;");//thay đổi class
    } else {
        iconCorrectPassWord.setAttribute("style", "display: inline; color: green");
        iconWrongPassWord.setAttribute("style", "display:none;");//thay đổi class
    }
}
function validateCheckPassWord() {
    if (txtCheckPassWord.value === '' || txtCheckPassWord.length === 0) {
        iconWrongCheckPassWord.setAttribute("style", "display: inline; color: red");
        iconCorrectCheckPassWord.setAttribute("style", "display:none;");//thay đổi class
    } else {
        iconCorrectCheckPassWord.setAttribute("style", "display: inline; color: green");
        iconWrongCheckPassWord.setAttribute("style", "display:none;");//thay đổi class
    }
}
txtFullName.onkeyup = validateFullName;
txtPassWord.onkeyup = validatePassWord;
txtEmail.onkeyup = validateEmail;
txtPhone.onkeyup = validatePhone;
txtCheckPassWord.onkeyup = validateCheckPassWord;


document.forms["registerForm"].onsubmit = function () {
    // const txtContainer = document.getElementById("container");
    // const txtResult = document.getElementById("result");
    const ResultFullName = document.getElementById("fullname").value;
    const ResultEmail = document.getElementById("email").value;
    const ResultPhone = document.getElementById("phone").value;
    const ResultJobType = document.getElementById("jobtype").value;

    if (fullName && email && phone && jobType) {
        ResultFullName.innerText = fullName;
        ResultEmail.innerText = email;
        ResultPhone.innerText = phone;
        ResultJobType.innerText = jobType;

        document.querySelector(".container").style.display = "none";
        document.getElementById("result").style.display = "block";

    } else {
        alert("Please fill in all fields.");
    }
};