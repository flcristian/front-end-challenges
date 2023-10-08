let step = 1;

const menu = document.querySelectorAll('input[name="menu"]');

function updateStep(current){
    const stepContainers = document.getElementsByClassName("step-container");
    const finalStep = document.getElementsByClassName("confirmation-container");
    const footer = document.getElementsByClassName("footer-container");
    finalStep[0].style.display = "none";
    footer[0].style.display = "flex";

    const currentStep = stepContainers[current-1];
    const selectedStep = stepContainers[step-1];
    const backButton = document.getElementById("back-button");

    if(step > 1){
        backButton.style.display = "block";
    }else{
        backButton.style.display = "none";
    }

    const nextButton = document.getElementById("next-button");
    if(step == 4){
        nextButton.innerHTML = "Confirm";
    }else{
        nextButton.innerHTML = "Next Step";
    }

    currentStep.style.display = "none";
    selectedStep.style.display = "flex";
}

function checkFormInputs(){
    const name = document.getElementById("user-name");
    const email = document.getElementById("user-email");
    const phone = document.getElementById("user-phone");

    return name.value && email.value && phone.value;
}

function selectStep(value) {
    const warning = document.getElementById("complete-warning");
    if(!checkFormInputs()){
        menu[0].checked = true;
        warning.style.display = "block";
        setTimeout(function() {
            warning.style.opacity = "100%";
        }, 100);
        return;
    }else{
        warning.style.display = "none";
    }

    current = step;
    step = parseInt(value);
    menu[step-1].checked = true;
    updateStep(current);
}

function previousStep(){
    if(step == 1) return;
    selectStep(step - 1);
}

function finishSubscription(){
    const stepContainers = document.getElementsByClassName("step-container");
    const finalStep = document.getElementsByClassName("confirmation-container");
    const footer = document.getElementsByClassName("footer-container");
    const menuSelector = document.getElementsByClassName("menu-container");
    stepContainers[3].style.display = "none";
    footer[0].style.display = "none";
    finalStep[0].style.display = "flex";
    menuSelector[0].style.pointerEvents = "none";
}

function nextStep(){
    if(step == 4){
        finishSubscription();
        return;
    }
    selectStep(step + 1);
}

for (const button of menu) {
    button.addEventListener('change', function () {
        selectStep(button.value);
    });
}
