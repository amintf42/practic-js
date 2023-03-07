input = document.querySelector("input")
button = document.querySelector("button")
err = document.querySelector(".err")

function checkmobile(e) {
    e.preventDefault();
    let phone = input.value;
    let result = phone.match(/09[0-9]{9}/);
    if (result) {
        input.style.border = "3px solid green"
        err.textContent = ""

    } else {
        input.style.border = "3px solid red"
        err.textContent = "Please enter the correct phone number!!!"
    }
}

button.addEventListener("click",checkmobile);