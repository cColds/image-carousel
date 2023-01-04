/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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
	} else if (currentImageIndex === 0) {
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJEQUEyRCxTQUFTO0FBQ3BFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdCQUF3QixXQUFXO0FBQ25DO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsMkJBQTJCLFFBQVE7QUFDbkM7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbWFnZS1jYXJvdXNlbC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBnZXRDdXJyZW50SW1hZ2UoKSB7XG5cdGNvbnN0IGN1cnJlbnRJbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VsZWN0ZWRcIik7XG5cdHJldHVybiBjdXJyZW50SW1hZ2U7XG59XG5cbmZ1bmN0aW9uIGhpZGVDdXJyZW50SW1hZ2UoKSB7XG5cdGdldEN1cnJlbnRJbWFnZSgpLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcbn1cblxuZnVuY3Rpb24gdW5zZWxlY3RDdXJyZW50RG90KCkge1xuXHRjb25zdCBjdXJyZW50RG90ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zbGlkZS1kb3RzIC5zZWxlY3RlZFwiKTtcblx0Y3VycmVudERvdC5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG59XG5cbmZ1bmN0aW9uIHNlbGVjdE5ld0RvdChkb3RJbmRleCkge1xuXHRjb25zdCBuZXdEb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1kb3QtaW5kZXg9JyR7ZG90SW5kZXh9J11gKTtcblx0bmV3RG90LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheU5ld0ltYWdlKGltYWdlSW5kZXgpIHtcblx0Y29uc3QgbmV3SW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuXHRcdGBbZGF0YS1pbWFnZS1pbmRleD0nJHtpbWFnZUluZGV4fSddYFxuXHQpO1xuXHRuZXdJbWFnZS5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG59XG5cbmZ1bmN0aW9uIGdldExhc3RJbWFnZUluZGV4KCkge1xuXHRjb25zdCBpbWFnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmltYWdlLWZyYW1lIGxpXCIpO1xuXHRjb25zdCBpbWFnZUxlbmd0aCA9IGltYWdlcy5sZW5ndGggLSAxO1xuXHRyZXR1cm4gaW1hZ2VMZW5ndGg7XG59XG5cbmZ1bmN0aW9uIGNoYW5nZUltYWdlKG1vdmVCeU9uZSkge1xuXHRjb25zdCBjdXJyZW50SW1hZ2VJbmRleCA9ICtnZXRDdXJyZW50SW1hZ2UoKS5kYXRhc2V0LmltYWdlSW5kZXg7XG5cdGNvbnN0IGxhc3RJbWFnZUluZGV4ID0gZ2V0TGFzdEltYWdlSW5kZXgoKTtcblxuXHRoaWRlQ3VycmVudEltYWdlKCk7XG5cdHVuc2VsZWN0Q3VycmVudERvdCgpO1xuXG5cdGlmIChjdXJyZW50SW1hZ2VJbmRleCA9PT0gMCkge1xuXHRcdGRpc3BsYXlOZXdJbWFnZShsYXN0SW1hZ2VJbmRleCk7XG5cdFx0c2VsZWN0TmV3RG90KGxhc3RJbWFnZUluZGV4KTtcblx0fSBlbHNlIGlmIChjdXJyZW50SW1hZ2VJbmRleCA9PT0gMCkge1xuXHRcdGRpc3BsYXlOZXdJbWFnZShsYXN0SW1hZ2VJbmRleCk7XG5cdFx0c2VsZWN0TmV3RG90KGxhc3RJbWFnZUluZGV4KTtcblx0fSBlbHNlIHtcblx0XHRkaXNwbGF5TmV3SW1hZ2UoY3VycmVudEltYWdlSW5kZXggKyBtb3ZlQnlPbmUpO1xuXHRcdHNlbGVjdE5ld0RvdChjdXJyZW50SW1hZ2VJbmRleCArIG1vdmVCeU9uZSk7XG5cdH1cbn1cblxuY29uc3QgbW92ZUltYWdlQmFjayA9ICgpID0+IGNoYW5nZUltYWdlKC0xKTtcbmNvbnN0IG1vdmVJbWFnZUZvcndhcmQgPSAoKSA9PiBjaGFuZ2VJbWFnZSgxKTtcblxuZnVuY3Rpb24gaGFuZGxlU2xpZGVEb3RzKHsgdGFyZ2V0IH0pIHtcblx0aWYgKHRhcmdldC5jbGFzc05hbWUgPT09IFwic2xpZGUtZG90c1wiKSByZXR1cm47XG5cblx0Y29uc3QgZG90U2VsZWN0ZWRJbmRleCA9ICt0YXJnZXQuY2xvc2VzdChcImxpXCIpLmRhdGFzZXQuZG90SW5kZXg7XG5cblx0dW5zZWxlY3RDdXJyZW50RG90KCk7XG5cdHNlbGVjdE5ld0RvdChkb3RTZWxlY3RlZEluZGV4KTtcblx0aGlkZUN1cnJlbnRJbWFnZSgpO1xuXHRkaXNwbGF5TmV3SW1hZ2UoZG90U2VsZWN0ZWRJbmRleCk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVByb2dyZXNzQmFyKCkge1xuXHRjb25zdCBjdXJyZW50SW5kZXggPSArZ2V0Q3VycmVudEltYWdlKCkuZGF0YXNldC5pbWFnZUluZGV4O1xuXG5cdGhpZGVDdXJyZW50SW1hZ2UoKTtcblx0dW5zZWxlY3RDdXJyZW50RG90KCk7XG5cblx0aWYgKGN1cnJlbnRJbmRleCA9PT0gZ2V0TGFzdEltYWdlSW5kZXgoKSkge1xuXHRcdGRpc3BsYXlOZXdJbWFnZSgwKTtcblx0XHRzZWxlY3ROZXdEb3QoMCk7XG5cdH0gZWxzZSB7XG5cdFx0ZGlzcGxheU5ld0ltYWdlKGN1cnJlbnRJbmRleCArIDEpO1xuXHRcdHNlbGVjdE5ld0RvdChjdXJyZW50SW5kZXggKyAxKTtcblx0fVxufVxuXG5jb25zdCBsZWZ0QXJyb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxlZnQtYXJyb3dcIik7XG5jb25zdCByaWdodEFycm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yaWdodC1hcnJvd1wiKTtcbmNvbnN0IHNsaWRlRG90cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2xpZGUtZG90c1wiKTtcblxubGVmdEFycm93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBtb3ZlSW1hZ2VCYWNrKTtcbnJpZ2h0QXJyb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG1vdmVJbWFnZUZvcndhcmQpO1xuc2xpZGVEb3RzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVTbGlkZURvdHMpO1xuXG5zZXRJbnRlcnZhbChoYW5kbGVQcm9ncmVzc0JhciwgNTAwMCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=