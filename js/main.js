document.addEventListener("DOMContentLoaded", () => {
    fetch("components/navbar.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("page-header").innerHTML = data;
        setActiveLink();
    });
});

function setActiveLink() {
    const currentPage = window.location.pathname.split("/").pop();

    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {
        const linkPage = link.getAttribute("href");

        if (linkPage === currentPage) {
            link.classList.add("active");
        }
    });
}