import randomSequence from "../utils"

/**
 * Moves array elements to the correct sides of pivot
 * @param array - array to partition
 * @param left - beginning of array segment to partition
 * @param right - end of array segment to partition
 * @param pt - pivot point
 * @returns new pivot
 */
const partition = <T>(
    array: T[],
    left: number,
    right: number,
    pt: number,
): number => {
    let swaps, // Keep track of the swaps made
        temp // Temporary variable for swapping

    while (true) {
        swaps = 0

        for (let i = left; i < pt; i++) { // Start from left side of the pivot (if pivot point isn't 0)
            if (array[pt] < array[i]) { // Swap if element is larger than pivot
                temp = array[pt]
                array[pt] = array[i]
                array[i] = temp
                pt = i
                swaps ++
                break
            }
        }

        for (let i = right; i > pt; i--) { // Start from right side of the pivot
            if (array[pt] > array[i]) { // Swap if element is smaller than pivot
                temp = array[pt]
                array[pt] = array[i]
                array[i] = temp
                pt = i
                swaps ++
                break
            }
        }

        if (swaps === 0) { // Pivot is in the correct spot
            break
        }
    }

    return pt
}

/**
 * Main quicksort function
 * @param array - array to sort
 * @param left - start of array segment to sort, leave undefined for whole array
 * @param right - end of array segment to sort, leave undefined for whole array
 * @returns void; sorts in-place
 */
const quickSort = <T>(array: T[], left?: number, right?: number): void => {
    if (left === undefined || right === undefined) {
        [left, right] = [0, array.length - 1]
    }

    if (left < right - 1) {
        const half = Math.floor((left + right) / 2), // Midpoint of the array. Math.floor is integer division
            [start, middle, end] = [array[left], array[half], array[right]]

        let pivotPt

        // Choose pivot point (median of the first, middle, and last element) to avoid exponential running time
        if ((start > end && start < middle) || (start < end && start > middle)) {
			pivotPt = left
		} else if ((end > start && end < middle) || (end < start && end > middle)) {
			pivotPt = right - 1
		} else {
			pivotPt = half
        }
        
        // Move pivot to right spot, move elements onto the correct side of the pivot, and get the new pivot point
        const pt = partition(array, left, right, pivotPt)

        // Recursively quicksort the remaining subarrays
        quickSort(array, pt, right)
        quickSort(array, left, pt)
    }
}

if (require.main === module) {
    const shuffledArray = randomSequence(0, 1000)
    console.log("QUICK SORT")
    console.log(shuffledArray, "\n")
    quickSort(shuffledArray)
    console.log(shuffledArray)
}

export default quickSort
