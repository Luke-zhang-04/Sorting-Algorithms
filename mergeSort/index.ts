import randomSequence from "../utils"

/**
 * Merges two arrays array1 and array2
 * @param {Array.<number>} array1 - first array to merge with
 * @param {Array.<number>} array2 - second array to merge with
 * @returns {Array.<number>} merges array
 */
const merge = (array1: number[], array2: number[]): number[] => {
    const array = []
    let first = 0,
        second = 0

    while (first < array1.length && second < array2.length) {
        if (array1[first] > array2[second]) {
            array.push(array2[second])
			second ++
		} else if (array1[first] < array2[second]) {
            array.push(array1[first])
			first ++
		} else {
            array.push(array1[first])
			first ++
            array.push(array2[second])
			second ++
        }
    }

    while (first < array1.length) {
        array.push(array1[first])
        first ++
    }

    while (second < array2.length) {
        array.push(array2[second])
        second ++
    }

    return array
}

/**
 * Main mergesort algorithm
 * @param {Array.<number>} array - array to sort
 * @returns {Array.<number>} sorted array; does not sort in-place
 */
const mergeSort = (array: number[]): number[] => {
    if (array.length > 1) {
        // Split array into two halves
        const half = array.length / 2
        let left = array.slice(0, half),
            right = array.slice(half)

		// Recursively call each merge sort for each half until array size is 1
        left = mergeSort(left)
        right = mergeSort(right)
        
        // Merge left and right sides
        array = merge(left, right)
    }

	return array
}

if (require.main === module) {
    const shuffledArray = randomSequence(0, 1000)
    console.log("MERGE SORT")
    console.log(shuffledArray, "\n")
    const sortedArray = mergeSort(shuffledArray)
    console.log(sortedArray)
}

export default mergeSort
