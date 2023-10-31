const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon");
const navbar = document.querySelector(".navbar");

function closeNavbar() {
    menuIcon.style.display = "flex";
    closeIcon.style.display = "none";
    navbar.style.display = "none";
}

const navLinks = navbar.querySelectorAll("a");

navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        
        navLinks.forEach((navLink) => {
            navLink.classList.remove("active");
        });

        link.classList.add("active");

        const targetId = link.getAttribute("href").substring(1); 
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: "smooth",
            });
        }

        closeNavbar();
    });
});

menuIcon.addEventListener("click", () => {
    menuIcon.style.display = "none";
    closeIcon.style.display = "flex";
    navbar.style.display = "flex";
});

closeIcon.addEventListener("click", closeNavbar);
