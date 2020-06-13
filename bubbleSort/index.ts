import randomSequence from "../utils"

/**
 * Main bubble sort function
 * @param {Array.<number>} array - array to sort
 * @returns {void} void; sorts in place
 */
const bubbleSort = (array: number[]): void => {
    let swaps: number, // Number of swaps
        temp: number // For swapping

    for (let amt = 0; amt < array.length; amt++) {
        swaps = 0

        for (let i = 0; i < array.length - 1 - amt; i++) { // Iterate through array
            if (array[i] > array[i + 1]) { // Swap if needed
                temp = array[i + 1]
				array[i + 1] = array[i]
                array[i] = temp
				swaps ++
            }
        }
        if (swaps === 0) {
            break
        }
    }

}

if (require.main === module) {
    let shuffledArray = randomSequence(0, 1000)
    console.log("BUBBLE SORT")
    console.log(shuffledArray, "\n")
    bubbleSort(shuffledArray)
    console.log(shuffledArray)
}

export default bubbleSort
