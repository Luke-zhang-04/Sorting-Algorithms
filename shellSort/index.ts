import randomSequence from "../utils"

/**
 * Main shellsort function
 * @param {Array.<number>} array - array to sort
 * @returns {void} void; sorts in-place
 */
const shellSort = (array: number[]): void => {
    let gap = Math.floor(array.length/2) // Alternate gap sequence 4**iterations + 3 * 2**iterations + 1

    while (gap >= 1) {
        for (let i = gap; i < array.length; i ++) { // Iterate through array, starting from gap
            let comparator = array[i], //make comparisons with this
                index, // In case of negative index
                output: number = 0 // For accessing x outside the array

            for (let x = i; x > gap - 2; x -= gap) { // Iterate throguh array with gap as the step
                output = x // For accessing x outside the array
                if (x - gap < 0) { // In case of negative index
                    index = array.length - x - gap
                } else {
                    index = x - gap
                }
                
                if (array[index] <= comparator) { // Break when correct spot is found
                    break 
                } else { // Otherwise, move elements forward to make space
                    array[x] = array[index] 
                }
            }
            array[output] = comparator // Insert comparator in the correct spot
        }
        gap = Math.floor(gap / 2) // Increment the gap
    }
}

if (require.main === module) {
    const shuffledArray = randomSequence(0, 1000)
    console.log("SHELL SORT")
    console.log(shuffledArray, "\n")
    shellSort(shuffledArray)
    console.log(shuffledArray, "\n")
}

export default shellSort
