function countLetters (str) {
	var countedLetters = {};
	var input = str.split("");
	var sum = 0;

	for (var i = 0; i < str.length; i++) {
		for (var q = 0; q < str.length; q++) {
			if (input[i] == input[q]) {
				sum += 1;
			}
		}

		if (input[i] == " ") {

		} else {
		var tempKey = input[i];
		countedLetters[tempKey] = sum;
		sum = 0;
		}
	}


	return countedLetters;
}


console.log(countLetters("Lighthouse Labs, the best place on earth...maybe"));