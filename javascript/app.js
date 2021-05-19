console.log("hello")

let navlist = document.querySelector(".navlist");
let hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", () =>{
    navlist.classList.toggle("show");
})
