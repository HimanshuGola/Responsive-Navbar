/* <i class="fa-solid fa-xmark"></i> */
const toggleBtn = document.querySelector(".mobile-nav-toggle");
const navBar = document.querySelector(".link-list")

toggleBtn.addEventListener("click", toggleMenu);

function toggleMenu(){
    let visibility = navBar.getAttribute("data-visible");
    if (visibility === "false"){
        navBar.setAttribute("data-visible","true");
        toggleBtn.setAttribute("aria-expanded","true");
        toggleBtn.firstElementChild.classList.remove("fa-bars");
        toggleBtn.firstElementChild.classList.add("fa-xmark");
        
    } else{
        navBar.setAttribute("data-visible", "false");
        toggleBtn.setAttribute("aria-expanded","false");
        toggleBtn.firstElementChild.classList.remove("fa-xmark");
        toggleBtn.firstElementChild.classList.add("fa-bars");
        
    }
}