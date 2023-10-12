let side = 0;

function DisplayStartCards(){
    const elements = document.querySelectorAll(".item");
    let loaded = window.innerHeight + window.scrollY;

    for(let current = 0, index = 0; current < loaded - 300; current += 150, index++){
        elements[index].style.opacity = "1";
        elements[index].classList.add("active");
    }
}

function DisplayCards(){
    const elements = document.querySelectorAll(".item");
    let loaded = window.innerHeight + window.scrollY;
    for(let current = 0, index = 0; current < loaded - 300; current += 150, index++){
        if(!elements[index].classList.contains("active")) {
            if(side === 0){
                elements[index].style.transform = "translateX(100vh)";
                side++;
            }else{
                elements[index].style.transform = "translateX(-100vh)";
                side--;
            }
            elements[index].classList.add("active");
            setTimeout(() => {
                elements[index].style.transform = "translateX(0)";
            }, 1);
        }
    }
}

window.onload = function() {
    DisplayStartCards();
};

window.addEventListener("scroll", function() {
    DisplayCards();
});