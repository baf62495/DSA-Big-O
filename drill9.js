// 9. Random element
// What is the Big O of the following algorithm? Explain your answer

function findRandomElement(arr) {
	return arr[Math.floor(Math.random() * arr.length)];
}

// Constant O(1) - Because it return the specific value of an array once
