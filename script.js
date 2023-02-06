let btn = document.querySelector(".clr")
let btn1 = document.querySelector(".clr1")
let btn2 = document.querySelector(".clr2")
let btn3 = document.querySelector(".clr3")
let img = document.querySelector("#img")
let txt = document.querySelector(".smth")

btn1.onclick = () => {
        img.src = "./img/GOLD.jfif"
        txt.innerHTML = "Color - Gold"

}
btn.onclick = () => {
    img.src = "./img/PURPLE.jfif"
    txt.innerHTML = "Color - Deep Purple"

}
btn2.onclick = () => {
    img.src = "./img/SILVER.jfif"
    txt.innerHTML = "Color - Silver"

}
btn3.onclick = () => {
    img.src = "./img/BLACK.jfif"
    txt.innerHTML = "Color - Space Black"

}


    