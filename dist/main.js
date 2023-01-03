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

function handleLeftArrow() {
	const currentImageIndex = +getCurrentImage().dataset.imageIndex;
	const lastImageIndex = getLastImageIndex();

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
	const currentImageIndex = +getCurrentImage().dataset.imageIndex;
	const lastImageIndex = getLastImageIndex();

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

setInterval(() => {
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
}, 5000);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJEQUEyRCxTQUFTO0FBQ3BFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdCQUF3QixXQUFXO0FBQ25DO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW1hZ2UtY2Fyb3VzZWwvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gZ2V0Q3VycmVudEltYWdlKCkge1xuXHRjb25zdCBjdXJyZW50SW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlbGVjdGVkXCIpO1xuXHRyZXR1cm4gY3VycmVudEltYWdlO1xufVxuXG5mdW5jdGlvbiBoaWRlQ3VycmVudEltYWdlKCkge1xuXHRnZXRDdXJyZW50SW1hZ2UoKS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG59XG5cbmZ1bmN0aW9uIHVuc2VsZWN0Q3VycmVudERvdCgpIHtcblx0Y29uc3QgY3VycmVudERvdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2xpZGUtZG90cyAuc2VsZWN0ZWRcIik7XG5cdGN1cnJlbnREb3QuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xufVxuXG5mdW5jdGlvbiBzZWxlY3ROZXdEb3QoZG90SW5kZXgpIHtcblx0Y29uc3QgbmV3RG90ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtZG90LWluZGV4PScke2RvdEluZGV4fSddYCk7XG5cdG5ld0RvdC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlOZXdJbWFnZShpbWFnZUluZGV4KSB7XG5cdGNvbnN0IG5ld0ltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihcblx0XHRgW2RhdGEtaW1hZ2UtaW5kZXg9JyR7aW1hZ2VJbmRleH0nXWBcblx0KTtcblx0bmV3SW1hZ2UuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xufVxuXG5mdW5jdGlvbiBnZXRMYXN0SW1hZ2VJbmRleCgpIHtcblx0Y29uc3QgaW1hZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5pbWFnZS1mcmFtZSBsaVwiKTtcblx0Y29uc3QgaW1hZ2VMZW5ndGggPSBpbWFnZXMubGVuZ3RoIC0gMTtcblx0cmV0dXJuIGltYWdlTGVuZ3RoO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVMZWZ0QXJyb3coKSB7XG5cdGNvbnN0IGN1cnJlbnRJbWFnZUluZGV4ID0gK2dldEN1cnJlbnRJbWFnZSgpLmRhdGFzZXQuaW1hZ2VJbmRleDtcblx0Y29uc3QgbGFzdEltYWdlSW5kZXggPSBnZXRMYXN0SW1hZ2VJbmRleCgpO1xuXG5cdGhpZGVDdXJyZW50SW1hZ2UoKTtcblx0dW5zZWxlY3RDdXJyZW50RG90KCk7XG5cblx0aWYgKGN1cnJlbnRJbWFnZUluZGV4ID09PSAwKSB7XG5cdFx0ZGlzcGxheU5ld0ltYWdlKGxhc3RJbWFnZUluZGV4KTtcblx0XHRzZWxlY3ROZXdEb3QobGFzdEltYWdlSW5kZXgpO1xuXHR9IGVsc2Uge1xuXHRcdGRpc3BsYXlOZXdJbWFnZShjdXJyZW50SW1hZ2VJbmRleCAtIDEpO1xuXHRcdHNlbGVjdE5ld0RvdChjdXJyZW50SW1hZ2VJbmRleCAtIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVJpZ2h0QXJyb3coKSB7XG5cdGNvbnN0IGN1cnJlbnRJbWFnZUluZGV4ID0gK2dldEN1cnJlbnRJbWFnZSgpLmRhdGFzZXQuaW1hZ2VJbmRleDtcblx0Y29uc3QgbGFzdEltYWdlSW5kZXggPSBnZXRMYXN0SW1hZ2VJbmRleCgpO1xuXG5cdGhpZGVDdXJyZW50SW1hZ2UoKTtcblx0dW5zZWxlY3RDdXJyZW50RG90KCk7XG5cblx0aWYgKGN1cnJlbnRJbWFnZUluZGV4ID09PSBsYXN0SW1hZ2VJbmRleCkge1xuXHRcdGRpc3BsYXlOZXdJbWFnZSgwKTtcblx0XHRzZWxlY3ROZXdEb3QoMCk7XG5cdH0gZWxzZSB7XG5cdFx0ZGlzcGxheU5ld0ltYWdlKGN1cnJlbnRJbWFnZUluZGV4ICsgMSk7XG5cdFx0c2VsZWN0TmV3RG90KGN1cnJlbnRJbWFnZUluZGV4ICsgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gaGFuZGxlU2xpZGVEb3RzKGUpIHtcblx0aWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJzbGlkZS1kb3RzXCIpIHJldHVybjtcblxuXHRjb25zdCBkb3RTZWxlY3RlZEluZGV4ID0gK2UudGFyZ2V0LmNsb3Nlc3QoXCJsaVwiKS5kYXRhc2V0LmRvdEluZGV4O1xuXG5cdHVuc2VsZWN0Q3VycmVudERvdCgpO1xuXHRzZWxlY3ROZXdEb3QoZG90U2VsZWN0ZWRJbmRleCk7XG5cdGhpZGVDdXJyZW50SW1hZ2UoKTtcblx0ZGlzcGxheU5ld0ltYWdlKGRvdFNlbGVjdGVkSW5kZXgpO1xufVxuXG5jb25zdCBsZWZ0QXJyb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxlZnQtYXJyb3dcIik7XG5jb25zdCByaWdodEFycm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yaWdodC1hcnJvd1wiKTtcbmNvbnN0IHNsaWRlRG90cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2xpZGUtZG90c1wiKTtcblxubGVmdEFycm93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVMZWZ0QXJyb3cpO1xucmlnaHRBcnJvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlUmlnaHRBcnJvdyk7XG5zbGlkZURvdHMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZVNsaWRlRG90cyk7XG5cbnNldEludGVydmFsKCgpID0+IHtcblx0Y29uc3QgY3VycmVudEluZGV4ID0gK2dldEN1cnJlbnRJbWFnZSgpLmRhdGFzZXQuaW1hZ2VJbmRleDtcblxuXHRoaWRlQ3VycmVudEltYWdlKCk7XG5cdHVuc2VsZWN0Q3VycmVudERvdCgpO1xuXG5cdGlmIChjdXJyZW50SW5kZXggPT09IGdldExhc3RJbWFnZUluZGV4KCkpIHtcblx0XHRkaXNwbGF5TmV3SW1hZ2UoMCk7XG5cdFx0c2VsZWN0TmV3RG90KDApO1xuXHR9IGVsc2Uge1xuXHRcdGRpc3BsYXlOZXdJbWFnZShjdXJyZW50SW5kZXggKyAxKTtcblx0XHRzZWxlY3ROZXdEb3QoY3VycmVudEluZGV4ICsgMSk7XG5cdH1cbn0sIDUwMDApO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9