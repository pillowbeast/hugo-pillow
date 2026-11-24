export function handleOverlay() {
    const overlay = document.getElementById('image-overlay');
    const overlayImage = document.getElementById('overlay-image');

    // The page image currently shown in the overlay, null while it is closed.
    let currentImage = null;

    function showImage(image) {
        currentImage = image;
        overlayImage.src = image.src;
        overlay.style.display = 'flex';
    }

    function closeOverlay() {
        overlay.style.display = 'none';
        currentImage = null;
    }

    // Move to the neighbouring image of the same gallery, wrapping at the ends.
    // Images outside a gallery have no neighbours, so nothing happens.
    function step(direction) {
        const gallery = currentImage.closest('.gallery');
        if (!gallery) return;

        const images = [...gallery.querySelectorAll('.image-wrapper img')];
        const index =
            (images.indexOf(currentImage) + direction + images.length) %
            images.length;

        showImage(images[index]);
        // Keep the slider underneath on the same image.
        gallery.dispatchEvent(
            new CustomEvent('gallery:set-index', { detail: index }),
        );
    }

    document
        .querySelector('main')
        .querySelectorAll('img:not(.no-overlay)')
        .forEach((image) => {
            image.addEventListener('click', () => showImage(image));
        });

    overlay.addEventListener('click', closeOverlay);

    document.addEventListener('keydown', (event) => {
        if (!currentImage) return;

        if (event.key === 'Escape') {
            closeOverlay();
        } else if (event.key === 'ArrowLeft') {
            event.preventDefault();
            step(-1);
        } else if (event.key === 'ArrowRight') {
            event.preventDefault();
            step(1);
        }
    });
}
