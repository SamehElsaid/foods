let menu = document.querySelector(".container .menu")
menu.addEventListener("click", function (e) {
    document.querySelector("header nav").classList.toggle("active")
    menu.classList.toggle("color")

})
let prof = document.querySelector(".fa-user")
prof.addEventListener("click",function(){
    document.querySelector(".containerProf").classList.toggle("openProf")
})


function loader(){
    document.querySelector(".loader").style.display ="none"
}
function fadeOut(){
    setInterval(loader ,1000)
}

window.onload = fadeOut()

window.addEventListener("scroll",  function(){
    document.querySelector("header").classList.toggle("scroll"
    ,window.scrollY > 300)
    console.log("ss")
})