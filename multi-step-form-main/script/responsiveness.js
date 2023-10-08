function setFooterContainer() {
    const footer = document.getElementById("footer");
    const mainContainer = document.getElementById("main-container");
    const formContainer = document.getElementById("form-container");
    const image = document.getElementById("background-img");
    const menuLabels = document.getElementsByClassName("menu-option-label-container");
    if (window.innerWidth > 1000) {
        formContainer.appendChild(footer);
        image.src = "assets/images/bg-sidebar-desktop.svg";
        for(var i = 0;i<menuLabels.length;i++){
            menuLabels[i].style.display = "flex";
        }
    } else {
        mainContainer.appendChild(footer);
        image.src = "assets/images/bg-sidebar-mobile.svg";
        for(var i = 0;i<menuLabels.length;i++){
            menuLabels[i].style.display = "none";
        }
    }
}

window.addEventListener("resize", setFooterContainer);
window.addEventListener("load", setFooterContainer);