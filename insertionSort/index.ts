import randomSequence from "../utils"

/**
 * Main insertionsort function
 * @param {Array.<number>} array - array to sort
 * @returns {void} void; sorts in-place
 */
const insertionSort = (array: number[]): void => {
    let comparator, // Make comparison with this value
        section 

    for (let i = 0; i < array.length; i++) { // Iterate through entire array
		comparator = array[i]
        section = i - 1
        
		while (section >= 0 && comparator < array[section]) { // Iterate through array from i to 0 backwards
			array[section+1] = array[section] // If comparator <= array[section], move array[section] forward to make space
			section --
        }
        
        array[section+1] = comparator // Insert comparator into the array, in its correct position
	}
}

if (require.main === module) {
    const shuffledArray = randomSequence(0, 1000)
    console.log("INSERTION SORT")
    console.log(shuffledArray)
    insertionSort(shuffledArray)
    console.log(shuffledArray)
}

export default insertionSort
