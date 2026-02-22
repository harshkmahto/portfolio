AOS.init();
let lastScrollTop = 0;
const navbar = document.querySelector("nav");
const scrollBtn = document.querySelector(".top");


window.addEventListener("scroll", function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scrolling Down
        navbar.style.top = "-80px";
    } else {
        // Scrolling Up
        navbar.style.top = "0";
    }

    lastScrollTop = scrollTop;
});

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollBtn.classList.add("show");
    } else {
        scrollBtn.classList.remove("show");
    }
});

// Scroll to top when clicked
scrollBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});