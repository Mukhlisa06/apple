let btn = document.querySelector(".clr")
let btn1 = document.querySelector(".clr1")
let btn2 = document.querySelector(".clr2")
let btn3 = document.querySelector(".clr3")
let img = document.querySelector("#img")
let txt = document.querySelector(".smth")

 btn1.onclick = () => {
        img.src = "./img/GOLD.jfif"
}
btn.onclick = () => {
    img.src = "./img/PURPLE.jfif"
   

}
btn2.onclick = () => {
    img.src = "./img/SILVER.jfif"

}
btn3.onclick = () => {
    img.src = "./img/BLACK.jfif"
   

}

btn.onmouseenter = () => {
    txt.innerHTML = "Color - Deep Purple"
}
btn1.onmouseenter = () => {
    txt.innerHTML = "Color - Gold"
}
btn2.onmouseenter = () => {
    txt.innerHTML = "Color - Silver"
}
btn3.onmouseenter = () => { 
    txt.innerHTML = "Color - Space Black"
}

let windowLinks = document.querySelectorAll(".window_link");
let body = document.querySelector("body");
let lock = document.querySelectorAll(".")

let unclock = true
    
const timeout = 800;

if(windowLinks.length > 0) {
    for(let index = 0; index < windowLinks.length; index++) {
        const windowLinks = windowLinks[index];
        windowLinks.addEventListener("click", function (e) {
            let windowName = windowLinks.getAttribute("href").replace("#", " ");
            let curentWindow = document.getElementById(windowName);
            windowOpen(curentWindow);
            e.preventDefault();
        })
    } 
}

const windowCloseIcon =document.querySelectorAll(".close_window");
if(windowCloseIcon.length > 0) {
    for (let index =  0; index < windowCloseIcon.length; index++) {
        const el = windowCloseIcon[index];
        el.addEventListener("click" , function (e){
            windowClose(el.closest(".window"));
            e.preventDefault()
        })
    }
}
function windowOpen(curentWindow) {
    if(curentWindow && unclock) {
        const windowActive = document.querySelector(".window.open");
        if(windowActive){
            windowClose(windowActive, false)
        } else {
            bodyLock()
        }
        curentWindow.classList.add("open");
         curentWindow.addEventListener("click", function (e) {
            if (!e.target.closest(".window_content")) {
                windowClose(e.target.closest(".window"))
            }
         })
    }
}

function windowClose(windowActive, doUnclock = true){
    if(unclock) {
        windowActive.classList.remove("open");
        if(doUnclock){
            bodyUnLock()
        }
    }
}