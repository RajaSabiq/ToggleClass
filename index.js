const toggleBtn = document.getElementById("toggleBtn")

toggleBtn.addEventListener("click", (e)=>{
    e.preventDefault()
    console.log("Toggle btn click")
    const sideBar = document.getElementById("sideBar");
    sideBar.classList.toggle("active")
})
