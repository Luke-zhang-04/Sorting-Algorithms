import randomSequence from "../utils"

/**
 * Shuffles an array
 * @param {Array.<number>} array - array to be shuffled
 * @returns {Array.<number>} array of shuffled numbers
 */
const shuffle = (array: number[]): number[] => {
    array.sort(() => Math.random() - 0.5) // Shuffle the array

    return array
}

/**
 * Checks if an array is sorted
 * @param {Array.<number>} array - array to check
 * @returns {boolean} true if sorted false otherwise
 */
const issorted = (array: number[]): boolean => {
    for (let i = 0; i < array.length - 1; i++) {
		if (array[i + 1] < array[i]) {
			return false
		}
    }
    
	return true
}

/**
 * Sorts array with bogosort
 * @param {Array.<number>} array array to sort
 * @returns {Array.<number>} sorted array
 */
const bogoSort = (array: number[]): number[] => {
    array = shuffle(array) //shuffle the array

	return issorted(array) ? array : bogoSort(array)
}

if (require.main === module) {
    const shuffled_array = randomSequence(0, 7) //max range
    console.log("BOGO SORT AKA STUPID SORT")
    console.log(shuffled_array)
    console.log(bogoSort(shuffled_array))
}

export default bogoSort
