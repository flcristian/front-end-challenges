let currentIndex = 1;
const imageCount = 5;

function checkLeft(){
    if(currentIndex === 1){
        currentIndex = imageCount;
    }
    else{
        currentIndex--;
    }

    updateImage();
}

function checkRight(){
    if(currentIndex === imageCount){
        currentIndex = 1;
    }
    else{
        currentIndex++;
    }

    updateImage();
}

function updateImage(){
    const slideshow = document.getElementById("slideshow");
    slideshow.style.background = `url("images/image-${currentIndex}.jpg")`;
    slideshow.style.backgroundRepeat = "no-repeat";
    slideshow.style.backgroundPosition= "center";
    slideshow.style.backgroundSize = "cover";
}