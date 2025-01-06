export function adjustH1Size() {
    const title = document.querySelector('h1');
    const maxLength = 12; // Adjust this threshold as needed
    const baseFontSize = 18.2; // Base font size in `rem`
    const scaleFactor = 0.2; // Adjust size reduction per extra character

    const textLength = title.textContent.length;

    // Calculate new font size
    const newFontSize = Math.max(
        baseFontSize - scaleFactor * Math.max(0, textLength - maxLength),
        6 // Minimum font size in `rem`
    );

    // Apply the calculated font size
    title.style.fontSize = `${newFontSize}rem`;
};
