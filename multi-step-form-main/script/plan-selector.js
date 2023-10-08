const planRadio = document.querySelectorAll('input[name="plan-radio"]');
const planValues = [9,12,15], addonValues = [1,2,2];
let yearly = false;
let planIndex = 1;
let total = 9;

function updateFinalPrices(){
    const planTitles = ["Arcade", "Advanced", "Pro"], addonNames = ["Online Service", "Larger Storage", "Customizable Profile"];
    const finalPlanTitle = document.getElementsByClassName("plan-type-title");
    const finalPlanPrice = document.getElementsByClassName("plan-type-price");
    const addons = document.querySelectorAll('input[name="addons"]');
    const list = document.getElementsByClassName("addon-list-container");
    while(list[0].firstChild){
        list[0].removeChild(list[0].firstChild);
    }

    let numbers = [];
    for(let i of [0,1,2]){
        if(addons[i].checked){
            numbers.push(i);
        }
    }

    const hr = document.getElementById("final-hr");
    if(numbers.length == 0){

        hr.style.display = "none";
    }else{
        hr.style.display = "block";
    }

    total = planValues[planIndex - 1];
    for(let i of numbers){
        let _li = document.createElement('li');
        _li.classList = "addon-list-item";
        let _type = document.createElement('p');
        _type.innerHTML = addonNames[i];
        _type.classList = "addon-type";
        let _price = document.createElement('p');
        if(yearly) {
            _price.innerHTML = `$${addonValues[i] * 10}/yr`;
        }else{
            _price.innerHTML = `$${addonValues[i]}/mo`;
        }
        _price.classList = "addon-price";
        _li.appendChild(_type);
        _li.appendChild(_price);
        list[0].appendChild(_li);
        total += addonValues[i];
    }

    let planTitle = `${planTitles[planIndex - 1]}`;
    const totalText = document.getElementsByClassName("total-text");
    const totalPrice = document.getElementsByClassName("total-price");
    if(yearly){
        total *= 10;
        planTitle += " (Yearly)";
        finalPlanPrice[0].innerHTML = `$${planValues[planIndex - 1] * 10}/yr`;
        totalText[0].innerHTML = "Total (per year)"
        totalPrice[0].innerHTML = `$${total}/yr`;
    }else{
        planTitle += " (Monthly)";
        finalPlanPrice[0].innerHTML = `$${planValues[planIndex - 1]}/mo`;
        totalText[0].innerHTML = "Total (per month)"
        totalPrice[0].innerHTML = `$${total}/mo`;
    }
    finalPlanTitle[0].innerHTML = planTitle;
}

function updatePlanPrices(){
    const planTypePrices = document.getElementsByClassName("step-2-radio-price");
    const freeMonths = document.getElementsByClassName("step-2-free-months");
    const addonPrices = document.getElementsByClassName("step-3-addon-price");

    if(yearly) {
        for (const element of freeMonths) {
            element.style.display = "block";
        }
        for (let i of [0, 1, 2]) {
            planTypePrices[i].innerHTML = `$${planValues[i] * 10}/yr`;
            addonPrices[i].innerHTML = `$${addonValues[i] * 10}/yr`;
        }
    }
    else{
        for(const element of freeMonths){
            element.style.display = "none";
        }
        for(let i of [0,1,2]){
            planTypePrices[i].innerHTML = `$${planValues[i]}/mo`;
            addonPrices[i].innerHTML = `$${addonValues[i]}/mo`;
        }
    }
}

function switchPlanType(){
    yearly = !yearly;
    updatePlanPrices();
    updateFinalPrices();
}

function switchPlan(value){
    planIndex = parseInt(value);
    updateFinalPrices();
}

for (const button of planRadio) {
    button.addEventListener('change', function () {
        switchPlan(button.value);
    });
}