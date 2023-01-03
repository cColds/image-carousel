/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const progressPercentage = document.querySelector(".progress-percentage");

// change img to the next (right) image every 5 seconds

// setInterval(() => {
// 	console.log(progressPercentage.clientWidth);
// }, 5000);

const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

leftArrow.addEventListener("click", () => {
	console.log("jim");
});

// unselect current img

// reselect new img

// assume default is index 0 (selected - cat), 1 (dog), 2 (fish)

// if left arrow clicked, move cat and dog up one index,
// and move fish down one index because it's the last index

// left arrow clicked = index 0 (selected - fish), 1 (cat), 2 (dog)

// if right arrow clicked, move cat and dog down one index,
// and move cat to the last index because it's the first index,
// and we don't want to go to a negative index

// right arrow clicked = index 0 (selected - dog), 1 (fish), 2 (cat)

// when slide dot clicked, change to the new image

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbWFnZS1jYXJvdXNlbC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwcm9ncmVzc1BlcmNlbnRhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2dyZXNzLXBlcmNlbnRhZ2VcIik7XG5cbi8vIGNoYW5nZSBpbWcgdG8gdGhlIG5leHQgKHJpZ2h0KSBpbWFnZSBldmVyeSA1IHNlY29uZHNcblxuLy8gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuLy8gXHRjb25zb2xlLmxvZyhwcm9ncmVzc1BlcmNlbnRhZ2UuY2xpZW50V2lkdGgpO1xuLy8gfSwgNTAwMCk7XG5cbmNvbnN0IGxlZnRBcnJvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGVmdC1hcnJvd1wiKTtcbmNvbnN0IHJpZ2h0QXJyb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJpZ2h0LWFycm93XCIpO1xuXG5sZWZ0QXJyb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0Y29uc29sZS5sb2coXCJqaW1cIik7XG59KTtcblxuLy8gdW5zZWxlY3QgY3VycmVudCBpbWdcblxuLy8gcmVzZWxlY3QgbmV3IGltZ1xuXG4vLyBhc3N1bWUgZGVmYXVsdCBpcyBpbmRleCAwIChzZWxlY3RlZCAtIGNhdCksIDEgKGRvZyksIDIgKGZpc2gpXG5cbi8vIGlmIGxlZnQgYXJyb3cgY2xpY2tlZCwgbW92ZSBjYXQgYW5kIGRvZyB1cCBvbmUgaW5kZXgsXG4vLyBhbmQgbW92ZSBmaXNoIGRvd24gb25lIGluZGV4IGJlY2F1c2UgaXQncyB0aGUgbGFzdCBpbmRleFxuXG4vLyBsZWZ0IGFycm93IGNsaWNrZWQgPSBpbmRleCAwIChzZWxlY3RlZCAtIGZpc2gpLCAxIChjYXQpLCAyIChkb2cpXG5cbi8vIGlmIHJpZ2h0IGFycm93IGNsaWNrZWQsIG1vdmUgY2F0IGFuZCBkb2cgZG93biBvbmUgaW5kZXgsXG4vLyBhbmQgbW92ZSBjYXQgdG8gdGhlIGxhc3QgaW5kZXggYmVjYXVzZSBpdCdzIHRoZSBmaXJzdCBpbmRleCxcbi8vIGFuZCB3ZSBkb24ndCB3YW50IHRvIGdvIHRvIGEgbmVnYXRpdmUgaW5kZXhcblxuLy8gcmlnaHQgYXJyb3cgY2xpY2tlZCA9IGluZGV4IDAgKHNlbGVjdGVkIC0gZG9nKSwgMSAoZmlzaCksIDIgKGNhdClcblxuLy8gd2hlbiBzbGlkZSBkb3QgY2xpY2tlZCwgY2hhbmdlIHRvIHRoZSBuZXcgaW1hZ2VcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==