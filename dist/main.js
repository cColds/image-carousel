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
	clearInterval(startTimer);
	startTimer = setInterval(() => changeImage(1), 5000);
	resetProgressPercentage();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJEQUEyRCxTQUFTO0FBQ3BFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdCQUF3QixXQUFXO0FBQ25DO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCIsInNvdXJjZXMiOlsid2VicGFjazovL2ltYWdlLWNhcm91c2VsLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGdldEN1cnJlbnRJbWFnZSgpIHtcblx0Y29uc3QgY3VycmVudEltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWxlY3RlZFwiKTtcblx0cmV0dXJuIGN1cnJlbnRJbWFnZTtcbn1cblxuZnVuY3Rpb24gaGlkZUN1cnJlbnRJbWFnZSgpIHtcblx0Z2V0Q3VycmVudEltYWdlKCkuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xufVxuXG5mdW5jdGlvbiB1bnNlbGVjdEN1cnJlbnREb3QoKSB7XG5cdGNvbnN0IGN1cnJlbnREb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNsaWRlLWRvdHMgLnNlbGVjdGVkXCIpO1xuXHRjdXJyZW50RG90LmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcbn1cblxuZnVuY3Rpb24gc2VsZWN0TmV3RG90KGRvdEluZGV4KSB7XG5cdGNvbnN0IG5ld0RvdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWRvdC1pbmRleD0nJHtkb3RJbmRleH0nXWApO1xuXHRuZXdEb3QuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5TmV3SW1hZ2UoaW1hZ2VJbmRleCkge1xuXHRjb25zdCBuZXdJbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG5cdFx0YFtkYXRhLWltYWdlLWluZGV4PScke2ltYWdlSW5kZXh9J11gXG5cdCk7XG5cdG5ld0ltYWdlLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbn1cblxuZnVuY3Rpb24gZ2V0TGFzdEltYWdlSW5kZXgoKSB7XG5cdGNvbnN0IGltYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaW1hZ2UtZnJhbWUgbGlcIik7XG5cdGNvbnN0IGltYWdlTGVuZ3RoID0gaW1hZ2VzLmxlbmd0aCAtIDE7XG5cdHJldHVybiBpbWFnZUxlbmd0aDtcbn1cblxuZnVuY3Rpb24gcmVzZXRQcm9ncmVzc1BlcmNlbnRhZ2UoKSB7XG5cdGNvbnN0IHByb2dyZXNzUGVyY2VudGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZ3Jlc3MtcGVyY2VudGFnZVwiKTtcblxuXHRwcm9ncmVzc1BlcmNlbnRhZ2Uuc3R5bGUuYW5pbWF0aW9uID0gXCJub25lXCI7XG5cdHByb2dyZXNzUGVyY2VudGFnZS5vZmZzZXRIZWlnaHQ7IC8qIHRyaWdnZXIgcmVmbG93ICovXG5cdHByb2dyZXNzUGVyY2VudGFnZS5zdHlsZS5hbmltYXRpb24gPSBudWxsO1xufVxuXG5mdW5jdGlvbiBpbWFnZUluZGV4VG9Nb3ZlQnkoXG5cdGN1cnJlbnRJbWFnZUluZGV4LFxuXHRsYXN0SW1hZ2VJbmRleCxcblx0bW92ZUJ5T25lLFxuXHRkb3RTZWxlY3RlZEluZGV4XG4pIHtcblx0aWYgKGRvdFNlbGVjdGVkSW5kZXggIT0gbnVsbCkge1xuXHRcdGRpc3BsYXlOZXdJbWFnZShkb3RTZWxlY3RlZEluZGV4KTtcblx0XHRzZWxlY3ROZXdEb3QoZG90U2VsZWN0ZWRJbmRleCk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGlmIChjdXJyZW50SW1hZ2VJbmRleCA9PT0gMCAmJiBtb3ZlQnlPbmUgPT09IC0xKSB7XG5cdFx0ZGlzcGxheU5ld0ltYWdlKGxhc3RJbWFnZUluZGV4KTtcblx0XHRzZWxlY3ROZXdEb3QobGFzdEltYWdlSW5kZXgpO1xuXHR9IGVsc2UgaWYgKGN1cnJlbnRJbWFnZUluZGV4ID09PSBsYXN0SW1hZ2VJbmRleCkge1xuXHRcdGRpc3BsYXlOZXdJbWFnZSgwKTtcblx0XHRzZWxlY3ROZXdEb3QoMCk7XG5cdH0gZWxzZSB7XG5cdFx0ZGlzcGxheU5ld0ltYWdlKGN1cnJlbnRJbWFnZUluZGV4ICsgbW92ZUJ5T25lKTtcblx0XHRzZWxlY3ROZXdEb3QoY3VycmVudEltYWdlSW5kZXggKyBtb3ZlQnlPbmUpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNoYW5nZUltYWdlKG1vdmVCeU9uZSwgZG90U2VsZWN0ZWRJbmRleCkge1xuXHRjb25zdCBjdXJyZW50SW1hZ2VJbmRleCA9ICtnZXRDdXJyZW50SW1hZ2UoKS5kYXRhc2V0LmltYWdlSW5kZXg7XG5cdGNvbnN0IGxhc3RJbWFnZUluZGV4ID0gZ2V0TGFzdEltYWdlSW5kZXgoKTtcblxuXHRoaWRlQ3VycmVudEltYWdlKCk7XG5cdHVuc2VsZWN0Q3VycmVudERvdCgpO1xuXHRpbWFnZUluZGV4VG9Nb3ZlQnkoXG5cdFx0Y3VycmVudEltYWdlSW5kZXgsXG5cdFx0bGFzdEltYWdlSW5kZXgsXG5cdFx0bW92ZUJ5T25lLFxuXHRcdGRvdFNlbGVjdGVkSW5kZXhcblx0KTtcblx0Y2xlYXJJbnRlcnZhbChzdGFydFRpbWVyKTtcblx0c3RhcnRUaW1lciA9IHNldEludGVydmFsKCgpID0+IGNoYW5nZUltYWdlKDEpLCA1MDAwKTtcblx0cmVzZXRQcm9ncmVzc1BlcmNlbnRhZ2UoKTtcbn1cblxuY29uc3QgbGVmdEFycm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sZWZ0LWFycm93XCIpO1xuY29uc3QgcmlnaHRBcnJvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmlnaHQtYXJyb3dcIik7XG5jb25zdCBzbGlkZURvdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNsaWRlLWRvdHNcIik7XG5cbmxlZnRBcnJvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gY2hhbmdlSW1hZ2UoLTEpKTtcbnJpZ2h0QXJyb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGNoYW5nZUltYWdlKDEpKTtcbnNsaWRlRG90cy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcblx0aWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJzbGlkZS1kb3RzXCIpIHJldHVybjtcblx0Y29uc3QgZG90U2VsZWN0ZWRJbmRleCA9IGUudGFyZ2V0LmNsb3Nlc3QoXCJsaVwiKS5kYXRhc2V0LmRvdEluZGV4O1xuXHRjaGFuZ2VJbWFnZShcIlwiLCBkb3RTZWxlY3RlZEluZGV4KTtcbn0pO1xuXG5sZXQgc3RhcnRUaW1lciA9IHNldEludGVydmFsKCgpID0+IGNoYW5nZUltYWdlKDEpLCA1MDAwKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==