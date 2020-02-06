// 4. Doubler
// What is the Big O of the following algorithm? Explain your answer

function doubleArrayValues(array) {
	for (let i = 0; i < array.length; i++) {
		array[i] *= 2;
	}
	return array;
}

// Linear O(n) - Because the time complexity depends on the size of the array inputted into the function