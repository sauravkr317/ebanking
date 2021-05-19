console.log("hello")

let navlist = document.querySelector(".navlist");
let hamburger = document.querySelector(".hamburger");
let close = document.querySelector(".close");
hamburger.addEventListener("click", () =>{
    navlist.classList.add("show");
    hamburger.style.display = "none";
    close.style.display = "block";
    close.addEventListener("click", () =>{
        navlist.classList.remove("show");
        hamburger.style.display = "block";
        close.style.display = "none";
    })
})
