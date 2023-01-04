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

function resetProgressPercentage() {
	const progressPercentage = document.querySelector(".progress-percentage");

	progressPercentage.style.animation = "none";
	progressPercentage.offsetHeight; /* trigger reflow */
	progressPercentage.style.animation = null;
}

function imageIndexToMoveBy(
	currentImageIndex,
	lastImageIndex,
	moveByOne,
	dotSelectedIndex
) {
	clearInterval(startTimer);
	startTimer = setInterval(() => changeImage(1), 5000);
	resetProgressPercentage();

	if (dotSelectedIndex != null) {
		displayNewImage(dotSelectedIndex);
		selectNewDot(dotSelectedIndex);
		return;
	}
	if (currentImageIndex === 0 && moveByOne === -1) {
		displayNewImage(lastImageIndex);
		selectNewDot(lastImageIndex);
	} else if (currentImageIndex === lastImageIndex) {
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJEQUEyRCxTQUFTO0FBQ3BFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdCQUF3QixXQUFXO0FBQ25DO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbWFnZS1jYXJvdXNlbC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBnZXRDdXJyZW50SW1hZ2UoKSB7XG5cdGNvbnN0IGN1cnJlbnRJbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VsZWN0ZWRcIik7XG5cdHJldHVybiBjdXJyZW50SW1hZ2U7XG59XG5cbmZ1bmN0aW9uIGhpZGVDdXJyZW50SW1hZ2UoKSB7XG5cdGdldEN1cnJlbnRJbWFnZSgpLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcbn1cblxuZnVuY3Rpb24gdW5zZWxlY3RDdXJyZW50RG90KCkge1xuXHRjb25zdCBjdXJyZW50RG90ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zbGlkZS1kb3RzIC5zZWxlY3RlZFwiKTtcblx0Y3VycmVudERvdC5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG59XG5cbmZ1bmN0aW9uIHNlbGVjdE5ld0RvdChkb3RJbmRleCkge1xuXHRjb25zdCBuZXdEb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1kb3QtaW5kZXg9JyR7ZG90SW5kZXh9J11gKTtcblx0bmV3RG90LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheU5ld0ltYWdlKGltYWdlSW5kZXgpIHtcblx0Y29uc3QgbmV3SW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuXHRcdGBbZGF0YS1pbWFnZS1pbmRleD0nJHtpbWFnZUluZGV4fSddYFxuXHQpO1xuXHRuZXdJbWFnZS5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG59XG5cbmZ1bmN0aW9uIGdldExhc3RJbWFnZUluZGV4KCkge1xuXHRjb25zdCBpbWFnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmltYWdlLWZyYW1lIGxpXCIpO1xuXHRjb25zdCBpbWFnZUxlbmd0aCA9IGltYWdlcy5sZW5ndGggLSAxO1xuXHRyZXR1cm4gaW1hZ2VMZW5ndGg7XG59XG5cbmZ1bmN0aW9uIHJlc2V0UHJvZ3Jlc3NQZXJjZW50YWdlKCkge1xuXHRjb25zdCBwcm9ncmVzc1BlcmNlbnRhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2dyZXNzLXBlcmNlbnRhZ2VcIik7XG5cblx0cHJvZ3Jlc3NQZXJjZW50YWdlLnN0eWxlLmFuaW1hdGlvbiA9IFwibm9uZVwiO1xuXHRwcm9ncmVzc1BlcmNlbnRhZ2Uub2Zmc2V0SGVpZ2h0OyAvKiB0cmlnZ2VyIHJlZmxvdyAqL1xuXHRwcm9ncmVzc1BlcmNlbnRhZ2Uuc3R5bGUuYW5pbWF0aW9uID0gbnVsbDtcbn1cblxuZnVuY3Rpb24gaW1hZ2VJbmRleFRvTW92ZUJ5KFxuXHRjdXJyZW50SW1hZ2VJbmRleCxcblx0bGFzdEltYWdlSW5kZXgsXG5cdG1vdmVCeU9uZSxcblx0ZG90U2VsZWN0ZWRJbmRleFxuKSB7XG5cdGNsZWFySW50ZXJ2YWwoc3RhcnRUaW1lcik7XG5cdHN0YXJ0VGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiBjaGFuZ2VJbWFnZSgxKSwgNTAwMCk7XG5cdHJlc2V0UHJvZ3Jlc3NQZXJjZW50YWdlKCk7XG5cblx0aWYgKGRvdFNlbGVjdGVkSW5kZXggIT0gbnVsbCkge1xuXHRcdGRpc3BsYXlOZXdJbWFnZShkb3RTZWxlY3RlZEluZGV4KTtcblx0XHRzZWxlY3ROZXdEb3QoZG90U2VsZWN0ZWRJbmRleCk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGlmIChjdXJyZW50SW1hZ2VJbmRleCA9PT0gMCAmJiBtb3ZlQnlPbmUgPT09IC0xKSB7XG5cdFx0ZGlzcGxheU5ld0ltYWdlKGxhc3RJbWFnZUluZGV4KTtcblx0XHRzZWxlY3ROZXdEb3QobGFzdEltYWdlSW5kZXgpO1xuXHR9IGVsc2UgaWYgKGN1cnJlbnRJbWFnZUluZGV4ID09PSBsYXN0SW1hZ2VJbmRleCkge1xuXHRcdGRpc3BsYXlOZXdJbWFnZSgwKTtcblx0XHRzZWxlY3ROZXdEb3QoMCk7XG5cdH0gZWxzZSB7XG5cdFx0ZGlzcGxheU5ld0ltYWdlKGN1cnJlbnRJbWFnZUluZGV4ICsgbW92ZUJ5T25lKTtcblx0XHRzZWxlY3ROZXdEb3QoY3VycmVudEltYWdlSW5kZXggKyBtb3ZlQnlPbmUpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNoYW5nZUltYWdlKG1vdmVCeU9uZSwgZG90U2VsZWN0ZWRJbmRleCkge1xuXHRjb25zdCBjdXJyZW50SW1hZ2VJbmRleCA9ICtnZXRDdXJyZW50SW1hZ2UoKS5kYXRhc2V0LmltYWdlSW5kZXg7XG5cdGNvbnN0IGxhc3RJbWFnZUluZGV4ID0gZ2V0TGFzdEltYWdlSW5kZXgoKTtcblxuXHRoaWRlQ3VycmVudEltYWdlKCk7XG5cdHVuc2VsZWN0Q3VycmVudERvdCgpO1xuXHRpbWFnZUluZGV4VG9Nb3ZlQnkoXG5cdFx0Y3VycmVudEltYWdlSW5kZXgsXG5cdFx0bGFzdEltYWdlSW5kZXgsXG5cdFx0bW92ZUJ5T25lLFxuXHRcdGRvdFNlbGVjdGVkSW5kZXhcblx0KTtcbn1cblxuY29uc3QgbGVmdEFycm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sZWZ0LWFycm93XCIpO1xuY29uc3QgcmlnaHRBcnJvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmlnaHQtYXJyb3dcIik7XG5jb25zdCBzbGlkZURvdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNsaWRlLWRvdHNcIik7XG5cbmxlZnRBcnJvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gY2hhbmdlSW1hZ2UoLTEpKTtcbnJpZ2h0QXJyb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGNoYW5nZUltYWdlKDEpKTtcbnNsaWRlRG90cy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcblx0aWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJzbGlkZS1kb3RzXCIpIHJldHVybjtcblx0Y29uc3QgZG90U2VsZWN0ZWRJbmRleCA9IGUudGFyZ2V0LmNsb3Nlc3QoXCJsaVwiKS5kYXRhc2V0LmRvdEluZGV4O1xuXHRjaGFuZ2VJbWFnZShcIlwiLCBkb3RTZWxlY3RlZEluZGV4KTtcbn0pO1xuXG5sZXQgc3RhcnRUaW1lciA9IHNldEludGVydmFsKCgpID0+IGNoYW5nZUltYWdlKDEpLCA1MDAwKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==