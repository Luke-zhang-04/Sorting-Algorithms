import randomSequence from "../utils"

/**
 * Main countingsort function
 * @param {Array.<number>} array - array to sort
 * @returns {Array.<number | null>} sorted array; does not sort in-place
 */
const countingSort = (array: number[]):(null | number)[] => {
    // Create array with zeros
    const count: number[] = []
    for (let i = 0; i < Math.max(...array) + 1; i++) {
        count.push(0)
    }

    for (let i = 0; i < array.length; i++) { // Iterate through given array, and add 1 to the index which is the value of array[i]
		count[array[i]]++
	}

	for (let i = 1; i < count.length; i++) { // Go through array and add previous index's value to the current index
		count[i] += count[i - 1]
    }
    
    // Create output array filled with null
    let output: (number | null)[] = []
    for (let i = 0; i < array.length; i++) {
        output.push(null)
    }

    // Iterate through array and turn none types into sorted values
    for (const i of array) {
        output[count[i] - 1] = i,
        count[i] -= 1
    }

    return output
}

if (require.main === module) {
    const shuffledArray = randomSequence(0, 1000)
    console.log("COUNTING SORT")
    console.log(shuffledArray, "\n")
    const sortedArray = countingSort(shuffledArray)
    console.log(sortedArray)
}

export default countingSort
