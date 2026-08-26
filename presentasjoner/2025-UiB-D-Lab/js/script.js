// Meny for mobil
function toggleMenu() {
    document.getElementById("mobileMenu").classList.toggle("open");
}

// Intersection Observer for innholdsfortegnelsen (TOC)
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".prose section[id], .prose div.chapter-divider[id]");
    const navLinks = document.querySelectorAll(".toc-list a");
    const topLinks = document.querySelectorAll(".top-link");

    const observerOptions = {
        root: null,
        rootMargin: "-100px 0px -60% 0px", 
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute("id");
                
                // Oppdater TOC sidebar
                navLinks.forEach(link => {
                    link.classList.remove("active");
                    if (link.getAttribute("href") === `#${id}`) {
                        link.classList.add("active");
                    }
                });

                // Oppdater Top Nav for kapitler
                if(id.startsWith('kap-')) {
                    topLinks.forEach(link => {
                        link.classList.remove("active");
                        if (link.getAttribute("href") === `#${id}`) {
                            link.classList.add("active");
                        }
                    });
                }
            }
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));
});
