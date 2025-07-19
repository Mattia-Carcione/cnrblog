import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
    once: true,
    duration: 800,
});

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form[role='search']");
    const input = document.querySelector("#search-input");

    if (form && input) {
        form.addEventListener("submit", (e) => {
            if (!input.value.trim()) {
                e.preventDefault();
            }
        });
    }
});