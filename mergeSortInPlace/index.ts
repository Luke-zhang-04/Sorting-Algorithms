import randomSequence from "../utils"

/**
 * Merges an array with indexes start, middle, and end in place
 * Merges arrays array[start:mid] and array[mid:end]
 * @param {Array.<number>} array main array
 * @param {number} start - starting point of segment to be merged
 * @param {number} mid - middle point of segment to be merged
 * @param {number} end - end point of segment to be merged
 * @returns {void} void; merges in-place
 */
const merge = (
    array: number[],
    start: number,
    mid: number,
    end: number,
): void => {
    let start2 = mid + 1

    if (array[mid] <= array[start2]) {
        return
    }

    while (start <= mid && start2 <= end) {
        if (array[start] <= array[start2]) {
            start ++
        } else {
            let value = array[start2],
                index = start2
            
            while (index != start) {
                array[index] = array[index - 1]
                index --
            }

            array[start] = value

            start ++
            mid ++
            start2 ++
        }
    }
}

/**
 * Main mergesort function
 * @param {Array.<number>} array - array to sort
 * @param {number} left - beginning of segment to be sorted (pass in 0 if sorting entire array)
 * @param {number} right - end of segment to be sorted (pass in array.length - 1 if sorting entire array)
 * @returns {void} void; sorts in-place
 */
const mergeSort = (array: number[], left?: number, right?: number): void => {
    if (left === undefined || right === undefined) {
        [left, right] = [0, array.length - 1]
    }

    if (right > left) {
        // Split array into halves
        const half = Math.floor(left + (right - left) / 2) // Halfway point

        mergeSort(array, left, half)
        mergeSort(array, half + 1, right)

        // Merge left and right sides
        merge(array, left, half, right)
    }
}

if (require.main === module) {
	const shuffledArray = randomSequence(0, 1000)
	console.log("IN PLACE MERGE SORT")
	console.log(shuffledArray, "\n")
	mergeSort(shuffledArray, 0, shuffledArray.length - 1)
	console.log(shuffledArray)
}

export default mergeSort
