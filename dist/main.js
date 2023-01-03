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
		selectNewDot(lastImageIndex);
	} else {
		displayNewImage(currentImageIndex + 1);
		selectNewDot(currentImageIndex + 1);
	}
}

const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
const slideDots = document.querySelector(".slide-dots");

leftArrow.addEventListener("click", handleLeftArrow);
rightArrow.addEventListener("click", handleRightArrow);
slideDots.addEventListener("click", (e) => {
	if (e.target.className === "slide-dots") return;

	const dotSelectedIndex = +e.target.closest("li").dataset.dotIndex;

	unselectCurrentDot();
	selectNewDot(dotSelectedIndex);
	hideCurrentImage();
	displayNewImage(dotSelectedIndex);
});

// function handleImageChange() {
//     const images = document.querySelectorAll(".image-frame li");

// 	const currentImageIndex = +getCurrentImage().dataset.imageIndex;
// 	const lastImageIndex = images.length - 1;

// 	hideCurrentImage();

// 	if (currentImageIndex === 0) {
// 		displayNewImage(images[lastImageIndex]);
// 	} else {
// 		displayNewImage(images[currentImageIndex - 1]);
// 	}

// }

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJEQUEyRCxTQUFTO0FBQ3BFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdCQUF3QixXQUFXO0FBQ25DO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2ltYWdlLWNhcm91c2VsLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGdldEN1cnJlbnRJbWFnZSgpIHtcblx0Y29uc3QgY3VycmVudEltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWxlY3RlZFwiKTtcblx0cmV0dXJuIGN1cnJlbnRJbWFnZTtcbn1cblxuZnVuY3Rpb24gaGlkZUN1cnJlbnRJbWFnZSgpIHtcblx0Z2V0Q3VycmVudEltYWdlKCkuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xufVxuXG5mdW5jdGlvbiB1bnNlbGVjdEN1cnJlbnREb3QoKSB7XG5cdGNvbnN0IGN1cnJlbnREb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNsaWRlLWRvdHMgLnNlbGVjdGVkXCIpO1xuXHRjdXJyZW50RG90LmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcbn1cblxuZnVuY3Rpb24gc2VsZWN0TmV3RG90KGRvdEluZGV4KSB7XG5cdGNvbnN0IG5ld0RvdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWRvdC1pbmRleD0nJHtkb3RJbmRleH0nXWApO1xuXHRuZXdEb3QuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5TmV3SW1hZ2UoaW1hZ2VJbmRleCkge1xuXHRjb25zdCBuZXdJbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG5cdFx0YFtkYXRhLWltYWdlLWluZGV4PScke2ltYWdlSW5kZXh9J11gXG5cdCk7XG5cdG5ld0ltYWdlLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlTGVmdEFycm93KCkge1xuXHRjb25zdCBpbWFnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmltYWdlLWZyYW1lIGxpXCIpO1xuXG5cdGNvbnN0IGN1cnJlbnRJbWFnZUluZGV4ID0gK2dldEN1cnJlbnRJbWFnZSgpLmRhdGFzZXQuaW1hZ2VJbmRleDtcblx0Y29uc3QgbGFzdEltYWdlSW5kZXggPSBpbWFnZXMubGVuZ3RoIC0gMTtcblxuXHRoaWRlQ3VycmVudEltYWdlKCk7XG5cdHVuc2VsZWN0Q3VycmVudERvdCgpO1xuXG5cdGlmIChjdXJyZW50SW1hZ2VJbmRleCA9PT0gMCkge1xuXHRcdGRpc3BsYXlOZXdJbWFnZShsYXN0SW1hZ2VJbmRleCk7XG5cdFx0c2VsZWN0TmV3RG90KGxhc3RJbWFnZUluZGV4KTtcblx0fSBlbHNlIHtcblx0XHRkaXNwbGF5TmV3SW1hZ2UoY3VycmVudEltYWdlSW5kZXggLSAxKTtcblx0XHRzZWxlY3ROZXdEb3QoY3VycmVudEltYWdlSW5kZXggLSAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBoYW5kbGVSaWdodEFycm93KCkge1xuXHRjb25zdCBpbWFnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmltYWdlLWZyYW1lIGxpXCIpO1xuXG5cdGNvbnN0IGN1cnJlbnRJbWFnZUluZGV4ID0gK2dldEN1cnJlbnRJbWFnZSgpLmRhdGFzZXQuaW1hZ2VJbmRleDtcblx0Y29uc3QgbGFzdEltYWdlSW5kZXggPSBpbWFnZXMubGVuZ3RoIC0gMTtcblxuXHRoaWRlQ3VycmVudEltYWdlKCk7XG5cdHVuc2VsZWN0Q3VycmVudERvdCgpO1xuXG5cdGlmIChjdXJyZW50SW1hZ2VJbmRleCA9PT0gbGFzdEltYWdlSW5kZXgpIHtcblx0XHRkaXNwbGF5TmV3SW1hZ2UoMCk7XG5cdFx0c2VsZWN0TmV3RG90KGxhc3RJbWFnZUluZGV4KTtcblx0fSBlbHNlIHtcblx0XHRkaXNwbGF5TmV3SW1hZ2UoY3VycmVudEltYWdlSW5kZXggKyAxKTtcblx0XHRzZWxlY3ROZXdEb3QoY3VycmVudEltYWdlSW5kZXggKyAxKTtcblx0fVxufVxuXG5jb25zdCBsZWZ0QXJyb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxlZnQtYXJyb3dcIik7XG5jb25zdCByaWdodEFycm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yaWdodC1hcnJvd1wiKTtcbmNvbnN0IHNsaWRlRG90cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2xpZGUtZG90c1wiKTtcblxubGVmdEFycm93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVMZWZ0QXJyb3cpO1xucmlnaHRBcnJvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlUmlnaHRBcnJvdyk7XG5zbGlkZURvdHMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG5cdGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT09IFwic2xpZGUtZG90c1wiKSByZXR1cm47XG5cblx0Y29uc3QgZG90U2VsZWN0ZWRJbmRleCA9ICtlLnRhcmdldC5jbG9zZXN0KFwibGlcIikuZGF0YXNldC5kb3RJbmRleDtcblxuXHR1bnNlbGVjdEN1cnJlbnREb3QoKTtcblx0c2VsZWN0TmV3RG90KGRvdFNlbGVjdGVkSW5kZXgpO1xuXHRoaWRlQ3VycmVudEltYWdlKCk7XG5cdGRpc3BsYXlOZXdJbWFnZShkb3RTZWxlY3RlZEluZGV4KTtcbn0pO1xuXG4vLyBmdW5jdGlvbiBoYW5kbGVJbWFnZUNoYW5nZSgpIHtcbi8vICAgICBjb25zdCBpbWFnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmltYWdlLWZyYW1lIGxpXCIpO1xuXG4vLyBcdGNvbnN0IGN1cnJlbnRJbWFnZUluZGV4ID0gK2dldEN1cnJlbnRJbWFnZSgpLmRhdGFzZXQuaW1hZ2VJbmRleDtcbi8vIFx0Y29uc3QgbGFzdEltYWdlSW5kZXggPSBpbWFnZXMubGVuZ3RoIC0gMTtcblxuLy8gXHRoaWRlQ3VycmVudEltYWdlKCk7XG5cbi8vIFx0aWYgKGN1cnJlbnRJbWFnZUluZGV4ID09PSAwKSB7XG4vLyBcdFx0ZGlzcGxheU5ld0ltYWdlKGltYWdlc1tsYXN0SW1hZ2VJbmRleF0pO1xuLy8gXHR9IGVsc2Uge1xuLy8gXHRcdGRpc3BsYXlOZXdJbWFnZShpbWFnZXNbY3VycmVudEltYWdlSW5kZXggLSAxXSk7XG4vLyBcdH1cblxuLy8gfVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9