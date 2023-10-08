const panels = document.querySelectorAll(".image-panel");
var current;

panels.forEach((panel) => {
   panel.addEventListener('click', () => {
       if(current) {
           current.children[0].classList.remove("active-text");
           current.classList.remove("active");
       }
       current = panel;
       current.classList.add("active");
       setTimeout(() =>{
           current.children[0].classList.add("active-text");
       }, 250);
   })
});