var upBtn = document.getElementById("up");

upBtn.onclick = function () {

    window.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth",
    });


}