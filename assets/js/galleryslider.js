export function handleGalleries() {
  const galleries = document.querySelectorAll(".gallery");

  galleries.forEach((gallery) => {
    const sliderImages = gallery.querySelector(".sliderimages");
    const imageWrappers = sliderImages.querySelectorAll(".image-wrapper");
    const computedStyle = window.getComputedStyle(sliderImages);

    const positionIndicator = gallery.querySelector(".position-indicator");
    const circles = positionIndicator.querySelectorAll(".small-circle");

    // Clamp so a gallery with fewer images than the start index still works.
    let currentIndex = Math.min(
      parseInt(gallery.dataset.currentIndex, 10) || 0,
      imageWrappers.length - 1,
    );

    function changeImageLook(index) {
      imageWrappers.forEach((element, idx) => {
        const image = element.querySelector("img");
        if (idx === index) {
          image.classList.remove("faded");
        } else {
          image.classList.add("faded");
        }
      });
    }

    function centerImage(index) {
      const gap = parseFloat(computedStyle.columnGap) || 0;
      let offset = 0;

      for (let i = 0; i < index; i++) {
        const image = imageWrappers[i].querySelector("img");
        offset += image.offsetWidth + gap;
      }

      const containerWidth = sliderImages.offsetWidth;
      const currentImage = imageWrappers[index].querySelector("img");
      const currentImageWidth = currentImage.offsetWidth;
      offset = containerWidth / 2 - currentImageWidth / 2 - offset;

      imageWrappers.forEach((element, idx) => {
        const image = element.querySelector("img");
        const initialWidth = image.offsetWidth;
        const scaleFactor = 0.8;
        const actualWidth = initialWidth * scaleFactor;

        let translateXValue = offset;

        if (idx === index) {
          element.style.transform = `translateX(${offset}px)`;
        } else if (idx === index - 1 || idx === index + 1) {
          const direction = idx < index ? -1 : 1;

          translateXValue += direction * (actualWidth / 2 - initialWidth / 2);

          element.style.transform = `translateX(${translateXValue}px)`;
        } else {
          element.style.transform = `translateX(${offset}px)`;
        }
      });
    }

    function indicatePosition(index) {
      circles.forEach((circle, idx) => {
        if (idx === index) {
          circle.classList.add("active");
        } else {
          circle.classList.remove("active");
        }
      });
    }

    function slide(direction) {
      currentIndex =
        (currentIndex + direction + imageWrappers.length) %
        imageWrappers.length;
      changeImageLook(currentIndex);
      centerImage(currentIndex);
      indicatePosition(currentIndex);
    }

    function setIndex(index) {
      currentIndex = index;
      changeImageLook(currentIndex);
      centerImage(currentIndex);
      indicatePosition(currentIndex);
    }

    gallery
      .querySelector(".prev-button")
      .addEventListener("click", () => slide(-1));
    gallery
      .querySelector(".next-button")
      .addEventListener("click", () => slide(1));

    // Re-center without animating, for layout changes rather than navigation.
    function recenter() {
      sliderImages.classList.add("no-transition");
      centerImage(currentIndex);
      void sliderImages.offsetWidth; // flush styles so the jump is not animated
      sliderImages.classList.remove("no-transition");
    }

    changeImageLook(currentIndex);
    recenter();
    indicatePosition(currentIndex);

    // Images have no width until they load, so the offsets computed above are
    // wrong on a cold load. Re-center whenever an image or the container
    // changes size (image load, window resize).
    const resizeObserver = new ResizeObserver(recenter);
    resizeObserver.observe(sliderImages);
    imageWrappers.forEach((element) => {
      resizeObserver.observe(element.querySelector("img"));
    });

    circles.forEach((circle, idx) => {
      circle.addEventListener("click", () => setIndex(idx));
    });

    // Lets the image overlay move the slider while it steps through images.
    gallery.addEventListener("gallery:set-index", (event) =>
      setIndex(event.detail),
    );
  });
}
