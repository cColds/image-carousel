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

function getAllImages() {
	return document.querySelectorAll(".image-frame li");
}

function getLastImageIndex() {
	const imageLength = getAllImages().length - 1;
	return imageLength;
}

function resetProgressPercentage() {
	const progressPercentage = document.querySelector(".progress-percentage");

	progressPercentage.style.animation = "none";
	progressPercentage.offsetHeight; /* trigger reflow */
	progressPercentage.style.animation = null;
}

// check if class contain left or right and loop remove all
// add left or right class depending clicked
// remove left or right class for the new img

function toggleTranslateDirection(el, newDirection, leftDirection) {
	let currentDirection = leftDirection ? "left" : "right";

	el.classList.remove(currentDirection);
	el.classList.add(newDirection);
}

function translateImage(moveByOne) {
	const translateXLeft = document.querySelector(".left");
	const translateXRight = document.querySelector(".right");

	if (translateXLeft && translateXRight == null) return;

	if (moveByOne === 1) {
		getAllImages().forEach((el) =>
			toggleTranslateDirection(el, "left", translateXLeft)
		);
	} else if (moveByOne === -1) {
		getAllImages().forEach((el) =>
			toggleTranslateDirection(el, "right", translateXLeft)
		);
	}
}

function imageIndexToMoveBy(
	currentImageIndex,
	lastImageIndex,
	moveByOne,
	dotSelectedIndex
) {
	if (dotSelectedIndex != null) {
		displayNewImage(dotSelectedIndex);
		selectNewDot(dotSelectedIndex);
		return;
	}
	if (currentImageIndex === 0 && moveByOne === -1) {
		displayNewImage(lastImageIndex);
		selectNewDot(lastImageIndex);
	} else if (currentImageIndex === lastImageIndex && moveByOne === 1) {
		displayNewImage(0);
		selectNewDot(0);
	} else {
		displayNewImage(currentImageIndex + moveByOne);
		selectNewDot(currentImageIndex + moveByOne);
	}
}

function changeImage(moveByOne, dotSelectedIndex) {
	const currentImageIndex = +getCurrentImage().dataset.imageIndex;
	const lastImageIndex = getLastImageIndex();

	hideCurrentImage();
	unselectCurrentDot();
	imageIndexToMoveBy(
		currentImageIndex,
		lastImageIndex,
		moveByOne,
		dotSelectedIndex
	);
	clearInterval(startTimer);
	startTimer = setInterval(() => changeImage(1), 5000);
	resetProgressPercentage();
	// translateImage(moveByOne);
}

const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
const slideDots = document.querySelector(".slide-dots");

leftArrow.addEventListener("click", () => changeImage(-1));
rightArrow.addEventListener("click", () => changeImage(1));
slideDots.addEventListener("click", (e) => {
	if (e.target.className === "slide-dots") return;
	const dotSelectedIndex = e.target.closest("li").dataset.dotIndex;
	changeImage("", dotSelectedIndex);
});

let startTimer = setInterval(() => changeImage(1), 5000);
