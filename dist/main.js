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
	const currentDirection = moveByOne === -1 ? "left" : "right";

	el.classList.remove(currentDirection);
	el.classList.add(newDirection);
}

function translateImage(moveByOne) {
	const translateXLeft = document.querySelector(".left");
	const translateXRight = document.querySelector(".right");

	// if the same class is gonna be added and removed, return
	if (
		(moveByOne === -1 && translateXRight) ||
		(moveByOne === 1 && translateXLeft)
	) {
		return;
	}

	// if moving up 1 (right), translate image left
	// else if moving down 1 (left), translate image right
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJEQUEyRCxTQUFTO0FBQ3BFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdCQUF3QixXQUFXO0FBQ25DO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW1hZ2UtY2Fyb3VzZWwvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gZ2V0Q3VycmVudEltYWdlKCkge1xuXHRjb25zdCBjdXJyZW50SW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlbGVjdGVkXCIpO1xuXHRyZXR1cm4gY3VycmVudEltYWdlO1xufVxuXG5mdW5jdGlvbiBoaWRlQ3VycmVudEltYWdlKCkge1xuXHRnZXRDdXJyZW50SW1hZ2UoKS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG59XG5cbmZ1bmN0aW9uIHVuc2VsZWN0Q3VycmVudERvdCgpIHtcblx0Y29uc3QgY3VycmVudERvdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2xpZGUtZG90cyAuc2VsZWN0ZWRcIik7XG5cdGN1cnJlbnREb3QuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xufVxuXG5mdW5jdGlvbiBzZWxlY3ROZXdEb3QoZG90SW5kZXgpIHtcblx0Y29uc3QgbmV3RG90ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtZG90LWluZGV4PScke2RvdEluZGV4fSddYCk7XG5cdG5ld0RvdC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlOZXdJbWFnZShpbWFnZUluZGV4KSB7XG5cdGNvbnN0IG5ld0ltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihcblx0XHRgW2RhdGEtaW1hZ2UtaW5kZXg9JyR7aW1hZ2VJbmRleH0nXWBcblx0KTtcblx0bmV3SW1hZ2UuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xufVxuXG5mdW5jdGlvbiBnZXRBbGxJbWFnZXMoKSB7XG5cdHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmltYWdlLWZyYW1lIGxpXCIpO1xufVxuXG5mdW5jdGlvbiBnZXRMYXN0SW1hZ2VJbmRleCgpIHtcblx0Y29uc3QgaW1hZ2VMZW5ndGggPSBnZXRBbGxJbWFnZXMoKS5sZW5ndGggLSAxO1xuXHRyZXR1cm4gaW1hZ2VMZW5ndGg7XG59XG5cbmZ1bmN0aW9uIHJlc2V0UHJvZ3Jlc3NQZXJjZW50YWdlKCkge1xuXHRjb25zdCBwcm9ncmVzc1BlcmNlbnRhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2dyZXNzLXBlcmNlbnRhZ2VcIik7XG5cblx0cHJvZ3Jlc3NQZXJjZW50YWdlLnN0eWxlLmFuaW1hdGlvbiA9IFwibm9uZVwiO1xuXHRwcm9ncmVzc1BlcmNlbnRhZ2Uub2Zmc2V0SGVpZ2h0OyAvKiB0cmlnZ2VyIHJlZmxvdyAqL1xuXHRwcm9ncmVzc1BlcmNlbnRhZ2Uuc3R5bGUuYW5pbWF0aW9uID0gbnVsbDtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlVHJhbnNsYXRlRGlyZWN0aW9uKGVsLCBuZXdEaXJlY3Rpb24sIG1vdmVCeU9uZSkge1xuXHRjb25zdCBjdXJyZW50RGlyZWN0aW9uID0gbW92ZUJ5T25lID09PSAtMSA/IFwibGVmdFwiIDogXCJyaWdodFwiO1xuXG5cdGVsLmNsYXNzTGlzdC5yZW1vdmUoY3VycmVudERpcmVjdGlvbik7XG5cdGVsLmNsYXNzTGlzdC5hZGQobmV3RGlyZWN0aW9uKTtcbn1cblxuZnVuY3Rpb24gdHJhbnNsYXRlSW1hZ2UobW92ZUJ5T25lKSB7XG5cdGNvbnN0IHRyYW5zbGF0ZVhMZWZ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sZWZ0XCIpO1xuXHRjb25zdCB0cmFuc2xhdGVYUmlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJpZ2h0XCIpO1xuXG5cdC8vIGlmIHRoZSBzYW1lIGNsYXNzIGlzIGdvbm5hIGJlIGFkZGVkIGFuZCByZW1vdmVkLCByZXR1cm5cblx0aWYgKFxuXHRcdChtb3ZlQnlPbmUgPT09IC0xICYmIHRyYW5zbGF0ZVhSaWdodCkgfHxcblx0XHQobW92ZUJ5T25lID09PSAxICYmIHRyYW5zbGF0ZVhMZWZ0KVxuXHQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyBpZiBtb3ZpbmcgdXAgMSAocmlnaHQpLCB0cmFuc2xhdGUgaW1hZ2UgbGVmdFxuXHQvLyBlbHNlIGlmIG1vdmluZyBkb3duIDEgKGxlZnQpLCB0cmFuc2xhdGUgaW1hZ2UgcmlnaHRcblx0aWYgKG1vdmVCeU9uZSA9PT0gMSkge1xuXHRcdGdldEFsbEltYWdlcygpLmZvckVhY2goKGVsKSA9PlxuXHRcdFx0dG9nZ2xlVHJhbnNsYXRlRGlyZWN0aW9uKGVsLCBcImxlZnRcIiwgbW92ZUJ5T25lKVxuXHRcdCk7XG5cdH0gZWxzZSBpZiAobW92ZUJ5T25lID09PSAtMSkge1xuXHRcdGdldEFsbEltYWdlcygpLmZvckVhY2goKGVsKSA9PlxuXHRcdFx0dG9nZ2xlVHJhbnNsYXRlRGlyZWN0aW9uKGVsLCBcInJpZ2h0XCIsIG1vdmVCeU9uZSlcblx0XHQpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGltYWdlSW5kZXhUb01vdmVCeShcblx0Y3VycmVudEltYWdlSW5kZXgsXG5cdGxhc3RJbWFnZUluZGV4LFxuXHRtb3ZlQnlPbmUsXG5cdGRvdFNlbGVjdGVkSW5kZXhcbikge1xuXHRpZiAoZG90U2VsZWN0ZWRJbmRleCAhPSBudWxsKSB7XG5cdFx0ZGlzcGxheU5ld0ltYWdlKGRvdFNlbGVjdGVkSW5kZXgpO1xuXHRcdHNlbGVjdE5ld0RvdChkb3RTZWxlY3RlZEluZGV4KTtcblx0XHRyZXR1cm47XG5cdH1cblx0aWYgKGN1cnJlbnRJbWFnZUluZGV4ID09PSAwICYmIG1vdmVCeU9uZSA9PT0gLTEpIHtcblx0XHRkaXNwbGF5TmV3SW1hZ2UobGFzdEltYWdlSW5kZXgpO1xuXHRcdHNlbGVjdE5ld0RvdChsYXN0SW1hZ2VJbmRleCk7XG5cdH0gZWxzZSBpZiAoY3VycmVudEltYWdlSW5kZXggPT09IGxhc3RJbWFnZUluZGV4ICYmIG1vdmVCeU9uZSA9PT0gMSkge1xuXHRcdGRpc3BsYXlOZXdJbWFnZSgwKTtcblx0XHRzZWxlY3ROZXdEb3QoMCk7XG5cdH0gZWxzZSB7XG5cdFx0ZGlzcGxheU5ld0ltYWdlKGN1cnJlbnRJbWFnZUluZGV4ICsgbW92ZUJ5T25lKTtcblx0XHRzZWxlY3ROZXdEb3QoY3VycmVudEltYWdlSW5kZXggKyBtb3ZlQnlPbmUpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNoYW5nZUltYWdlKG1vdmVCeU9uZSwgZG90U2VsZWN0ZWRJbmRleCkge1xuXHRjb25zdCBjdXJyZW50SW1hZ2VJbmRleCA9ICtnZXRDdXJyZW50SW1hZ2UoKS5kYXRhc2V0LmltYWdlSW5kZXg7XG5cdGNvbnN0IGxhc3RJbWFnZUluZGV4ID0gZ2V0TGFzdEltYWdlSW5kZXgoKTtcblxuXHR0cmFuc2xhdGVJbWFnZShtb3ZlQnlPbmUpO1xuXHRoaWRlQ3VycmVudEltYWdlKCk7XG5cdHVuc2VsZWN0Q3VycmVudERvdCgpO1xuXHRpbWFnZUluZGV4VG9Nb3ZlQnkoXG5cdFx0Y3VycmVudEltYWdlSW5kZXgsXG5cdFx0bGFzdEltYWdlSW5kZXgsXG5cdFx0bW92ZUJ5T25lLFxuXHRcdGRvdFNlbGVjdGVkSW5kZXhcblx0KTtcblx0Y2xlYXJJbnRlcnZhbChzdGFydFRpbWVyKTtcblx0c3RhcnRUaW1lciA9IHNldEludGVydmFsKCgpID0+IGNoYW5nZUltYWdlKDEpLCA1MDAwKTtcblx0cmVzZXRQcm9ncmVzc1BlcmNlbnRhZ2UoKTtcbn1cblxuY29uc3QgbGVmdEFycm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sZWZ0LWFycm93XCIpO1xuY29uc3QgcmlnaHRBcnJvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmlnaHQtYXJyb3dcIik7XG5jb25zdCBzbGlkZURvdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNsaWRlLWRvdHNcIik7XG5cbmxlZnRBcnJvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gY2hhbmdlSW1hZ2UoLTEpKTtcbnJpZ2h0QXJyb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGNoYW5nZUltYWdlKDEpKTtcbnNsaWRlRG90cy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcblx0aWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJzbGlkZS1kb3RzXCIpIHJldHVybjtcblx0Y29uc3QgZG90U2VsZWN0ZWRJbmRleCA9IGUudGFyZ2V0LmNsb3Nlc3QoXCJsaVwiKS5kYXRhc2V0LmRvdEluZGV4O1xuXHRjaGFuZ2VJbWFnZShcIlwiLCBkb3RTZWxlY3RlZEluZGV4KTtcbn0pO1xuXG5sZXQgc3RhcnRUaW1lciA9IHNldEludGVydmFsKCgpID0+IGNoYW5nZUltYWdlKDEpLCA1MDAwKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==