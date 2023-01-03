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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJEQUEyRCxTQUFTO0FBQ3BFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdCQUF3QixXQUFXO0FBQ25DO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW1hZ2UtY2Fyb3VzZWwvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gZ2V0Q3VycmVudEltYWdlKCkge1xuXHRjb25zdCBjdXJyZW50SW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlbGVjdGVkXCIpO1xuXHRyZXR1cm4gY3VycmVudEltYWdlO1xufVxuXG5mdW5jdGlvbiBoaWRlQ3VycmVudEltYWdlKCkge1xuXHRnZXRDdXJyZW50SW1hZ2UoKS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG59XG5cbmZ1bmN0aW9uIHVuc2VsZWN0Q3VycmVudERvdCgpIHtcblx0Y29uc3QgY3VycmVudERvdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2xpZGUtZG90cyAuc2VsZWN0ZWRcIik7XG5cdGN1cnJlbnREb3QuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xufVxuXG5mdW5jdGlvbiBzZWxlY3ROZXdEb3QoZG90SW5kZXgpIHtcblx0Y29uc3QgbmV3RG90ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtZG90LWluZGV4PScke2RvdEluZGV4fSddYCk7XG5cdG5ld0RvdC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlOZXdJbWFnZShpbWFnZUluZGV4KSB7XG5cdGNvbnN0IG5ld0ltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihcblx0XHRgW2RhdGEtaW1hZ2UtaW5kZXg9JyR7aW1hZ2VJbmRleH0nXWBcblx0KTtcblx0bmV3SW1hZ2UuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVMZWZ0QXJyb3coKSB7XG5cdGNvbnN0IGltYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaW1hZ2UtZnJhbWUgbGlcIik7XG5cblx0Y29uc3QgY3VycmVudEltYWdlSW5kZXggPSArZ2V0Q3VycmVudEltYWdlKCkuZGF0YXNldC5pbWFnZUluZGV4O1xuXHRjb25zdCBsYXN0SW1hZ2VJbmRleCA9IGltYWdlcy5sZW5ndGggLSAxO1xuXG5cdGhpZGVDdXJyZW50SW1hZ2UoKTtcblx0dW5zZWxlY3RDdXJyZW50RG90KCk7XG5cblx0aWYgKGN1cnJlbnRJbWFnZUluZGV4ID09PSAwKSB7XG5cdFx0ZGlzcGxheU5ld0ltYWdlKGxhc3RJbWFnZUluZGV4KTtcblx0XHRzZWxlY3ROZXdEb3QobGFzdEltYWdlSW5kZXgpO1xuXHR9IGVsc2Uge1xuXHRcdGRpc3BsYXlOZXdJbWFnZShjdXJyZW50SW1hZ2VJbmRleCAtIDEpO1xuXHRcdHNlbGVjdE5ld0RvdChjdXJyZW50SW1hZ2VJbmRleCAtIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVJpZ2h0QXJyb3coKSB7XG5cdGNvbnN0IGltYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaW1hZ2UtZnJhbWUgbGlcIik7XG5cblx0Y29uc3QgY3VycmVudEltYWdlSW5kZXggPSArZ2V0Q3VycmVudEltYWdlKCkuZGF0YXNldC5pbWFnZUluZGV4O1xuXHRjb25zdCBsYXN0SW1hZ2VJbmRleCA9IGltYWdlcy5sZW5ndGggLSAxO1xuXG5cdGhpZGVDdXJyZW50SW1hZ2UoKTtcblx0dW5zZWxlY3RDdXJyZW50RG90KCk7XG5cblx0aWYgKGN1cnJlbnRJbWFnZUluZGV4ID09PSBsYXN0SW1hZ2VJbmRleCkge1xuXHRcdGRpc3BsYXlOZXdJbWFnZSgwKTtcblx0XHRzZWxlY3ROZXdEb3QoMCk7XG5cdH0gZWxzZSB7XG5cdFx0ZGlzcGxheU5ld0ltYWdlKGN1cnJlbnRJbWFnZUluZGV4ICsgMSk7XG5cdFx0c2VsZWN0TmV3RG90KGN1cnJlbnRJbWFnZUluZGV4ICsgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gaGFuZGxlU2xpZGVEb3RzKGUpIHtcblx0aWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJzbGlkZS1kb3RzXCIpIHJldHVybjtcblxuXHRjb25zdCBkb3RTZWxlY3RlZEluZGV4ID0gK2UudGFyZ2V0LmNsb3Nlc3QoXCJsaVwiKS5kYXRhc2V0LmRvdEluZGV4O1xuXG5cdHVuc2VsZWN0Q3VycmVudERvdCgpO1xuXHRzZWxlY3ROZXdEb3QoZG90U2VsZWN0ZWRJbmRleCk7XG5cdGhpZGVDdXJyZW50SW1hZ2UoKTtcblx0ZGlzcGxheU5ld0ltYWdlKGRvdFNlbGVjdGVkSW5kZXgpO1xufVxuXG5jb25zdCBsZWZ0QXJyb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxlZnQtYXJyb3dcIik7XG5jb25zdCByaWdodEFycm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yaWdodC1hcnJvd1wiKTtcbmNvbnN0IHNsaWRlRG90cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2xpZGUtZG90c1wiKTtcblxubGVmdEFycm93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVMZWZ0QXJyb3cpO1xucmlnaHRBcnJvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlUmlnaHRBcnJvdyk7XG5zbGlkZURvdHMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZVNsaWRlRG90cyk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=