document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");

    sections.forEach((section, index) => {
        section.style.opacity = 0;
        section.style.transform = "translateY(15px)";
        setTimeout(() => {
            section.style.transition = "0.6s ease";
            section.style.opacity = 1;
            section.style.transform = "translateY(0)";
        }, index * 250);
    });
});
