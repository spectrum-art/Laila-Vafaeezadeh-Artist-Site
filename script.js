
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('section h2, section p, section img');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('scrolled-in');
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(element => observer.observe(element));
});

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}
