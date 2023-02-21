// The Straightforward approach, not caring about time complexity
function SquaresOfASortedArray(array) {
	const output = []  
	for(let i = 0; i < array.length; i++){
		output.push(array[i] * array[i])
	}
	return output.sort((a, b) => a-b)
}

const TwoPointers = (array) => {
	const l = array.length
	const squaredArray = []
	let smallestSquareIndex = 0
	let smallestNonNegative = l

	for(let i = 0; i < l; i++) {
		if(array[i] >= 0) {
			smallestNonNegative = i
			break;
		}
	}
	let negPointer = smallestNonNegative -1
	let posPointer = smallestNonNegative

	while (negPointer >= 0 && posPointer < l) {
		const negElementSquare = array[negPointer]	*	array[negPointer];
    const posElementSquare = array[posPointer]	*	array[posPointer];

		if(negElementSquare < posElementSquare){
				squaredArray[smallestSquareIndex++] = negElementSquare
				negPointer--
		} else {
			squaredArray[smallestSquareIndex++] = posElementSquare
			posPointer++
		}
	}

	while(negPointer >= 0){
		squaredArray[smallestSquareIndex++] = array[negPointer]	*	array[negPointer];
		negPointer --
	}
	while(posPointer <1) {
		squaredArray[smallestSquareIndex++] = array[posPointer]	*	array[posPointer]
		posPointer++
	}
	
	return squaredArray
}


const nums1 = [-4,-1,0,3,10]

const nums2 = [-7,-3,2,3,11]

console.log(SquaresOfASortedArray(nums1))
console.log(SquaresOfASortedArray(nums2))
console.log(TwoPointers(nums1))
console.log(TwoPointers(nums2))
