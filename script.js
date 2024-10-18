const closeButton = document.getElementById("close-nav")
const openButton =document.getElementById('open-nav')
const navBar = document.getElementById("nav-bar")
closeButton.addEventListener("click", ()=>{
    navBar.style.display="none"
})
openButton.addEventListener("click", ()=>{
    navBar.style.display= "flex"
})