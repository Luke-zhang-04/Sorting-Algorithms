import randomSequence from "../utils"

/**
 * Main insertionsort function
 * @param array - array to sort
 * @param start - start of array segment
 * @param end - end of array segment
 * @returns void; sorts in-place
 */
const insertionSort = <T>(array: T[], start: number, end: number): void => {
        let comparator: T, // Make comparison with this value
            section: number

        for (let i = start + 1; i < end; i++) { // Iterate through entire array
            comparator = array[i]
            section = i - 1
            
            while (section >= start && comparator < array[section]) { // Iterate through array from i to 0 backwards
                array[section + 1] = array[section] // If comparator <= array[section], move array[section] forward to make space
                section --
            }
            
            array[section + 1] = comparator // Insert comparator into the array, in its correct position
        }
    },

    /**
     * Merges an array with indexes start, middle, and end in place
     * Merges arrays array[start:mid] and array[mid:end]
     * @param array main array
     * @param start - starting point of segment to be merged
     * @param mid - middle point of segment to be merged
     * @param end - end point of segment to be merged
     * @returns void; merges in-place
     */
    merge = <T>(
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
    },

    /**
     * @param array - array to sort
     * @param run - blocks to sort in. Should be a power of two. 32 by default
     * @returns void; sorts in-place
     */
    timSort = <T>(array: T[], run: number = 32): void => {
        // Run insertionsort on the blocks
        for (let i = 0; i < array.length; i += run) {
            insertionSort(array, i, Math.min(i + run, array.length))
        }

        // Run merges
        let size = run
        while (size < array.length) {
            for (let left = 0; left < array.length; left += size * 2) {
                const mid = left + size - 1,
                    right = Math.min((left + 2 * size - 2), (array.length - 1))

                merge(array, left, mid, right)
            }

            size *= 2
        }
    }


if (require.main === module) {
    const shuffledArray = randomSequence(0, 1000)
    console.log("IN PLACE MERGE SORT")
    console.log(shuffledArray, "\n")
    timSort(shuffledArray)
    console.log(shuffledArray)
}
    
export default timSort
