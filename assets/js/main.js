import { toggleMenu, markActiveMenu } from './menu.js';
import { handleGalleries } from './galleryslider.js';
import { handleMoveButtons } from './moveButtons.js';
import { handleOverlay } from './overlay.js';
import { adjustH1Size } from './adjusth1size.js';
import { handleCodeCopyButton } from './code_copy_button.js';

console.log('Menu module loaded');

function attachToggles() {
    const toggleButton = document.querySelector('.dark-mode-toggle');
    const toggleImage = document.getElementById('dark-mode-toggle-img');

    // Get the paths from data attributes
    const moonIcon = toggleImage.getAttribute('data-moon');
    const sunIcon = toggleImage.getAttribute('data-sun');

    // Check system preferences
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Get code css stylesheet
    const syntaxHighlighting = document.getElementById('syntax-theme');

    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark');
        toggleImage.src = moonIcon;
        syntaxHighlighting.href = '/css/syntax_dark.css';
        document.body.classList.add('dark');
    } 
    else if (localStorage.getItem('darkMode') === 'disabled') {
        document.body.classList.remove('dark');
        toggleImage.src = sunIcon;
        syntaxHighlighting.href = '/css/syntax_light.css';
    }
    else if (prefersDarkMode) {
        toggleImage.src = moonIcon;
        localStorage.setItem('darkMode', 'enabled');
        syntaxHighlighting.href = '/css/syntax_dark.css';
        document.body.classList.add('dark');

    } else {
        toggleImage.src = sunIcon;
        localStorage.setItem('darkMode', 'disabled');
        syntaxHighlighting.href = '/css/syntax_light.css';
    }

    toggleMenu();
    toggleButton.addEventListener('click', () => {
        const isDarkMode = document.body.classList.toggle('dark');
        localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
        toggleImage.src = isDarkMode ? moonIcon : sunIcon;
        syntaxHighlighting.href = isDarkMode ? '/css/syntax_dark.css' : '/css/syntax_light.css';
    });
}


document.addEventListener('DOMContentLoaded', () => {    
    markActiveMenu();
    attachToggles();
    handleMoveButtons();
    handleGalleries();
    handleOverlay();
    adjustH1Size();
    handleCodeCopyButton();
});


// Call adjustH1Size on window resize
window.addEventListener('resize', adjustH1Size);

// Call adjustH1Size initially to set the font size on page load
adjustH1Size();