
var img = document.getElementById("sliderImg")
var images = ["../Images/slider (1).jpg", "../Images/slider (2).jpg", "../Images/slider (3).jpg", "../Images/slider (4).jpg", "../Images/slider (5).jpg", "../Images/slider (6).jpg"];

var index = 0;

function next() {
    index++;

    if (index === images.length) {
        index = 0;
    }
    img.setAttribute("src", images[index % images.length])
}


function back() {


    if (index === 0) {
        index = images.length
    }
    index -= 1;
    img.setAttribute("src", images[index % images.length])

}

var currentIndex = 0;
var intervalId;
function startSlideshow() {
    intervalId = setInterval(changeImage, 3000);
}

function changeImage() {
    img.src = images[currentIndex];


    currentIndex = (currentIndex + 1) % images.length;

}
startSlideshow();





document.getElementById('li1').addEventListener('click', function () {
    filterAndDisplayData('li1');
});


document.getElementById('li2').addEventListener('click', function () {
    filterAndDisplayData('li2');
});


document.getElementById('li3').addEventListener('click', function () {
    filterAndDisplayData('li3');
});


document.getElementById('li4').addEventListener('click', function () {
    filterAndDisplayData('li4');
});

function filterAndDisplayData(buttonId) {
    // Get all data elements
    var allData = document.getElementsByClassName('data');

    // Loop through all data elements
    for (var i = 0; i < allData.length; i++) {
        // Check if data element matches the button clicked
        if (allData[i].classList.contains(buttonId)) {
            // Display data for matching button
            allData[i].style.display = 'block';
        } else {
            // Hide data for non-matching button
            allData[i].style.display = 'none';
        }
    }
}





var table = document.getElementById("myTableData");
var foot = document.getElementById("foot");
var rowCount = 1;
var totalp = 0;
var total;

document.addEventListener("DOMContentLoaded", function () {
    const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");
    const cartItemsList = document.getElementById("cart-items");

    addToCartButtons.forEach(button => {


        button.addEventListener("click", function () {

            const product = this.parentNode;
            const parentproduct = product.parentNode;

            const productImageSrc = parentproduct.querySelector("img").getAttribute('src');
            const productName = parentproduct.querySelector("p").textContent;
            const productPrice = parentproduct.querySelector("span").textContent;

            var total = parseInt(productPrice.split("").filter((e) => !isNaN(e)).join(""));

            console.log(total + totalp)



            var row = document.createElement("tr");


            var cell1 = document.createElement("td");
            cell1.append(rowCount)
            row.append(cell1);


            var cell2 = document.createElement("td");
            const ime = document.createElement('img');
            ime.src = productImageSrc;
            ime.style.width = "90px";
            ime.style.height = "30px"
            cell2.append(ime)
            row.append(cell2);


            var cell3 = document.createElement("td");
            cell3.append(productName)
            row.append(cell3);

            var cell4 = document.createElement("td");
            cell4.append(productPrice)
            row.append(cell4);

            table.append(row);


            rowCount++;

            const image = document.createElement('img');
            image.src = productImageSrc;




            // Add a delete button to the row
            var deleteButton = document.createElement("button");
            deleteButton.textContent = "-";
            deleteButton.addEventListener("click", function () {
                table.removeChild(row);
                rowCount--;
            });
            var cell5 = document.createElement("td");
            cell5.append(deleteButton);
            row.append(cell5);

            // Add the row to the cart items list
            // cartItemsList.append(row);

            // foot.append(total);


        });


    });


});



var upBtn = document.getElementById("up");

upBtn.onclick = function () {

    window.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth",
    });


}