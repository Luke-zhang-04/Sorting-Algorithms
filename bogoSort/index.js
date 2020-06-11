/**
 * Generates an array of random numbers
 * @param {number} minimum - num number to start with
 * @param {number} maximum - max number to start with
 * @returns {Array.<number>} array of random numbers
 */
const randomSequence = (minimum, maximum) => {
    const array = []

    for (let i = minimum; i < maximum; i++) { // Create array and append numbers to it
        array.push(i)
    }
    array.sort(() => Math.random() - 0.5) // Shuffle the array

    return array
}

/**
 * Shuffles an array
 * @param {Array.<number>} array - array to be shuffled
 * @returns {Array.<number>} array of shuffled numbers
 */
const shuffle = (array) => {
    array.sort(() => Math.random() - 0.5) // Shuffle the array

    return array
}

/**
 * Checks if an array is sorted
 * @param {Array.<number>} array - array to check
 * @returns {boolean} true if sorted false otherwise
 */
const issorted = (array) => {
    for (i = 0; i < array.length - 1; i++) {
		if (array[i + 1] < array[i]) {
			return false
		}
    }
    
	return true
}

const bogoSort = (array) => {
    array = shuffle(array) //shuffle the array

	return issorted(array) ? array : bogoSort(array)
}

const shuffled_array = randomSequence(0, 7) //max range
console.log("BOGO SORT AKA STUPID SORT")
console.log(shuffled_array.toString(), "\n")
console.log(bogoSort(shuffled_array).toString())
