document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('menu-toggle');
    const menu = document.getElementById('mobile-menu');
    const lines = document.querySelectorAll('.line');

    btn.addEventListener("click", () => {
        const isHidden = menu.classList.contains("hidden");
        menu.classList.toggle("hidden");
        btn.setAttribute("aria-expanded", isHidden ? "true" : "false");
        menu.setAttribute("aria-hidden", isHidden ? "false" : "true");
        lines[0].classList.toggle('rotate-45');
        lines[0].classList.toggle('translate-y-1.5');
        lines[1].classList.toggle('opacity-0');
        lines[2].classList.toggle('-rotate-45');
        lines[2].classList.toggle('-translate-y-1.5');
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth >= 768) {
            menu.classList.add("hidden");
            menu.setAttribute("aria-hidden", "true");
            btn.setAttribute("aria-expanded", "false");
            lines[0].classList.remove('rotate-45', 'translate-y-1.5');
            lines[1].classList.remove('opacity-0');
            lines[2].classList.remove('-rotate-45', '-translate-y-1.5');
        }
    });
});