function getCurrentImage() {
	const currentImage = document.querySelector(".selected");
	return currentImage;
}

function hideCurrentImage() {
	getCurrentImage().classList.remove("selected");
}

function unselectCurrentDot() {
	const currentDot = document.querySelector(".slide-dots .selected");
	currentDot.classList.remove("selected");
}

function selectNewDot(dotIndex) {
	const newDot = document.querySelector(`[data-dot-index='${dotIndex}']`);
	newDot.classList.add("selected");
}

function displayNewImage(imageIndex) {
	const newImage = document.querySelector(
		`[data-image-index='${imageIndex}']`
	);
	newImage.classList.add("selected");
}

function getLastImageIndex() {
	const images = document.querySelectorAll(".image-frame li");
	const imageLength = images.length - 1;
	return imageLength;
}

function changeImage(moveByOne) {
	const currentImageIndex = +getCurrentImage().dataset.imageIndex;
	const lastImageIndex = getLastImageIndex();

	hideCurrentImage();
	unselectCurrentDot();

	if (currentImageIndex === 0) {
		displayNewImage(lastImageIndex);
		selectNewDot(lastImageIndex);
	} else {
		displayNewImage(currentImageIndex + moveByOne);
		selectNewDot(currentImageIndex + moveByOne);
	}
}

const moveImageBack = () => changeImage(-1);
const moveImageForward = () => changeImage(1);

function handleSlideDots({ target }) {
	if (target.className === "slide-dots") return;

	const dotSelectedIndex = +target.closest("li").dataset.dotIndex;

	unselectCurrentDot();
	selectNewDot(dotSelectedIndex);
	hideCurrentImage();
	displayNewImage(dotSelectedIndex);
}

function handleProgressBar() {
	const currentIndex = +getCurrentImage().dataset.imageIndex;

	hideCurrentImage();
	unselectCurrentDot();

	if (currentIndex === getLastImageIndex()) {
		displayNewImage(0);
		selectNewDot(0);
	} else {
		displayNewImage(currentIndex + 1);
		selectNewDot(currentIndex + 1);
	}
}

const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
const slideDots = document.querySelector(".slide-dots");

leftArrow.addEventListener("click", moveImageBack);
rightArrow.addEventListener("click", moveImageForward);
slideDots.addEventListener("click", handleSlideDots);

setInterval(handleProgressBar, 5000);
