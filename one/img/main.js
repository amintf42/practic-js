

let thumbs  = document.querySelectorAll(".thumbs > img");
let bigImg = document.querySelectorAll(".big > img");


function changepic(){
    for(const thumb of thumbs){
        thumb.classList.remove("border");
    }
    this.classList.add("border");
    // let thumbSrc = this.getAttribute("src");
    bigImg.setAttribute("src", this.getAttribute("src"));
    return bigImg;
}


for(const thumb of thumbs){
    thumb.onclick = changepic;
}
