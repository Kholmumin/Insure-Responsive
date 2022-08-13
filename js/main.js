let elBtn = document.querySelector(".open");
let elHeader = document.querySelector(".site-header");

elBtn.addEventListener("click", function(){
    elHeader.classList.toggle("header-active")
})
