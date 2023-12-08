var Uname = document.getElementById("Uname");
var pass = document.getElementById("pass");
var email=document.getElementById("email")
var submitbtn = document.getElementById("submitBtn");
var req = document.getElementById("req")
var req2 = document.getElementById("req2")
var req3=document.getElementById("req3")
console.log(Uname)

var UnameRe = /\w{3}/ig;
var passRe = /\w{8}/ig;
var emailRe=/[a-zA-z]@\w{5}.\w{3}/

function Contact(e) {

    e.preventDefault();
    if (Uname.value.match(UnameRe)) {
        Uname.style.border = "green 2px solid";
        req.style.display = "none";


    } else {
        Uname.style.border = "red 2px solid";
        req.style.display = "block";
        return false;
    }



    if (email.value.match(emailRe)) {
        email.style.border = "green 2px solid";
        req3.style.display = "none";
    }
    else {
        email.style.border = "red 2px solid";
        req3.style.display = "block";
        return false;
    }



    if (pass.value.match(passRe)) {
        pass.style.border = "green 2px solid";
        req2.style.display = "none";
    }
    else {
        pass.style.border = "red 2px solid";
        req2.style.display = "block";
        return false;
    }


    alert("submitted successfully");


}

//window.onload = function () {

//   Uname.focus();
//}

Uname.onblur = function () {
    pass.focus();
}



var upBtn = document.getElementById("up");

upBtn.onclick = function () {

    window.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth",
    });


}

