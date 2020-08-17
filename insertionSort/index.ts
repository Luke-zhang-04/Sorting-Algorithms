import randomSequence from "../utils"

/**
 * Main insertionsort function
 * @param array - array to sort
 * @returns void; sorts in-place
 */
const insertionSort = <T>(array: T[]): void => {
    let comparator: T, // Make comparison with this value
        section: number 

    for (let i = 0; i < array.length; i++) { // Iterate through entire array
		comparator = array[i]
        section = i - 1
        
		while (section >= 0 && comparator < array[section]) { // Iterate through array from i to 0 backwards
			array[section + 1] = array[section] // If comparator <= array[section], move array[section] forward to make space
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
