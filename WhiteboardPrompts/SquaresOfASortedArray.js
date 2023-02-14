// The Straightforward approach, not caring about time complexity
function SquaresOfASortedArray(array) {
	const output = []  
	for(let i = 0; i < array.length; i++){
		output.push(array[i] * array[i])
	}
	return output.sort((a, b) => a-b)
}
