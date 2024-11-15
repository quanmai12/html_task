const txtFullName = document.forms["registerForm"]["fullname"];
const txtEmail = document.forms["registerForm"]["email"];
const txtPhone = document.forms["registerForm"]["phone"];
const txtPassWord = document.forms["registerForm"]["password"];
const txtCheckPassWord = document.forms["registerForm"]["check-password"];


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


function validateForm() {
    let isValid = true;

    const FullNameValue = document.getElementById("fullname").value.trim();
    //trim(); để loại bỏ các khoảng trống ở đầu và cuối thông tin nhập vào
    if (FullNameValue.value === '' || FullNameValue > 50 || FullNameValue == 0) {
        iconWrongFullName.setAttribute("style", "display: inline; color: red");
        iconCorrectFullName.setAttribute("style", "display:none;");//thay đổi class
        document.getElementById("fullnameError").textContent = "Tên Không Được Phép Để Trống Hoặc Vượt Quá 50 Kí Tự";
        isValid = false;
    } else {
        iconCorrectFullName.setAttribute("style", "display: inline; color: green");
        iconWrongFullName.setAttribute("style", "display:none;");//thay đổi class
        document.getElementById("fullnameError").textContent = "";

    }

    const EmailValue = document.getElementById("email").value.trim();
    const EmailPattern = /^[^@]{2,64}@[^.]{2,253}\.[0-9a-z-.]{2,63}$/;
    // đọc trên mạng nhưng không hiểu :")
    //Giữa 2 và 64 ký tự không được có @
    //Giữa 2 và 253 ký tự được có dấu .
    //Từ 2 đến 63 cho phép là chữ cái thường, số, dấu gạch ngang hoặc ký tự dấu chấm
    //^ và $ để chắc chắn giá trị khớp ở điểm đầu cà cuối
    if (EmailValue === '' || !EmailPattern.test(EmailValue)) {
        //  .test() : kiểm tra value có trùng khớp với điều kiện của pattern
        iconWrongEmail.setAttribute("style", "display: inline; color: red");
        iconCorrectEmail.setAttribute("style", "display:none;");//thay đổi class
        document.getElementById("emailError").textContent = "email không hợp lệ";
        isValid = false;
    } else {
        iconCorrectEmail.setAttribute("style", "display: inline; color: green");
        iconWrongEmail.setAttribute("style", "display:none;");//thay đổi class
        document.getElementById("emailError").textContent = "";

    }

    const PhoneValue = document.getElementById("phone").value.trim();
    // const PhonePattern = /^\\+[1-9]{1}[0-9]{0,2}-[2-9]{1}[0-9]{2}-[2-9]{1}[0-9]{2}-[0-9]{4}$/;
    //chịu :))
    const PhonePattern = /^\d{10}$/;
    if (PhoneValue === "", !PhonePattern.test(PhoneValue)) {
        iconWrongPhone.setAttribute("style", "display: inline; color: red");
        iconCorrectPhone.setAttribute("style", "display:none;");//thay đổi class
        document.getElementById("phoneError").textContent = "Số Điện Thoại Không Hợp Lệ";
        isValid = false;
    } else {
        iconCorrectPhone.setAttribute("style", "display: inline; color: green");
        iconWrongPhone.setAttribute("style", "display:none;");//thay đổi class
        document.getElementById("phoneError").textContent = "";

    }

    const PasswordValue = document.getElementById("password").value.trim();
    const PasswordPattern = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if (PasswordValue === "" || PasswordPattern.test(PasswordValue)) {

        iconWrongPassWord.setAttribute("style", "display: inline; color: red");
        iconCorrectPassWord.setAttribute("style", "display:none;");//thay đổi class
        document.getElementById("passwordError").textContent = "mật khẩu không hợp lệ";
        isValid = false;
    } else {
        iconCorrectPassWord.setAttribute("style", "display: inline; color: green");
        iconWrongPassWord.setAttribute("style", "display:none;");//thay đổi class
        document.getElementById("passwordError").textContent = "";
    }


    const CheckValue = document.getElementById("check-password").value.trim();
    if (CheckValue === "" || !CheckValue === PasswordValue) {

        iconWrongCheckPassWord.setAttribute("style", "display: inline; color: red");
        iconCorrectCheckPassWord.setAttribute("style", "display:none;");//thay đổi class
        document.getElementById("CheckpasswordError").textContent = "mật khẩu không trùng khớp";
    } else {
        iconCorrectCheckPassWord.setAttribute("style", "display: inline; color: green");
        iconWrongCheckPassWord.setAttribute("style", "display:none;");//thay đổi class
        document.getElementById("CheckpasswordError").textContent = "";
    }

    const GenderValue = document.getElementById("gender").value;
    if (GenderValue === "") {
        document.getElementById("genderError").textContent = "yêu cầu chọn giới tính!";
        isValid = false;
    }

    return isValid;

}


function SubmitForm() {
    if(validateForm()){
        const container = document.getElementById("container");
        const result = document.getElementById("result");
        container.setAttribute("style", "display: none");
        result.setAttribute("style", "display: block");

        document.getElementById("displayFullname").textContent = document.getElementById("fullname").value;
        document.getElementById("displayEmail").textContent = document.getElementById("email").value;
        document.getElementById("displayPhone").textContent = document.getElementById("phone").value;
        document.getElementById("displayGender").textContent = document.getElementById("gender").value;
        document.getElementById("displayHobbies").textContent = document.getElementById("hobbies").value;
        document.getElementById("displayBio").textContent = document.getElementById("bio").value;

    }
}

