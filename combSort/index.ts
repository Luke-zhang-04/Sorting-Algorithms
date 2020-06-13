import randomSequence from "../utils"

/**
 * Finds the next gap to increment the sort by
 * @param {number} gap - current gay to use
 * @returns {number} new gap
 */
const nextGap = (gap: number): number => {
    const newGap = Math.floor((gap * 10)/13)

    return newGap < 1 ? 1 : newGap 
}

/**
 * Main combsort function
 * @param {Array.<number>} array - array to sort
 * @returns {void} void; sorts in place
 */
const combSort = (array: number[]): void => {
    let gap = array.length,
        swapped = true,
        swap = null

    while (gap > 1 || (gap > 1 && !swapped)) {
        gap = nextGap(gap)
        swapped = false

        for (let i = 0; i < array.length - gap; i++) { // Iterate through whole array
            if (array[i] > array[i + gap]) { // Swap if needed
                swap = array[i]
                array[i] = array[i + gap]
                array[i + gap] = swap
                swap = null

                swapped = true
            }
        }
    }
}

if (require.main === module) {
    let shuffled_array = randomSequence(0, 1000)
    console.log("COMB SORT")
    console.log(shuffled_array, "\n")
    combSort(shuffled_array)
    console.log(shuffled_array)
}

export default combSort
