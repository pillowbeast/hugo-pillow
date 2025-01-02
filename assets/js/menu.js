export function toggleMenu() {
    const menuButton = document.querySelector('.menu-button');
    const nav = document.querySelector('nav');

    menuButton.addEventListener('click', () => {
        menuButton.classList.toggle('rotated');
        nav.classList.toggle('mobile-nav');
    });

}

export function markActiveMenu() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('header nav a');
    navLinks.forEach(link => {
        const linkPath = new URL(link.href).pathname;
        if (currentPath.startsWith(linkPath)) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}