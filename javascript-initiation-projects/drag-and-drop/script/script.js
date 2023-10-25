const image = document.querySelector(".image");
const slots = document.querySelectorAll(".slot");
let index = 2;

image.addEventListener('dragstart', dragStart);
image.addEventListener('dragend', dragEnd);
slots.forEach(slot =>{
    slot.addEventListener('dragover', dragOver);
    slot.addEventListener('dragenter', dragEnter);
    slot.addEventListener('dragleave', dragLeave);
    slot.addEventListener('drop', dragDrop);
});

function dragStart(){
    this.className += " hold";
    setTimeout(() => this.className = "invisible", 0);
}

function dragEnd(){
    this.className = "image";
}

function dragOver(e){
    e.preventDefault()
}

function dragEnter(e){
    e.preventDefault()
    this.className += " hovered";
}

function dragLeave(){
    this.className = "slot";
}

function dragDrop(){
    this.className = "slot";
    this.append(image);
}