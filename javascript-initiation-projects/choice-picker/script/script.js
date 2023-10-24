const text = document.getElementById("text");
const container = document.getElementById("choice-container");
let elements = container.children;
let start = 0;

text.addEventListener('input', update);

document.addEventListener('keydown', (event) =>{
   if(event.keyCode === 13){
       event.preventDefault();
       if(text.value.replace(" ", "").length !== 0){
           text.value = "";
           start = elements.length;
           if(elements[start - 1].innerHTML === ""){
               start--;
           }
       }
   }
});

function update(){
    let choices = text.value.split(",");

    for(let i = 0; i < choices.length; i++){
        if(choices[i].replace(" ", "").length !== 0){
            if(elements[start + i] === undefined){
                let add = document.createElement("p");
                add.innerHTML = choices[i];
                add.classList.add("choice");
                container.appendChild(add);
            }
            else{
                elements[start + i].innerHTML = choices[i];
            }
        }
    }
}