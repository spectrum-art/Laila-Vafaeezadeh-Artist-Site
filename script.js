document.addEventListener('DOMContentLoaded', () => {
    const navButtons = document.querySelector('.nav-buttons');
    const hamburger = document.querySelector('.hamburger');
    const elements = document.querySelectorAll('section h2, section p, section img, #book div a');

    // Set initial state for the navigation menu to collapsed
    navButtons.classList.add('collapsed');

    // Toggle the navigation menu when the hamburger icon is clicked
    hamburger.addEventListener('click', () => {
        if (navButtons.classList.contains('collapsed')) {
            navButtons.classList.remove('collapsed');
            navButtons.classList.add('expanded');
        } else {
            navButtons.classList.remove('expanded');
            navButtons.classList.add('collapsed');
        }
    });

    // Collapse the menu when clicking outside of it or scrolling
    document.addEventListener('click', (event) => {
        if (
            navButtons.classList.contains('expanded') &&
            !navButtons.contains(event.target) &&
            !hamburger.contains(event.target)
        ) {
            navButtons.classList.remove('expanded');
            navButtons.classList.add('collapsed');
        }
    });

    window.addEventListener('scroll', () => {
        if (navButtons.classList.contains('expanded')) {
            navButtons.classList.remove('expanded');
            navButtons.classList.add('collapsed');
        }
    });

    // Setup IntersectionObserver for fade-in animations
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('scrolled-in');
                observer.unobserve(entry.target); // Stop observing once it's visible
            }
        });
    }, { threshold: 0.1 });

    // Observe each element for fade-in animation
    elements.forEach(element => observer.observe(element));
});
