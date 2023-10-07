let open_menu = document.querySelector(".menu-icon");
let close_menu = document.querySelector(".close-icon");
let btns = document.querySelector(".btns");
let nav = document.getElementById("nav");
let list = document.getElementById("list");
let overlay = document.querySelector(".overlay");

open_menu.addEventListener("click" , ()=> {
    nav.classList.add("active");
    btns.classList.add("active");
    list.classList.add("active");
    overlay.classList.add("show");
})

close_menu.addEventListener("click" , ()=> {
    nav.classList.remove("active");
    btns.classList.remove("active");
    list.classList.remove("active");
    overlay.classList.remove("show");
})