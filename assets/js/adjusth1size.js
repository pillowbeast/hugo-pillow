export function adjustH1Size() {
    const title = document.querySelector('h1');
    const maxLength = 12; // Adjust this threshold as needed
    const scaleFactor = 0.2; // Adjust size reduction per extra character
    const textLength = title.textContent.length;
    const baseFontSize = window.innerWidth < 900 ? 6.3 : 18.2;

    // Calculate new font size
    const newFontSize = Math.max(
        baseFontSize - scaleFactor * Math.max(0, textLength - maxLength),
        6 // Minimum font size in `rem`
    );

    // Apply the calculated font size
    title.style.fontSize = `${newFontSize}rem`;
}

