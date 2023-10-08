function setFooterContainer() {
    const footer = document.getElementById("footer");
    const mainContainer = document.getElementById("main-container");
    const formContainer = document.getElementById("form-container");
    const image = document.getElementById("background-img");
    if (window.innerWidth > 1000) {
        formContainer.appendChild(footer);
        image.src = "assets/images/bg-sidebar-desktop.svg";
    } else {
        mainContainer.appendChild(footer);
        image.src = "assets/images/bg-sidebar-mobile.svg";
    }
}

window.addEventListener("resize", setFooterContainer);
window.addEventListener("load", setFooterContainer);