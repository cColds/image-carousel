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
