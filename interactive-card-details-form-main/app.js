let cardNumber = "0000000000000000"
let cardholderName = "jane appleseed"
let expiryMonth = "00"
let expiryYear = "00"
let cvv = "000"

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

cards();