const celciusE1 = document.getElementById("Celcius");
const fahrenheitE1 = document.getElementById("Fahrenheit");
const kelvinE1 = document.getElementById("Kelvin");

let btn = document.querySelector(".button button");

function computeTemp(event) {
    const currentValue = event.target.value;

    switch (event.target.name) {
        case "Celcius":
            fahrenheitE1.value = (currentValue * 9 / 5) + 32;
            kelvinE1.value = parseFloat(currentValue) + 273.15;
            break;

        case "Fahrenheit":
            celciusE1.value = (currentValue - 32) * 5 / 9;
            kelvinE1.value = (currentValue - 32) * 5 / 9 + 273.15;
            break;

        case "Kelvin":
            celciusE1.value = currentValue - 273.15;
            fahrenheitE1.value = (currentValue - 273.15) * 9 / 5 + 32;
            break;

        default:
            break;
    }

    btn.addEventListener("click", ()=>{
        celciusE1.value = ""
        fahrenheitE1.value = ""
        kelvinE1.value = ""
    })
}
