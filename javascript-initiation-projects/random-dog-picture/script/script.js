const image = document.getElementById("image");
const button = document.getElementById("generate");

generateImage()
button.addEventListener('click', generateImage)

function generateImage(){
    const config = {
        header : {
            "Accept" : "application/json",
        },
    };

    fetch('https://dog.ceo/api/breeds/image/random', config)
        .then((result) => result.json())
        .then((data) =>{
            image.src = data.message;
        });
}