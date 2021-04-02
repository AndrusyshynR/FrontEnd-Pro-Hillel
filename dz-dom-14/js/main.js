// Создать квадрат и при помощи стрелок двигать его влево в право, вверх и вниз.
// Если он упирается в одну из сторон не давать ему сдвигаться, выходить за пределы сайта.

document.body.addEventListener('keydown', moveBlock)

var block = document.querySelector('#blueRect');

var step = 1;
var pageWidth = window.innerWidth;
var pageHeight = window.innerHeight;

function calcBlockPos(event, coords) {
	var {left, top} = coords;

	switch (event.key) {
		case "ArrowRight":
			left += step;
			break;
		case "ArrowLeft":
			left -= step;
			break;
		case "ArrowDown":
			top += step;
			break;
		case "ArrowUp":
			top -= step;
			break;
	}

	return {
		...coords,
		left,
		top
	};
}

function moveBlock(event) {
	var coords = calcBlockPos(event, block.getBoundingClientRect());

	if ((coords.left >= 0 || coords.right <= pageWidth) && (coords.top >= 0 || coords.bottom <= pageHeight)) {
		switch (event.key) {
			case "ArrowRight":
			case "ArrowLeft":
				block.style.left = `${coords.left}px`;
				break;
			case "ArrowDown":
			case "ArrowUp":
				block.style.top = `${coords.top}px`;
				break;
		}
	}
}
