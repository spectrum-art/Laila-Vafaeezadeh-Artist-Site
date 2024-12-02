function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

function toggleMenu() {
    const navButtons = document.querySelector('.nav-buttons');
    navButtons.classList.toggle('show');
}
