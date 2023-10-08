let obj = 0;


function radioInputs() {
    const radioInputs = document.querySelectorAll('input[name="rating"]');
    
    radioInputs.forEach(function(input) {
        input.addEventListener('change', function() {
            obj = this.value;
        });
    });
}

function submitButton(){
    const submitButton = document.getElementById("submit-button");
    submitButton.addEventListener("click", function() {
        if(obj == 0){
            const text = document.getElementById("submit-button-error");
            text.style.display = "block";
        }else{
            const rating = document.getElementById("replace-rating-value");
            const first = document.getElementById("first-state");
            const second = document.getElementById("second-state");
            rating.textContent = obj;
            first.style.display = "none";
            second.style.display = "flex";
            setTimeout(function() {
                second.style.opacity = "100%";
            }, 10);
        }
    });

}

document.addEventListener('DOMContentLoaded', radioInputs);
document.addEventListener('DOMContentLoaded', submitButton);