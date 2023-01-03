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
