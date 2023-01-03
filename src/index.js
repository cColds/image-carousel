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

function handleLeftArrow() {
	const images = document.querySelectorAll(".image-frame li");

	const currentImageIndex = +getCurrentImage().dataset.imageIndex;
	const lastImageIndex = images.length - 1;

	hideCurrentImage();
	unselectCurrentDot();

	if (currentImageIndex === 0) {
		displayNewImage(lastImageIndex);
		selectNewDot(lastImageIndex);
	} else {
		displayNewImage(currentImageIndex - 1);
		selectNewDot(currentImageIndex - 1);
	}
}

function handleRightArrow() {
	const images = document.querySelectorAll(".image-frame li");

	const currentImageIndex = +getCurrentImage().dataset.imageIndex;
	const lastImageIndex = images.length - 1;

	hideCurrentImage();
	unselectCurrentDot();

	if (currentImageIndex === lastImageIndex) {
		displayNewImage(0);
		selectNewDot(0);
	} else {
		displayNewImage(currentImageIndex + 1);
		selectNewDot(currentImageIndex + 1);
	}
}

function handleSlideDots(e) {
	if (e.target.className === "slide-dots") return;

	const dotSelectedIndex = +e.target.closest("li").dataset.dotIndex;

	unselectCurrentDot();
	selectNewDot(dotSelectedIndex);
	hideCurrentImage();
	displayNewImage(dotSelectedIndex);
}

const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
const slideDots = document.querySelector(".slide-dots");

leftArrow.addEventListener("click", handleLeftArrow);
rightArrow.addEventListener("click", handleRightArrow);
slideDots.addEventListener("click", handleSlideDots);
