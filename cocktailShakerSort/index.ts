import randomSequence from "../utils"

/**
 * Main cocktail shaker sort function
 * @param {Array.<number>} array - array to sort
 * @returns {void} void; sorts array in place
 */
const cocktailShakerSort = (array: number[]): void => {
    let swaps, // Number of swaps
        temp, // For swapping
        section

    for (let amt = 0; amt < array.length; amt++) {
        swaps = 0

        section = (amt > 0 ? array.slice(amt, -amt).length : array.length)

        for (let i = 0; i < section-1; i++) { // Iterate through array
            if (array[amt + i] > array[amt + i + 1]) { // Swap if needed
                temp = array[amt + i + 1]
                
				array[amt + i + 1] = array[amt + i]
                array[amt + i] = temp
				swaps ++
            }
        }

        if (swaps === 0) {
            break
        }

        for (let i = section - 1; i > 0; i--) {
            if (array[amt + i] < array[amt + i - 1]) { // Swap if needed
                temp = array[amt + i - 1]
                
				array[amt + i - 1] = array[amt + i]
                array[amt + i] = temp
				swaps ++
            }
        }

        if (swaps === 0) {
            break
        }
    }
}

if (require.main === module) {
    const shuffledArray = randomSequence(0, 1000)
    console.log("COCKTAIL SHAKER SORT")
    console.log(shuffledArray, "\n")
    cocktailShakerSort(shuffledArray)
    console.log(shuffledArray, "\n")
}

export default cocktailShakerSort
