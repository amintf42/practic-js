let circle = document.querySelector(".circle");
let flag = true;

function changecolor(){
    if(flag){
        circle.style.background = "green";        
        flag = false;
    }else{
        circle.style.background = "red"
        flag = true;
    }
}

function trackcircle(evt){
    let clientX = evt.clientX;
    let clientY = evt.clientY;

    circle.style.transform = `translate(${(innerWidth-clientX)/10}px , ${(innerWidth-clientY)/10}px)`;
}


circle.addEventListener("click",changecolor);
window.addEventListener("mousemove",trackcircle);