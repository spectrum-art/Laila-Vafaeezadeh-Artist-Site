document.addEventListener('DOMContentLoaded', () => {
    // Include all relevant elements
    const elements = document.querySelectorAll('section h2, section p, section img, #book div a');

    // Intersection Observer setup
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('scrolled-in');
            }
        });
    }, { threshold: 0.1 });

    // Observe each element
    elements.forEach(element => observer.observe(element));
});

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}
