import randomSequence from "../utils"

/**
 * Finds smallest number in an array
 * @param array - array to find smallest number in
 * @returns smallest number in array
 */
const min = <T>(array: T[]): T => {
        let smallest = array[0]

        for (const val of array) {
            if (val < smallest) {
                smallest = val
            }
        }

        return smallest
    },

    /**
     * Main selectionsort function
     * @param - array to search
     * @returns void; sorts in-place
     */
    selectionSort = <T>(array: T[]): void => {
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
