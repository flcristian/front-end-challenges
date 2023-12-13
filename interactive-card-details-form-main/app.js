let bCardNumber = "0000000000000000"
let bCardholderName = "jane appleseed"
let bExpiryMonth = "00"
let bExpiryYear = "00"
let bCvv = "000"

let cardNumber = bCardNumber
let cardholderName = bCardholderName
let expiryMonth = bExpiryMonth
let expiryYear = bExpiryYear
let cvv = bCvv

let complete = false

function addGap(value){
    let result = "";
    for(let i = 0;i<value.length;i++){
        result += value[i];
        if(i % 4 === 3){
            result += " ";
        }
    }
    return result;
}

function cardFront(){
    let html =
        `<section class="card-front">
            <img class="card-icon" src="images/card-logo.svg" alt="">
            <h1 class="card-number">${addGap(cardNumber)}</h1>
            <section class="front-card-container">
                <p class="cardholder-name">${cardholderName.toUpperCase()}</p>
                <p class="expiry-date">${expiryMonth}/${expiryYear}</p>
            </section>
        </section>`

    return html;
}

function cardBack() {
    let html =
        `<section class="card-back">
            <p class="cvv">${cvv}</p>
        </section>`;

    return html;
}

function cards(){
    let cardContainer = document.querySelector(".card-display-container");
    cardContainer.innerHTML = cardBack();
    cardContainer.innerHTML += cardFront();
}

function form(){
    let formContainer = document.querySelector(".form-container");
    let html =
        `<section class="primary-credentials-container">
            <section class="name-container">
                <label for="name">CARDHOLDER NAME</label>
                <input type="text" placeholder="e.g. Jane Appleseed" id="name">
                <p style="display:none" class="alert-message" id="name-alert"></p>
            </section>
            <section class="number-container">
                <label for="number">CARD NUMBER</label>
                <input type="text" placeholder="e.g. 1234 5678 9123 0000" id="number">
                <p style="display:none" class="alert-message" id="number-alert"></p>
            </section>
        </section>
        <section class="secondary-credentials-container">
            <section class="expiry-date-container">
                <label for="month">EXP. DATE (MM/YY)</label>
                <section class="month-year-container">
                    <input type="text" placeholder="MM" id="month">
                    <input type="text" placeholder="YY" id="year">
                </section>
                <p style="display:none" class="alert-message" id="expiry-date-alert"></p>
            </section>
            <section class="cvv-container">
                <label for="cvv">CVV</label>
                <input type="text" placeholder="e.g. 123" id="cvv">
                <p style="display:none" class="alert-message" id="cvv-alert"></p>
            </section>
        </section>
        <input type="button" value="Confirm" style="margin:20px 20px 0 20px" id="continue">`;

    formContainer.innerHTML = html;
    formContainer.style.alignItems = "normal";
    formContainer.style.gap = "0";
}

function final(){
    let formContainer = document.querySelector(".form-container");
    let html =
        `<img style="max-width:60px" src="images/icon-complete.svg" alt="">
         <h1 class="final-title">THANK YOU!</h1>
         <p class="final-paragraph">We've added your card details</p>
         <input type="button" value="Confirm" style="margin:20px 20px 0 20px" id="continue">`;

    formContainer.innerHTML = html;
    formContainer.style.alignItems = "center";
    formContainer.style.gap = "20px";
}

