import randomSequence from "../utils"

/**
 * Counting sort function for radix sort{
 * @param {Array.<number>} array - array to sort
 * @param {number} exp - exponent for digit
 * @returns {void} void; sorts in place
 */
const countingSort = (array: number[], exp: number): void => {
    //create array with zeros
    let count = []
    for (let i = 0; i < Math.max(...array) + 1; i++) {
        count.push(0)
    }

    for (let i = 0; i < array.length; i++) { //iterate through given array, and add 1 to the index which is the value of array[i]
		count[digit(array[i], exp)] ++
	}

	for (let i = 1; i < count.length; i++) { //go through array and add previous index's value to the current index
		count[i] += count[i-1]
    }
    
    //create output array filled with null
    let output = []
    for (let i = 0; i < array.length; i++) {
        output.push(null)
    }

    //iterate through array and turn null types into sorted values
    for (let i = array.length - 1; i > -1; i--) {
        output[count[digit(array[i], exp)] - 1] = array[i]
        count[digit(array[i], exp)] --
    }
    
    array.length = 0
    array.push(...output as number[])
},

    /**
     * Indexes integer without type conversion (e.g digit(253, 1) returns 5)
     * @param {number} number - number to index
     * @param {number} n - exponent position
     * @return {number} indexed number
     */
    digit = (number: number, n: number): number => Math.floor(number / 10**n) % 10,

    /**
     * Seperates numbers in an array by digit while grouping them accordingly
     * @param {Array.<number>} array - array to seperate and group up
     * @param {number} digit - index to check
     * @returns {void} void; seperates in-place
     */
    seperate = (array: number[], digit: number): number[][] => {
        digit = 10 ** digit
        const output = []
        let counter = 0,
            minimum: string[] | number = Math.min(...array).toString().split('')

        for (let i = 0; i < minimum.slice(1).length; i++) {
            minimum[i+1] = "0"
        }

        minimum = Number(minimum.join(''))

        let beg
        for (
            let i = minimum + digit;
            i < Math.max(...array) + digit + 1;
            i += digit
        ) {
            beg = counter
            while (counter <= array.length) {
                if (counter === array.length || array[counter] >= i) {
                    if (counter - beg > 0) {
                        output.push(array.slice(beg, counter))
                    }
                    break
                }
                counter++
            }
        }

        return output
    },

    /**
     * Main radix sort function, for both LSD and MSD
     * @param {Array.<number>} array - array to sort
     * @param {number} digit - digit index
     */
    radixSort = (array: number[], mode?: "lsd" | "msd", digit?: number): void => {
        if (!mode || mode === "lsd") {
            for (
                let j = 0;
                j < Math.max(...array)
                    .toString()
                    .length;
                j++
            ) {
                countingSort(array, j)
            }

        } else if (mode === "msd") {
            if (digit === undefined) {
                digit = Math.max(...array).toString().length - 1
            }
            let output: number[] = [],
                array2: number[][] = []

            if (digit >= 0) {
                countingSort(array, digit)
                array2 = seperate(array, digit)

                for (let i of array2) {
                    radixSort(i, "msd", digit - 1)
                    output = output.concat(i)
                }
            } else {
                output = array.slice()
            }

            array.length = 0
            array.push(...output)
        }
    }

if (require.main === module) {
    let shuffledArray1 = randomSequence(0, 1000),
        shuffledArray2 = shuffledArray1.slice()

    console.log("RADIX SORT")
    console.log(shuffledArray1, "\n")

    console.log("LSD")
    radixSort(shuffledArray1)
    console.log(shuffledArray1)

    console.log("MSD")
    radixSort(shuffledArray2, "msd")
    console.log(shuffledArray2)
}

export default radixSort
