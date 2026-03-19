// FAQ
document.querySelectorAll(".faq-item button").forEach(btn => {
    btn.addEventListener("click", () => {
        const p = btn.nextElementSibling;
        p.style.display = p.style.display === "block" ? "none" : "block";
    });
});

// NAVBAR SCROLL
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    header.classList.toggle("scrolled", window.scrollY > 50);
});

function scrollToSection() {
    document.querySelector(".stats").scrollIntoView({
        behavior: "smooth"
    });
}
