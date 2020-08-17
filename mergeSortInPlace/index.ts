import randomSequence from "../utils"

/**
 * Merges an array with indexes start, middle, and end in place
 * Merges arrays array[start:mid] and array[mid:end]
 * @param array main array
 * @param start - starting point of segment to be merged
 * @param mid - middle point of segment to be merged
 * @param end - end point of segment to be merged
 * @returns void; merges in-place
 */
const merge = <T>(
    array: T[],
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
 * @param array - array to sort
 * @param left - beginning of segment to be sorted (pass in 0 if sorting entire array)
 * @param right - end of segment to be sorted (pass in array.length - 1 if sorting entire array)
 * @returns void; sorts in-place
 */
const mergeSort = <T>(array: T[], left?: number, right?: number): void => {
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
