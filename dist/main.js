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

function toggleTranslateDirection(el, newDirection, moveByOne) {
	let currentDirection = moveByOne === -1 ? "left" : "right";

	el.classList.remove(currentDirection);
	el.classList.add(newDirection);
}

function translateImage(moveByOne) {
	const translateXLeft = document.querySelector(".left");
	const translateXRight = document.querySelector(".right");

	if (
		(moveByOne === -1 && translateXRight) ||
		(moveByOne === 1 && translateXLeft)
	) {
		return;
	}

	if (moveByOne === 1) {
		getAllImages().forEach((el) =>
			toggleTranslateDirection(el, "left", moveByOne)
		);
	} else if (moveByOne === -1) {
		getAllImages().forEach((el) =>
			toggleTranslateDirection(el, "right", moveByOne)
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

	translateImage(moveByOne);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJEQUEyRCxTQUFTO0FBQ3BFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdCQUF3QixXQUFXO0FBQ25DO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW1hZ2UtY2Fyb3VzZWwvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gZ2V0Q3VycmVudEltYWdlKCkge1xuXHRjb25zdCBjdXJyZW50SW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlbGVjdGVkXCIpO1xuXHRyZXR1cm4gY3VycmVudEltYWdlO1xufVxuXG5mdW5jdGlvbiBoaWRlQ3VycmVudEltYWdlKCkge1xuXHRnZXRDdXJyZW50SW1hZ2UoKS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG59XG5cbmZ1bmN0aW9uIHVuc2VsZWN0Q3VycmVudERvdCgpIHtcblx0Y29uc3QgY3VycmVudERvdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2xpZGUtZG90cyAuc2VsZWN0ZWRcIik7XG5cdGN1cnJlbnREb3QuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xufVxuXG5mdW5jdGlvbiBzZWxlY3ROZXdEb3QoZG90SW5kZXgpIHtcblx0Y29uc3QgbmV3RG90ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtZG90LWluZGV4PScke2RvdEluZGV4fSddYCk7XG5cdG5ld0RvdC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlOZXdJbWFnZShpbWFnZUluZGV4KSB7XG5cdGNvbnN0IG5ld0ltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihcblx0XHRgW2RhdGEtaW1hZ2UtaW5kZXg9JyR7aW1hZ2VJbmRleH0nXWBcblx0KTtcblx0bmV3SW1hZ2UuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xufVxuXG5mdW5jdGlvbiBnZXRBbGxJbWFnZXMoKSB7XG5cdHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmltYWdlLWZyYW1lIGxpXCIpO1xufVxuXG5mdW5jdGlvbiBnZXRMYXN0SW1hZ2VJbmRleCgpIHtcblx0Y29uc3QgaW1hZ2VMZW5ndGggPSBnZXRBbGxJbWFnZXMoKS5sZW5ndGggLSAxO1xuXHRyZXR1cm4gaW1hZ2VMZW5ndGg7XG59XG5cbmZ1bmN0aW9uIHJlc2V0UHJvZ3Jlc3NQZXJjZW50YWdlKCkge1xuXHRjb25zdCBwcm9ncmVzc1BlcmNlbnRhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2dyZXNzLXBlcmNlbnRhZ2VcIik7XG5cblx0cHJvZ3Jlc3NQZXJjZW50YWdlLnN0eWxlLmFuaW1hdGlvbiA9IFwibm9uZVwiO1xuXHRwcm9ncmVzc1BlcmNlbnRhZ2Uub2Zmc2V0SGVpZ2h0OyAvKiB0cmlnZ2VyIHJlZmxvdyAqL1xuXHRwcm9ncmVzc1BlcmNlbnRhZ2Uuc3R5bGUuYW5pbWF0aW9uID0gbnVsbDtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlVHJhbnNsYXRlRGlyZWN0aW9uKGVsLCBuZXdEaXJlY3Rpb24sIG1vdmVCeU9uZSkge1xuXHRsZXQgY3VycmVudERpcmVjdGlvbiA9IG1vdmVCeU9uZSA9PT0gLTEgPyBcImxlZnRcIiA6IFwicmlnaHRcIjtcblxuXHRlbC5jbGFzc0xpc3QucmVtb3ZlKGN1cnJlbnREaXJlY3Rpb24pO1xuXHRlbC5jbGFzc0xpc3QuYWRkKG5ld0RpcmVjdGlvbik7XG59XG5cbmZ1bmN0aW9uIHRyYW5zbGF0ZUltYWdlKG1vdmVCeU9uZSkge1xuXHRjb25zdCB0cmFuc2xhdGVYTGVmdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGVmdFwiKTtcblx0Y29uc3QgdHJhbnNsYXRlWFJpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yaWdodFwiKTtcblxuXHRpZiAoXG5cdFx0KG1vdmVCeU9uZSA9PT0gLTEgJiYgdHJhbnNsYXRlWFJpZ2h0KSB8fFxuXHRcdChtb3ZlQnlPbmUgPT09IDEgJiYgdHJhbnNsYXRlWExlZnQpXG5cdCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGlmIChtb3ZlQnlPbmUgPT09IDEpIHtcblx0XHRnZXRBbGxJbWFnZXMoKS5mb3JFYWNoKChlbCkgPT5cblx0XHRcdHRvZ2dsZVRyYW5zbGF0ZURpcmVjdGlvbihlbCwgXCJsZWZ0XCIsIG1vdmVCeU9uZSlcblx0XHQpO1xuXHR9IGVsc2UgaWYgKG1vdmVCeU9uZSA9PT0gLTEpIHtcblx0XHRnZXRBbGxJbWFnZXMoKS5mb3JFYWNoKChlbCkgPT5cblx0XHRcdHRvZ2dsZVRyYW5zbGF0ZURpcmVjdGlvbihlbCwgXCJyaWdodFwiLCBtb3ZlQnlPbmUpXG5cdFx0KTtcblx0fVxufVxuXG5mdW5jdGlvbiBpbWFnZUluZGV4VG9Nb3ZlQnkoXG5cdGN1cnJlbnRJbWFnZUluZGV4LFxuXHRsYXN0SW1hZ2VJbmRleCxcblx0bW92ZUJ5T25lLFxuXHRkb3RTZWxlY3RlZEluZGV4XG4pIHtcblx0aWYgKGRvdFNlbGVjdGVkSW5kZXggIT0gbnVsbCkge1xuXHRcdGRpc3BsYXlOZXdJbWFnZShkb3RTZWxlY3RlZEluZGV4KTtcblx0XHRzZWxlY3ROZXdEb3QoZG90U2VsZWN0ZWRJbmRleCk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGlmIChjdXJyZW50SW1hZ2VJbmRleCA9PT0gMCAmJiBtb3ZlQnlPbmUgPT09IC0xKSB7XG5cdFx0ZGlzcGxheU5ld0ltYWdlKGxhc3RJbWFnZUluZGV4KTtcblx0XHRzZWxlY3ROZXdEb3QobGFzdEltYWdlSW5kZXgpO1xuXHR9IGVsc2UgaWYgKGN1cnJlbnRJbWFnZUluZGV4ID09PSBsYXN0SW1hZ2VJbmRleCAmJiBtb3ZlQnlPbmUgPT09IDEpIHtcblx0XHRkaXNwbGF5TmV3SW1hZ2UoMCk7XG5cdFx0c2VsZWN0TmV3RG90KDApO1xuXHR9IGVsc2Uge1xuXHRcdGRpc3BsYXlOZXdJbWFnZShjdXJyZW50SW1hZ2VJbmRleCArIG1vdmVCeU9uZSk7XG5cdFx0c2VsZWN0TmV3RG90KGN1cnJlbnRJbWFnZUluZGV4ICsgbW92ZUJ5T25lKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjaGFuZ2VJbWFnZShtb3ZlQnlPbmUsIGRvdFNlbGVjdGVkSW5kZXgpIHtcblx0Y29uc3QgY3VycmVudEltYWdlSW5kZXggPSArZ2V0Q3VycmVudEltYWdlKCkuZGF0YXNldC5pbWFnZUluZGV4O1xuXHRjb25zdCBsYXN0SW1hZ2VJbmRleCA9IGdldExhc3RJbWFnZUluZGV4KCk7XG5cblx0dHJhbnNsYXRlSW1hZ2UobW92ZUJ5T25lKTtcblx0aGlkZUN1cnJlbnRJbWFnZSgpO1xuXHR1bnNlbGVjdEN1cnJlbnREb3QoKTtcblx0aW1hZ2VJbmRleFRvTW92ZUJ5KFxuXHRcdGN1cnJlbnRJbWFnZUluZGV4LFxuXHRcdGxhc3RJbWFnZUluZGV4LFxuXHRcdG1vdmVCeU9uZSxcblx0XHRkb3RTZWxlY3RlZEluZGV4XG5cdCk7XG5cdGNsZWFySW50ZXJ2YWwoc3RhcnRUaW1lcik7XG5cdHN0YXJ0VGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiBjaGFuZ2VJbWFnZSgxKSwgNTAwMCk7XG5cdHJlc2V0UHJvZ3Jlc3NQZXJjZW50YWdlKCk7XG59XG5cbmNvbnN0IGxlZnRBcnJvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGVmdC1hcnJvd1wiKTtcbmNvbnN0IHJpZ2h0QXJyb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJpZ2h0LWFycm93XCIpO1xuY29uc3Qgc2xpZGVEb3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zbGlkZS1kb3RzXCIpO1xuXG5sZWZ0QXJyb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGNoYW5nZUltYWdlKC0xKSk7XG5yaWdodEFycm93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBjaGFuZ2VJbWFnZSgxKSk7XG5zbGlkZURvdHMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG5cdGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT09IFwic2xpZGUtZG90c1wiKSByZXR1cm47XG5cdGNvbnN0IGRvdFNlbGVjdGVkSW5kZXggPSBlLnRhcmdldC5jbG9zZXN0KFwibGlcIikuZGF0YXNldC5kb3RJbmRleDtcblx0Y2hhbmdlSW1hZ2UoXCJcIiwgZG90U2VsZWN0ZWRJbmRleCk7XG59KTtcblxubGV0IHN0YXJ0VGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiBjaGFuZ2VJbWFnZSgxKSwgNTAwMCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=