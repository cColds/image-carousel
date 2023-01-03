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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJEQUEyRCxTQUFTO0FBQ3BFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdCQUF3QixXQUFXO0FBQ25DO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDJCQUEyQixRQUFRO0FBQ25DOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW1hZ2UtY2Fyb3VzZWwvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gZ2V0Q3VycmVudEltYWdlKCkge1xuXHRjb25zdCBjdXJyZW50SW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlbGVjdGVkXCIpO1xuXHRyZXR1cm4gY3VycmVudEltYWdlO1xufVxuXG5mdW5jdGlvbiBoaWRlQ3VycmVudEltYWdlKCkge1xuXHRnZXRDdXJyZW50SW1hZ2UoKS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG59XG5cbmZ1bmN0aW9uIHVuc2VsZWN0Q3VycmVudERvdCgpIHtcblx0Y29uc3QgY3VycmVudERvdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2xpZGUtZG90cyAuc2VsZWN0ZWRcIik7XG5cdGN1cnJlbnREb3QuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xufVxuXG5mdW5jdGlvbiBzZWxlY3ROZXdEb3QoZG90SW5kZXgpIHtcblx0Y29uc3QgbmV3RG90ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtZG90LWluZGV4PScke2RvdEluZGV4fSddYCk7XG5cdG5ld0RvdC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlOZXdJbWFnZShpbWFnZUluZGV4KSB7XG5cdGNvbnN0IG5ld0ltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihcblx0XHRgW2RhdGEtaW1hZ2UtaW5kZXg9JyR7aW1hZ2VJbmRleH0nXWBcblx0KTtcblx0bmV3SW1hZ2UuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xufVxuXG5mdW5jdGlvbiBnZXRMYXN0SW1hZ2VJbmRleCgpIHtcblx0Y29uc3QgaW1hZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5pbWFnZS1mcmFtZSBsaVwiKTtcblx0Y29uc3QgaW1hZ2VMZW5ndGggPSBpbWFnZXMubGVuZ3RoIC0gMTtcblx0cmV0dXJuIGltYWdlTGVuZ3RoO1xufVxuXG5mdW5jdGlvbiBjaGFuZ2VJbWFnZShtb3ZlQnlPbmUpIHtcblx0Y29uc3QgY3VycmVudEltYWdlSW5kZXggPSArZ2V0Q3VycmVudEltYWdlKCkuZGF0YXNldC5pbWFnZUluZGV4O1xuXHRjb25zdCBsYXN0SW1hZ2VJbmRleCA9IGdldExhc3RJbWFnZUluZGV4KCk7XG5cblx0aGlkZUN1cnJlbnRJbWFnZSgpO1xuXHR1bnNlbGVjdEN1cnJlbnREb3QoKTtcblxuXHRpZiAoY3VycmVudEltYWdlSW5kZXggPT09IDApIHtcblx0XHRkaXNwbGF5TmV3SW1hZ2UobGFzdEltYWdlSW5kZXgpO1xuXHRcdHNlbGVjdE5ld0RvdChsYXN0SW1hZ2VJbmRleCk7XG5cdH0gZWxzZSB7XG5cdFx0ZGlzcGxheU5ld0ltYWdlKGN1cnJlbnRJbWFnZUluZGV4ICsgbW92ZUJ5T25lKTtcblx0XHRzZWxlY3ROZXdEb3QoY3VycmVudEltYWdlSW5kZXggKyBtb3ZlQnlPbmUpO1xuXHR9XG59XG5cbmNvbnN0IG1vdmVJbWFnZUJhY2sgPSAoKSA9PiBjaGFuZ2VJbWFnZSgtMSk7XG5jb25zdCBtb3ZlSW1hZ2VGb3J3YXJkID0gKCkgPT4gY2hhbmdlSW1hZ2UoMSk7XG5cbmZ1bmN0aW9uIGhhbmRsZVNsaWRlRG90cyh7IHRhcmdldCB9KSB7XG5cdGlmICh0YXJnZXQuY2xhc3NOYW1lID09PSBcInNsaWRlLWRvdHNcIikgcmV0dXJuO1xuXG5cdGNvbnN0IGRvdFNlbGVjdGVkSW5kZXggPSArdGFyZ2V0LmNsb3Nlc3QoXCJsaVwiKS5kYXRhc2V0LmRvdEluZGV4O1xuXG5cdHVuc2VsZWN0Q3VycmVudERvdCgpO1xuXHRzZWxlY3ROZXdEb3QoZG90U2VsZWN0ZWRJbmRleCk7XG5cdGhpZGVDdXJyZW50SW1hZ2UoKTtcblx0ZGlzcGxheU5ld0ltYWdlKGRvdFNlbGVjdGVkSW5kZXgpO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVQcm9ncmVzc0JhcigpIHtcblx0Y29uc3QgY3VycmVudEluZGV4ID0gK2dldEN1cnJlbnRJbWFnZSgpLmRhdGFzZXQuaW1hZ2VJbmRleDtcblxuXHRoaWRlQ3VycmVudEltYWdlKCk7XG5cdHVuc2VsZWN0Q3VycmVudERvdCgpO1xuXG5cdGlmIChjdXJyZW50SW5kZXggPT09IGdldExhc3RJbWFnZUluZGV4KCkpIHtcblx0XHRkaXNwbGF5TmV3SW1hZ2UoMCk7XG5cdFx0c2VsZWN0TmV3RG90KDApO1xuXHR9IGVsc2Uge1xuXHRcdGRpc3BsYXlOZXdJbWFnZShjdXJyZW50SW5kZXggKyAxKTtcblx0XHRzZWxlY3ROZXdEb3QoY3VycmVudEluZGV4ICsgMSk7XG5cdH1cbn1cblxuY29uc3QgbGVmdEFycm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sZWZ0LWFycm93XCIpO1xuY29uc3QgcmlnaHRBcnJvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmlnaHQtYXJyb3dcIik7XG5jb25zdCBzbGlkZURvdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNsaWRlLWRvdHNcIik7XG5cbmxlZnRBcnJvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbW92ZUltYWdlQmFjayk7XG5yaWdodEFycm93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBtb3ZlSW1hZ2VGb3J3YXJkKTtcbnNsaWRlRG90cy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlU2xpZGVEb3RzKTtcblxuc2V0SW50ZXJ2YWwoaGFuZGxlUHJvZ3Jlc3NCYXIsIDUwMDApO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9