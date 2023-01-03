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

leftArrow.addEventListener("click", handleLeftArrow);
rightArrow.addEventListener("click", handleRightArrow);
slideDots.addEventListener("click", handleSlideDots);

setInterval(handleProgressBar, 5000);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJEQUEyRCxTQUFTO0FBQ3BFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdCQUF3QixXQUFXO0FBQ25DO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2ltYWdlLWNhcm91c2VsLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGdldEN1cnJlbnRJbWFnZSgpIHtcblx0Y29uc3QgY3VycmVudEltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWxlY3RlZFwiKTtcblx0cmV0dXJuIGN1cnJlbnRJbWFnZTtcbn1cblxuZnVuY3Rpb24gaGlkZUN1cnJlbnRJbWFnZSgpIHtcblx0Z2V0Q3VycmVudEltYWdlKCkuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xufVxuXG5mdW5jdGlvbiB1bnNlbGVjdEN1cnJlbnREb3QoKSB7XG5cdGNvbnN0IGN1cnJlbnREb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNsaWRlLWRvdHMgLnNlbGVjdGVkXCIpO1xuXHRjdXJyZW50RG90LmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcbn1cblxuZnVuY3Rpb24gc2VsZWN0TmV3RG90KGRvdEluZGV4KSB7XG5cdGNvbnN0IG5ld0RvdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWRvdC1pbmRleD0nJHtkb3RJbmRleH0nXWApO1xuXHRuZXdEb3QuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5TmV3SW1hZ2UoaW1hZ2VJbmRleCkge1xuXHRjb25zdCBuZXdJbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG5cdFx0YFtkYXRhLWltYWdlLWluZGV4PScke2ltYWdlSW5kZXh9J11gXG5cdCk7XG5cdG5ld0ltYWdlLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbn1cblxuZnVuY3Rpb24gZ2V0TGFzdEltYWdlSW5kZXgoKSB7XG5cdGNvbnN0IGltYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaW1hZ2UtZnJhbWUgbGlcIik7XG5cdGNvbnN0IGltYWdlTGVuZ3RoID0gaW1hZ2VzLmxlbmd0aCAtIDE7XG5cdHJldHVybiBpbWFnZUxlbmd0aDtcbn1cblxuZnVuY3Rpb24gaGFuZGxlTGVmdEFycm93KCkge1xuXHRjb25zdCBjdXJyZW50SW1hZ2VJbmRleCA9ICtnZXRDdXJyZW50SW1hZ2UoKS5kYXRhc2V0LmltYWdlSW5kZXg7XG5cdGNvbnN0IGxhc3RJbWFnZUluZGV4ID0gZ2V0TGFzdEltYWdlSW5kZXgoKTtcblxuXHRoaWRlQ3VycmVudEltYWdlKCk7XG5cdHVuc2VsZWN0Q3VycmVudERvdCgpO1xuXG5cdGlmIChjdXJyZW50SW1hZ2VJbmRleCA9PT0gMCkge1xuXHRcdGRpc3BsYXlOZXdJbWFnZShsYXN0SW1hZ2VJbmRleCk7XG5cdFx0c2VsZWN0TmV3RG90KGxhc3RJbWFnZUluZGV4KTtcblx0fSBlbHNlIHtcblx0XHRkaXNwbGF5TmV3SW1hZ2UoY3VycmVudEltYWdlSW5kZXggLSAxKTtcblx0XHRzZWxlY3ROZXdEb3QoY3VycmVudEltYWdlSW5kZXggLSAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBoYW5kbGVSaWdodEFycm93KCkge1xuXHRjb25zdCBjdXJyZW50SW1hZ2VJbmRleCA9ICtnZXRDdXJyZW50SW1hZ2UoKS5kYXRhc2V0LmltYWdlSW5kZXg7XG5cdGNvbnN0IGxhc3RJbWFnZUluZGV4ID0gZ2V0TGFzdEltYWdlSW5kZXgoKTtcblxuXHRoaWRlQ3VycmVudEltYWdlKCk7XG5cdHVuc2VsZWN0Q3VycmVudERvdCgpO1xuXG5cdGlmIChjdXJyZW50SW1hZ2VJbmRleCA9PT0gbGFzdEltYWdlSW5kZXgpIHtcblx0XHRkaXNwbGF5TmV3SW1hZ2UoMCk7XG5cdFx0c2VsZWN0TmV3RG90KDApO1xuXHR9IGVsc2Uge1xuXHRcdGRpc3BsYXlOZXdJbWFnZShjdXJyZW50SW1hZ2VJbmRleCArIDEpO1xuXHRcdHNlbGVjdE5ld0RvdChjdXJyZW50SW1hZ2VJbmRleCArIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVNsaWRlRG90cyhlKSB7XG5cdGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT09IFwic2xpZGUtZG90c1wiKSByZXR1cm47XG5cblx0Y29uc3QgZG90U2VsZWN0ZWRJbmRleCA9ICtlLnRhcmdldC5jbG9zZXN0KFwibGlcIikuZGF0YXNldC5kb3RJbmRleDtcblxuXHR1bnNlbGVjdEN1cnJlbnREb3QoKTtcblx0c2VsZWN0TmV3RG90KGRvdFNlbGVjdGVkSW5kZXgpO1xuXHRoaWRlQ3VycmVudEltYWdlKCk7XG5cdGRpc3BsYXlOZXdJbWFnZShkb3RTZWxlY3RlZEluZGV4KTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlUHJvZ3Jlc3NCYXIoKSB7XG5cdGNvbnN0IGN1cnJlbnRJbmRleCA9ICtnZXRDdXJyZW50SW1hZ2UoKS5kYXRhc2V0LmltYWdlSW5kZXg7XG5cblx0aGlkZUN1cnJlbnRJbWFnZSgpO1xuXHR1bnNlbGVjdEN1cnJlbnREb3QoKTtcblxuXHRpZiAoY3VycmVudEluZGV4ID09PSBnZXRMYXN0SW1hZ2VJbmRleCgpKSB7XG5cdFx0ZGlzcGxheU5ld0ltYWdlKDApO1xuXHRcdHNlbGVjdE5ld0RvdCgwKTtcblx0fSBlbHNlIHtcblx0XHRkaXNwbGF5TmV3SW1hZ2UoY3VycmVudEluZGV4ICsgMSk7XG5cdFx0c2VsZWN0TmV3RG90KGN1cnJlbnRJbmRleCArIDEpO1xuXHR9XG59XG5cbmNvbnN0IGxlZnRBcnJvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGVmdC1hcnJvd1wiKTtcbmNvbnN0IHJpZ2h0QXJyb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJpZ2h0LWFycm93XCIpO1xuY29uc3Qgc2xpZGVEb3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zbGlkZS1kb3RzXCIpO1xuXG5sZWZ0QXJyb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZUxlZnRBcnJvdyk7XG5yaWdodEFycm93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVSaWdodEFycm93KTtcbnNsaWRlRG90cy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlU2xpZGVEb3RzKTtcblxuc2V0SW50ZXJ2YWwoaGFuZGxlUHJvZ3Jlc3NCYXIsIDUwMDApO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9