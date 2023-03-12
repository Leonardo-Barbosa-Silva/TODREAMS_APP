window.addEventListener("scroll", () => {
    const header = document.querySelector(".header-container")
    if (window.scrollY > 30) {
        header.classList.add("header-scrolled")
    } else {
        header.classList.remove("header-scrolled")
    }
})