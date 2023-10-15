const radios = document.querySelectorAll(".theme-radio");

function moveSelected(value){
    let index = parseInt(value);
    const selected = document.getElementById("selected");
    let translate = `translate(${index * 25}px, -50%)`;
    selected.style.transform = translate;

    radios.forEach((radio) => {
        radio.classList.remove("selected");
    });
    radios[index].classList.add("selected");
}

function selectTheme(value){
    const title = document.querySelectorAll(".title");
    const themeTitle = document.querySelectorAll(".theme-title");
    const themeLabel = document.querySelectorAll(".theme-label");
    const screenItem = document.querySelectorAll(".screen-item");
    if(value == 0){
        title[0].classList.add("first-theme-item");
        themeTitle[0].classList.add("first-theme-item");
        for(let i = 0; i < themeLabel.length; i++){
            themeLabel[i].classList.add("first-theme-item");
        }
        screenItem[0].classList.add("first-theme-item");
    }
    else{
        title[0].classList.remove("first-theme-item");
        themeTitle[0].classList.remove("first-theme-item");
        for(let i = 0; i < themeLabel.length; i++){
            themeLabel[i].classList.remove("first-theme-item");
        }
        screenItem[0].classList.remove("first-theme-item");
    }

    switch (value){
        case "0":
            document.documentElement.style.setProperty('--main-background', 'hsl(222, 26%, 31%)');
            document.documentElement.style.setProperty('--keypad-background', 'hsl(223, 31%, 20%)');
            document.documentElement.style.setProperty('--screen-background', 'hsl(224, 36%, 15%)');
            document.documentElement.style.setProperty('--key-background-1', 'hsl(225, 21%, 49%)');
            document.documentElement.style.setProperty('--key-shadow-1', 'hsl(224, 28%, 35%)');
            document.documentElement.style.setProperty('--key-background-2', 'hsl(6, 63%, 50%)');
            document.documentElement.style.setProperty('--key-shadow-2', 'hsl(6, 70%, 34%)');
            document.documentElement.style.setProperty('--key-background-3', 'hsl(30, 25%, 89%)');
            document.documentElement.style.setProperty('--key-shadow-3', 'hsl(28, 16%, 65%)');
            document.documentElement.style.setProperty('--text-3', 'hsl(221, 14%, 31%)');
            document.documentElement.style.setProperty('--text-2', 'hsl(0, 0%, 100%)');
            document.documentElement.style.setProperty('--text-1', 'hsl(0, 0%, 100%)');
            document.documentElement.style.setProperty('--key-background-1-pressed', 'hsl(225, 46%, 67%)');
            document.documentElement.style.setProperty('--key-shadow-1-pressed', 'hsl(223, 27%, 46%)');
            document.documentElement.style.setProperty('--key-background-2-pressed', 'hsl(6, 86%, 62%)');
            document.documentElement.style.setProperty('--key-shadow-2-pressed', 'hsl(6, 63%, 39%)');
            document.documentElement.style.setProperty('--key-background-3-pressed', 'hsl(0, 0%, 100%)');
            document.documentElement.style.setProperty('--key-shadow-3-pressed', 'hsl(27, 19%, 77%)');
            break;
        case "1":
            document.documentElement.style.setProperty('--main-background', 'hsl(0, 0%, 90%)');
            document.documentElement.style.setProperty('--keypad-background', 'hsl(0, 5%, 81%)');
            document.documentElement.style.setProperty('--screen-background', 'hsl(0, 0%, 93%)');
            document.documentElement.style.setProperty('--key-background-1', 'hsl(185, 42%, 37%)');
            document.documentElement.style.setProperty('--key-shadow-1', 'hsl(185, 58%, 25%)');
            document.documentElement.style.setProperty('--key-background-2', 'hsl(25, 98%, 40%)');
            document.documentElement.style.setProperty('--key-shadow-2', 'hsl(25, 99%, 27%)');
            document.documentElement.style.setProperty('--key-background-3', 'hsl(45, 7%, 89%)');
            document.documentElement.style.setProperty('--key-shadow-3', 'hsl(35, 11%, 61%)');
            document.documentElement.style.setProperty('--text-3', 'hsl(60, 10%, 19%)');
            document.documentElement.style.setProperty('--text-2', 'hsl(0, 0%, 100%)');
            document.documentElement.style.setProperty('--text-1', 'hsl(0, 0%, 100%)');
            document.documentElement.style.setProperty('--key-background-1-pressed', 'hsl(186,49%,57%)');
            document.documentElement.style.setProperty('--key-shadow-1-pressed', 'hsl(185,54%,32%)');
            document.documentElement.style.setProperty('--key-background-2-pressed', 'hsl(25,88%,54%)');
            document.documentElement.style.setProperty('--key-shadow-2-pressed', 'hsl(25,83%,39%)');
            document.documentElement.style.setProperty('--key-background-3-pressed', 'hsl(0,0%,100%)');
            document.documentElement.style.setProperty('--key-shadow-3-pressed', 'hsl(33,21%,84%)');
            break;
        case "2":
            document.documentElement.style.setProperty('--main-background', 'hsl(268, 75%, 9%)');
            document.documentElement.style.setProperty('--keypad-background', 'hsl(268, 71%, 12%)');
            document.documentElement.style.setProperty('--screen-background', 'hsl(268, 71%, 12%)');
            document.documentElement.style.setProperty('--key-background-1', 'hsl(281, 89%, 26%)');
            document.documentElement.style.setProperty('--key-shadow-1', 'hsl(285, 91%, 52%)');
            document.documentElement.style.setProperty('--key-background-2', 'hsl(176, 100%, 44%)');
            document.documentElement.style.setProperty('--key-shadow-2', 'hsl(177, 92%, 70%)');
            document.documentElement.style.setProperty('--key-background-3', 'hsl(268, 47%, 21%)');
            document.documentElement.style.setProperty('--key-shadow-3', 'hsl(290, 70%, 36%)');
            document.documentElement.style.setProperty('--text-3', 'hsl(52, 100%, 62%)');
            document.documentElement.style.setProperty('--text-2', 'hsl(198, 20%, 13%)');
            document.documentElement.style.setProperty('--text-1', 'hsl(0, 0%, 100%)');
            document.documentElement.style.setProperty('--key-background-1-pressed', 'hsl(281,81%,40%)');
            document.documentElement.style.setProperty('--key-shadow-1-pressed', 'hsl(285,100%,56%)');
            document.documentElement.style.setProperty('--key-background-2-pressed', 'hsl(176,100%,52%)');
            document.documentElement.style.setProperty('--key-shadow-2-pressed', 'hsl(176,94%,67%)');
            document.documentElement.style.setProperty('--key-background-3-pressed', 'hsl(268,45%,47%)');
            document.documentElement.style.setProperty('--key-shadow-3-pressed', 'hsl(290,64%,47%)');
            break;
    }
}

radios.forEach((radio)=>{
   radio.addEventListener('click', () =>{
       moveSelected(radio.value);
       selectTheme(radio.value);
   })
});