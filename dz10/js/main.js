// Расшифровать значение и вывести на экран.

const secret = {
	"!": [17],
	" ": [5, 10],
	"e": [1, 15],
	"o": [4, 8],
	"h": [0],
	"l": [2, 3, 13, 14, 16],
	"f": [6],
	"r": [7],
	"m": [9],
	"H": [11],
	"i": [12],
}

let decryption = [];

for ([key, value] of Object.entries(secret)) {
	value.forEach(v => {
		const symbolWithPosition = [v, key];
		decryption.push(symbolWithPosition);
	});
}

const message = decryption.sort((a, b) => a[0] - b[0]).map((symbolWithPosition) => symbolWithPosition[1]).join("");

document.write(message);