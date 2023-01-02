// dom node
let input = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let span = document.getElementById("count");
let = index = 0;


// function
function addstudent() {
    let inputvalue = input.value;
    let li = document.createElement("li");
    let deletebtn = document.createElement("button");
    deletebtn.textContent = "Delete";
    let text = document.createTextNode(inputvalue);
    li.appendChild(text);
    li.appendChild(deletebtn);
    ul.appendChild(li);
    index++;
    span.textContent = index;
}



// event
btn.addEventListener("click", addstudent);