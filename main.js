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

function selectNewDot(e) {
	e.target.closest("li").classList.add("selected");
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

	if (currentImageIndex === 0) {
		displayNewImage(lastImageIndex);
	} else {
		displayNewImage(currentImageIndex - 1);
	}
}

function handleRightArrow() {
	const images = document.querySelectorAll(".image-frame li");

	const currentImageIndex = +getCurrentImage().dataset.imageIndex;
	const lastImageIndex = images.length - 1;

	hideCurrentImage();

	if (currentImageIndex === lastImageIndex) {
		displayNewImage(0);
	} else {
		displayNewImage(currentImageIndex + 1);
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
	selectNewDot(e);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdCQUF3QixXQUFXO0FBQ25DO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2ltYWdlLWNhcm91c2VsLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGdldEN1cnJlbnRJbWFnZSgpIHtcblx0Y29uc3QgY3VycmVudEltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWxlY3RlZFwiKTtcblx0cmV0dXJuIGN1cnJlbnRJbWFnZTtcbn1cblxuZnVuY3Rpb24gaGlkZUN1cnJlbnRJbWFnZSgpIHtcblx0Z2V0Q3VycmVudEltYWdlKCkuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xufVxuXG5mdW5jdGlvbiB1bnNlbGVjdEN1cnJlbnREb3QoKSB7XG5cdGNvbnN0IGN1cnJlbnREb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNsaWRlLWRvdHMgLnNlbGVjdGVkXCIpO1xuXHRjdXJyZW50RG90LmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcbn1cblxuZnVuY3Rpb24gc2VsZWN0TmV3RG90KGUpIHtcblx0ZS50YXJnZXQuY2xvc2VzdChcImxpXCIpLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheU5ld0ltYWdlKGltYWdlSW5kZXgpIHtcblx0Y29uc3QgbmV3SW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuXHRcdGBbZGF0YS1pbWFnZS1pbmRleD0nJHtpbWFnZUluZGV4fSddYFxuXHQpO1xuXHRuZXdJbWFnZS5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUxlZnRBcnJvdygpIHtcblx0Y29uc3QgaW1hZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5pbWFnZS1mcmFtZSBsaVwiKTtcblxuXHRjb25zdCBjdXJyZW50SW1hZ2VJbmRleCA9ICtnZXRDdXJyZW50SW1hZ2UoKS5kYXRhc2V0LmltYWdlSW5kZXg7XG5cdGNvbnN0IGxhc3RJbWFnZUluZGV4ID0gaW1hZ2VzLmxlbmd0aCAtIDE7XG5cblx0aGlkZUN1cnJlbnRJbWFnZSgpO1xuXG5cdGlmIChjdXJyZW50SW1hZ2VJbmRleCA9PT0gMCkge1xuXHRcdGRpc3BsYXlOZXdJbWFnZShsYXN0SW1hZ2VJbmRleCk7XG5cdH0gZWxzZSB7XG5cdFx0ZGlzcGxheU5ld0ltYWdlKGN1cnJlbnRJbWFnZUluZGV4IC0gMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gaGFuZGxlUmlnaHRBcnJvdygpIHtcblx0Y29uc3QgaW1hZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5pbWFnZS1mcmFtZSBsaVwiKTtcblxuXHRjb25zdCBjdXJyZW50SW1hZ2VJbmRleCA9ICtnZXRDdXJyZW50SW1hZ2UoKS5kYXRhc2V0LmltYWdlSW5kZXg7XG5cdGNvbnN0IGxhc3RJbWFnZUluZGV4ID0gaW1hZ2VzLmxlbmd0aCAtIDE7XG5cblx0aGlkZUN1cnJlbnRJbWFnZSgpO1xuXG5cdGlmIChjdXJyZW50SW1hZ2VJbmRleCA9PT0gbGFzdEltYWdlSW5kZXgpIHtcblx0XHRkaXNwbGF5TmV3SW1hZ2UoMCk7XG5cdH0gZWxzZSB7XG5cdFx0ZGlzcGxheU5ld0ltYWdlKGN1cnJlbnRJbWFnZUluZGV4ICsgMSk7XG5cdH1cbn1cblxuY29uc3QgbGVmdEFycm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sZWZ0LWFycm93XCIpO1xuY29uc3QgcmlnaHRBcnJvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmlnaHQtYXJyb3dcIik7XG5jb25zdCBzbGlkZURvdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNsaWRlLWRvdHNcIik7XG5cbmxlZnRBcnJvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlTGVmdEFycm93KTtcbnJpZ2h0QXJyb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZVJpZ2h0QXJyb3cpO1xuc2xpZGVEb3RzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuXHRpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSBcInNsaWRlLWRvdHNcIikgcmV0dXJuO1xuXG5cdGNvbnN0IGRvdFNlbGVjdGVkSW5kZXggPSArZS50YXJnZXQuY2xvc2VzdChcImxpXCIpLmRhdGFzZXQuZG90SW5kZXg7XG5cblx0dW5zZWxlY3RDdXJyZW50RG90KCk7XG5cdHNlbGVjdE5ld0RvdChlKTtcblx0aGlkZUN1cnJlbnRJbWFnZSgpO1xuXHRkaXNwbGF5TmV3SW1hZ2UoZG90U2VsZWN0ZWRJbmRleCk7XG59KTtcblxuLy8gZnVuY3Rpb24gaGFuZGxlSW1hZ2VDaGFuZ2UoKSB7XG4vLyAgICAgY29uc3QgaW1hZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5pbWFnZS1mcmFtZSBsaVwiKTtcblxuLy8gXHRjb25zdCBjdXJyZW50SW1hZ2VJbmRleCA9ICtnZXRDdXJyZW50SW1hZ2UoKS5kYXRhc2V0LmltYWdlSW5kZXg7XG4vLyBcdGNvbnN0IGxhc3RJbWFnZUluZGV4ID0gaW1hZ2VzLmxlbmd0aCAtIDE7XG5cbi8vIFx0aGlkZUN1cnJlbnRJbWFnZSgpO1xuXG4vLyBcdGlmIChjdXJyZW50SW1hZ2VJbmRleCA9PT0gMCkge1xuLy8gXHRcdGRpc3BsYXlOZXdJbWFnZShpbWFnZXNbbGFzdEltYWdlSW5kZXhdKTtcbi8vIFx0fSBlbHNlIHtcbi8vIFx0XHRkaXNwbGF5TmV3SW1hZ2UoaW1hZ2VzW2N1cnJlbnRJbWFnZUluZGV4IC0gMV0pO1xuLy8gXHR9XG5cbi8vIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==