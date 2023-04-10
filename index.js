const navTobble = document.querySelector(".nav-toggle")
const navMenu = document.querySelector(".nav-menu")

navTobble.addEventListener("click", () =>{
    navMenu.classList.toggle("nav-menu_visible")
})