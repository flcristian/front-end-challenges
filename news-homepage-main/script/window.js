function updateMenu() {
    const openButton = document.getElementById("open-button")
    const closeButton = document.getElementById("close-button");
    const container = document.getElementById("menu-container");
    const image = document.getElementById("image");

    if(window.innerWidth > 640){
        image.src = "assets/images/image-web-3-desktop.jpg"
    } else{
        image.src = "assets/images/image-web-3-mobile.jpg"
    }

    if (window.innerWidth > 960) {
        openButton.style.display = "none";
        closeButton.style.display = "none";
        container.style.display = "none";
        window.onscroll = function() {}
    } else {
        if(closeButton.style.display == "none") {
            openButton.style.display = "block";
        }
    }
}

// Initial check and event listener for window resize
window.addEventListener('resize', updateMenu);
window.addEventListener('load', updateMenu);