function deleteCookies() {
    var cookies = document.querySelector('.cookies')

    cookies.style.display = "none";
}

function alertMessage(element) {
    alert("Your Cart is empty!");
}

function changeImage(originalImage) {
    originalImage.src = "img/succulents-2.jpg";
}

function changeImageAgain(otherImage) {
    otherImage.src = "img/succulents-1.jpg";
}