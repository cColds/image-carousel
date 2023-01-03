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

function displayNewImage(newImage) {
	newImage.classList.add("selected");
}

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

function handleLeftArrow() {
	const images = document.querySelectorAll(".image-frame li");

	const currentImageIndex = +getCurrentImage().dataset.imageIndex;
	const lastImageIndex = images.length - 1;

	hideCurrentImage();

	if (currentImageIndex === 0) {
		displayNewImage(images[lastImageIndex]);
	} else {
		displayNewImage(images[currentImageIndex - 1]);
	}
}

function handleRightArrow() {
	const images = document.querySelectorAll(".image-frame li");

	const currentImageIndex = +getCurrentImage().dataset.imageIndex;
	const lastImageIndex = images.length - 1;

	hideCurrentImage();

	if (currentImageIndex === lastImageIndex) {
		displayNewImage(images[0]);
	} else {
		displayNewImage(images[currentImageIndex + 1]);
	}
}

const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

leftArrow.addEventListener("click", handleLeftArrow);
rightArrow.addEventListener("click", handleRightArrow);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2ltYWdlLWNhcm91c2VsLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGdldEN1cnJlbnRJbWFnZSgpIHtcblx0Y29uc3QgY3VycmVudEltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWxlY3RlZFwiKTtcblx0cmV0dXJuIGN1cnJlbnRJbWFnZTtcbn1cblxuZnVuY3Rpb24gaGlkZUN1cnJlbnRJbWFnZSgpIHtcblx0Z2V0Q3VycmVudEltYWdlKCkuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5TmV3SW1hZ2UobmV3SW1hZ2UpIHtcblx0bmV3SW1hZ2UuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xufVxuXG4vLyBmdW5jdGlvbiBoYW5kbGVJbWFnZUNoYW5nZSgpIHtcbi8vICAgICBjb25zdCBpbWFnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmltYWdlLWZyYW1lIGxpXCIpO1xuXG4vLyBcdGNvbnN0IGN1cnJlbnRJbWFnZUluZGV4ID0gK2dldEN1cnJlbnRJbWFnZSgpLmRhdGFzZXQuaW1hZ2VJbmRleDtcbi8vIFx0Y29uc3QgbGFzdEltYWdlSW5kZXggPSBpbWFnZXMubGVuZ3RoIC0gMTtcblxuLy8gXHRoaWRlQ3VycmVudEltYWdlKCk7XG5cbi8vIFx0aWYgKGN1cnJlbnRJbWFnZUluZGV4ID09PSAwKSB7XG4vLyBcdFx0ZGlzcGxheU5ld0ltYWdlKGltYWdlc1tsYXN0SW1hZ2VJbmRleF0pO1xuLy8gXHR9IGVsc2Uge1xuLy8gXHRcdGRpc3BsYXlOZXdJbWFnZShpbWFnZXNbY3VycmVudEltYWdlSW5kZXggLSAxXSk7XG4vLyBcdH1cblxuLy8gfVxuXG5mdW5jdGlvbiBoYW5kbGVMZWZ0QXJyb3coKSB7XG5cdGNvbnN0IGltYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaW1hZ2UtZnJhbWUgbGlcIik7XG5cblx0Y29uc3QgY3VycmVudEltYWdlSW5kZXggPSArZ2V0Q3VycmVudEltYWdlKCkuZGF0YXNldC5pbWFnZUluZGV4O1xuXHRjb25zdCBsYXN0SW1hZ2VJbmRleCA9IGltYWdlcy5sZW5ndGggLSAxO1xuXG5cdGhpZGVDdXJyZW50SW1hZ2UoKTtcblxuXHRpZiAoY3VycmVudEltYWdlSW5kZXggPT09IDApIHtcblx0XHRkaXNwbGF5TmV3SW1hZ2UoaW1hZ2VzW2xhc3RJbWFnZUluZGV4XSk7XG5cdH0gZWxzZSB7XG5cdFx0ZGlzcGxheU5ld0ltYWdlKGltYWdlc1tjdXJyZW50SW1hZ2VJbmRleCAtIDFdKTtcblx0fVxufVxuXG5mdW5jdGlvbiBoYW5kbGVSaWdodEFycm93KCkge1xuXHRjb25zdCBpbWFnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmltYWdlLWZyYW1lIGxpXCIpO1xuXG5cdGNvbnN0IGN1cnJlbnRJbWFnZUluZGV4ID0gK2dldEN1cnJlbnRJbWFnZSgpLmRhdGFzZXQuaW1hZ2VJbmRleDtcblx0Y29uc3QgbGFzdEltYWdlSW5kZXggPSBpbWFnZXMubGVuZ3RoIC0gMTtcblxuXHRoaWRlQ3VycmVudEltYWdlKCk7XG5cblx0aWYgKGN1cnJlbnRJbWFnZUluZGV4ID09PSBsYXN0SW1hZ2VJbmRleCkge1xuXHRcdGRpc3BsYXlOZXdJbWFnZShpbWFnZXNbMF0pO1xuXHR9IGVsc2Uge1xuXHRcdGRpc3BsYXlOZXdJbWFnZShpbWFnZXNbY3VycmVudEltYWdlSW5kZXggKyAxXSk7XG5cdH1cbn1cblxuY29uc3QgbGVmdEFycm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sZWZ0LWFycm93XCIpO1xuY29uc3QgcmlnaHRBcnJvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmlnaHQtYXJyb3dcIik7XG5cbmxlZnRBcnJvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlTGVmdEFycm93KTtcbnJpZ2h0QXJyb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZVJpZ2h0QXJyb3cpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9