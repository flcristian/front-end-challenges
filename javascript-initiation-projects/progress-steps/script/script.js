const prev = document.getElementById("prev");
const next = document.getElementById("next");
var current = 0;

function update(){
    const progress = document.getElementById("progress");
    progress.style.transform = `translateY(-50%) scaleX(${current})`;

    if(current === 0){
        prev.disabled = true;
    }else{
        prev.disabled = false;
    }

    if(current === 3){
        next.disabled = true;
    }else{
        next.disabled = false;
    }

    const steps = document.getElementsByClassName("step");
    for(var i = 3; i > current; i--){
        steps[i].classList.remove("active");
    }
    setTimeout(() => {
        for(var i = 0; i < current + 1; i++){
            steps[i].classList.add("active");
        }
    }, 200);
}

prev.addEventListener('click', () =>{
    current--;
    update();
});

next.addEventListener('click', () =>{
    current++;
    update();
});