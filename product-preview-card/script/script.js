function changeImageSrc() {
    var image = document.getElementById("main-image");

    if (window.innerWidth < 960) {
        image.setAttribute('src', 'images/image-product-mobile.jpg');
    } else {
        image.setAttribute('src', 'images/image-product-desktop.jpg');
    }
}

window.addEventListener('resize', changeImageSrc);
window.addEventListener('load', changeImageSrc)
changeImageSrc();