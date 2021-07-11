import './slider.css';

function hideImage(image) {
  image.classList.add('hidden');
}

function hideImages() {
  const images = document.querySelectorAll('.slider-image');
  images.forEach((image) => hideImage(image));
}

function displayImage(image) {
  image.classList.remove('hidden');
}

function setActiveImage(id) {
  const image = document.querySelector(`img[data-img-id="${id}"]`);
  hideImages();
  displayImage(image);
}

function setActiveDot(id) {
  const dot = document.querySelector(
    `.slider-dot-buttons > [data-dot-id="${id}"]`
  );
  dot.classList.add('active');
}

function deactivateDots() {
  const dots = document.querySelectorAll('.slider-dot-buttons > *');
  dots.forEach((dot) => dot.classList.remove('active'));
}

function getRandomNumber(max) {
  return Math.floor(Math.random() * max) + 1;
}

function getActiveImageId() {
  const activeImage = document.querySelector('.slider-image:not(.hidden)');
  return +activeImage.dataset.imgId;
}

function activateArrowButtons() {
  const buttons = document.querySelectorAll('.slider-arrow-buttons > *');
  const [left, right] = buttons;
  left.addEventListener('click', () => {
    deactivateDots();
    if (getActiveImageId() > 1) {
      const activeImageId = getActiveImageId() - 1;
      setActiveImage(activeImageId);
      setActiveDot(activeImageId);
    } else {
      setActiveImage(3);
      setActiveDot(3);
    }
  });
  right.addEventListener('click', () => {
    deactivateDots();
    if (getActiveImageId() < 3) {
      const activeImageId = getActiveImageId() + 1;
      setActiveImage(activeImageId);
      setActiveDot(activeImageId);
    } else {
      setActiveImage(1);
      setActiveDot(1);
    }
  });
}

function activateDots() {
  const dots = document.querySelectorAll('.slider-dot-buttons > *');
  dots.forEach((dot) => {
    dot.addEventListener('click', () => {
      deactivateDots();
      const { dotId } = dot.dataset;
      setActiveImage(dotId);
      setActiveDot(dotId);
    });
  });
}

function activateSlider() {
  const initialRandomNumber = getRandomNumber(3);
  setActiveImage(initialRandomNumber);
  setActiveDot(initialRandomNumber);
  activateArrowButtons();
  activateDots();
  setInterval(() => {
    deactivateDots();
    const randomNumber = getRandomNumber(3);
    setActiveImage(randomNumber);
    setActiveDot(randomNumber);
  }, 5000);
}

export default activateSlider;
