function openMenu(){
    const openButton = document.getElementById("open-button")
    const closeButton = document.getElementById("close-button");
    const container = document.getElementById("menu-container");

    openButton.style.display = "none";
    closeButton.style.display = "block";
    container.style.display = "block";

    const scrollTop = document.documentElement.scrollTop;
    const scrollLeft = document.documentElement.scrollLeft;

    window.onscroll = function() {
        window.scrollTo(scrollLeft, scrollTop);
    };
}

function closeMenu(){
    const openButton = document.getElementById("open-button")
    const closeButton = document.getElementById("close-button");
    const container = document.getElementById("menu-container");

    openButton.style.display = "block";
    closeButton.style.display = "none";
    container.style.display = "none";

    window.onscroll = function() {}
}