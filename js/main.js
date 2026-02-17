document.addEventListener("DOMContentLoaded", () => {
    fetch("components/navbar.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("page-header").innerHTML = data;
        setActiveLink();
    })
    .catch(error => console.error("Navbar failed to load:", error));
});

function setActiveLink() {
    const currentPage = window.location.pathname.split("/").pop();

    if (currentPage === "") {
        currentPage = "index.html";
    }

    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {
        const linkPage = link.getAttribute("href");

        if (linkPage === currentPage) {
            link.classList.add("active");
        }
    });
}