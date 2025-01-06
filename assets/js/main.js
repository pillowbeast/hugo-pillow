import { toggleMenu, markActiveMenu } from './menu.js';
import { handleGalleries } from './galleryslider.js';
import { handleMoveButtons } from './moveButtons.js';
import { handleOverlay } from './overlay.js';
import { adjustH1Size } from './adjusth1size.js';

console.log('Menu module loaded');

function attachToggles() {
    const toggleButton = document.querySelector('.dark-mode-toggle');
    const toggleImage = document.getElementById('dark-mode-toggle-img');

    // Get the paths from data attributes
    const moonIcon = toggleImage.getAttribute('data-moon');
    const sunIcon = toggleImage.getAttribute('data-sun');

    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark');
        toggleImage.src = moonIcon;
    } else {
        toggleImage.src = sunIcon;
    }

    toggleMenu();
    toggleButton.addEventListener('click', () => {
        const isDarkMode = document.body.classList.toggle('dark');
        localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
        toggleImage.src = isDarkMode ? moonIcon : sunIcon;
    });
}


document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark');
    }
    
    markActiveMenu();
    attachToggles();
    handleMoveButtons();
    handleGalleries();
    handleOverlay();
    adjustH1Size();
});
