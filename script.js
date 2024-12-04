document.addEventListener('DOMContentLoaded', () => {
    // Toggle the menu when the hamburger icon is clicked
    const navButtons = document.querySelector('.nav-buttons');
    const hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        if (navButtons.classList.contains('collapsed')) {
            navButtons.classList.remove('collapsed');
            navButtons.classList.add('expanded');
        } else {
            navButtons.classList.remove('expanded');
            navButtons.classList.add('collapsed');
        }
    });

    // Collapse the menu on outside click or scroll
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
});
