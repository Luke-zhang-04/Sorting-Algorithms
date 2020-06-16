import randomSequence from "../utils"

/**
 * Finds smallest number in an array
 * @param {Array.<number>} array - array to find smallest number in
 * @returns {number} smallest number in array
 */
const min = (array: number[]): number => Math.min.apply(Math, array),

    /**
     * Main selectionsort function
     * @param {Array.<number>} - array to search
     * @returns {void} void; sorts in-place
     */
    selectionSort = (array: number[]): void => {
        let ind
        let temp
        for (let i = 0; i < array.length; i++) {
            ind = array.indexOf(min(array.slice(i, array.length+1)))
            temp = array[i]
            array[i] = array[ind]
            array[ind] = temp
        }

    }

if (require.main === module) {
    let shuffledArray = randomSequence(0, 1000)
    console.log("SELECTON SORT")
    console.log(shuffledArray, "\n")
    selectionSort(shuffledArray)
    console.log(shuffledArray)
}

export default selectionSort
