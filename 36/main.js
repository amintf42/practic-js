// dom node
let input = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let span = document.getElementById("count");
let = index = 0;


// function
function addstudent() {
    let inputvalue = input.value;
    if (inputvalue) {
        input.classList.remove()
        let li = document.createElement("li");
        let deletebtn = document.createElement("button");
        deletebtn.addEventListener("click", removeStudent);
        deletebtn.textContent = "Delete";
        let text = document.createTextNode(inputvalue);
        li.appendChild(text);
        li.appendChild(deletebtn);
        ul.appendChild(li);
        input.value = "";
        input.focus();
        index++;
        span.textContent = index;
    } else {
        input.classList.add("err");
    }
}

function showChar(e) {
    if (e.which === 13) {
        addstudent();
    }
}


function removeStudent() {
    let li = this.parentElement;
    li.remove();
    index--;
    span.textContent = index;
}


// event
btn.addEventListener("click", addstudent);
input.addEventListener("keypress", showChar);