function inputsAreValid(){
    let valid = true
    let name = document.querySelector("#name")
    let cardNumber = document.querySelector("#number");
    let month = document.querySelector("#month")
    let year = document.querySelector("#year")
    let cvv = document.querySelector("#cvv")

    let nameAlert = document.querySelector("#name-alert")
    let numberAlert = document.querySelector("#number-alert")
    let expiryDateAlert = document.querySelector("#expiry-date-alert")
    let cvvAlert = document.querySelector("#cvv-alert")

    if(name.value.trim() === ""){
        nameAlert.textContent = "Must contain a value!"
        nameAlert.style.display = "block"
        name.classList.add("alert")
        valid = false
    }
    else if(name.value.length > 25){
        nameAlert.textContent = "Maximum length of 25 characters"
        nameAlert.style.display = "block"
        name.classList.add("alert")
        valid = false
    }
    else{
        nameAlert.style.display = "none"
        name.classList.remove("alert")
    }

    if(cardNumber.value.trim() === ""){
        numberAlert.textContent = "Must contain a value!"
        numberAlert.style.display = "block"
        cardNumber.classList.add("alert")
        valid = false
    }
    else if(!/^[0-9]+$/.test(cardNumber.value.trim())){
        numberAlert.textContent = "Must contain only numbers!"
        numberAlert.style.display = "block"
        cardNumber.classList.add("alert")
        valid = false
    }
    else if(cardNumber.value.trim().length !== 16){
        numberAlert.textContent = "Must have a length of 16!"
        numberAlert.style.display = "block"
        cardNumber.classList.add("alert")
        valid = false
    }
    else{
        numberAlert.style.display = "none"
        cardNumber.classList.remove("alert")
    }

    console.log(parseInt(month.value));
    console.log(parseInt(year.value));
    if(parseInt(month.value) > 12 || parseInt(month.value) < 0 || parseInt(year.value) > 99 || parseInt(year.value) < 23 || month.value.trim().length !== 2 || year.value.trim().length !== 2) {
        expiryDateAlert.textContent = "Invalid expiry date!"
        expiryDateAlert.style.display = "block"
        month.classList.add("alert")
        year.classList.add("alert")
        valid = false
    }
    else{
        expiryDateAlert.style.display = "none"
        month.classList.remove("alert")
        year.classList.remove("alert")
    }

    if(!/^[0-9]+$/.test(cvv.value.trim()) || cvv.value.trim().length !== 3){
        cvvAlert.textContent = "Invalid cvv!"
        cvvAlert.style.display = "block"
        cvv.classList.add("alert")
        valid = false
    }
    else{
        cvvAlert.style.display = "none"
        cvv.classList.remove("alert")
    }

    return valid;
}

function continueButton(){
    const button = document.querySelector("#continue");

    button.addEventListener('click', () => {
       if(!complete && inputsAreValid()){
           final();
           complete = true
       }
    });
}

function replaceCharacters(original, replacement){
    if(replacement.length >= original.length){
        return replacement.slice(0, original.length);
    }
    else{
        return replacement + original.substring(replacement.length);
    }
}

function interactiveCards(){
    let inputName = document.querySelector("#name")
    let inputCardNumber = document.querySelector("#number");
    let inputMonth = document.querySelector("#month")
    let inputYear = document.querySelector("#year")
    let inputCvv = document.querySelector("#cvv")

    inputName.addEventListener('input', () => {
        inputName.value.trim() === "" || inputName.value.length > 25 ? cardholderName = bCardholderName : cardholderName = inputName.value;
        cards();
    })

    inputCardNumber.addEventListener('input', () => {
        inputCardNumber.value.trim() === "" ? cardNumber = bCardNumber : cardNumber = replaceCharacters(cardNumber, inputCardNumber.value.toUpperCase());
        cards();
    })

    inputMonth.addEventListener('input', () => {
        inputMonth.value.trim() === "" ? expiryMonth = bExpiryMonth : expiryMonth = replaceCharacters(expiryMonth, inputMonth.value.toUpperCase());
        cards();
    })

    inputYear.addEventListener('input', () => {
        inputYear.value.trim() === "" ? expiryYear = bExpiryYear : expiryYear = replaceCharacters(expiryYear, inputYear.value.toUpperCase());
        cards();
    })

    inputCvv.addEventListener('input', () => {
        inputCvv.value.trim() === "" ? cvv = bCvv : cvv = replaceCharacters(cvv, inputCvv.value.toUpperCase());
        cards();
    })
}

function app(){
    cards()
    form()
    continueButton()
    interactiveCards()
}

app();
