let orderimg = document.getElementById("orderimg");
let chat = document.getElementById("chat");
let chat_close = document.getElementById("chat_close");
let home_btn = document.getElementById("home_btn");
let chat_button = document.getElementById("chat_button");
let chat_input = document.getElementById("chat_input");
let chat_items = document.getElementById("chat_items");

// Menú hamburguesa
let nav_burguerbutton = document.getElementById("nav_burguerbutton");
let nav = document.getElementById("nav");

mostrarmenu=()=>{
nav.style.display="block"    
nav.classList.toggle("nav__animacion");



}

const hacerorden=()=>{
    chat.classList.toggle("chatanimacion")
}

const borrarchat=()=>{
    chat.classList.remove("chatanimacion")
}

nav_burguerbutton.addEventListener("click",mostrarmenu)
orderimg.addEventListener("click",hacerorden)
chat_close.addEventListener("click",borrarchat)
