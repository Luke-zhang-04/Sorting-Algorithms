import randomSequence from "../utils"

/**
 * Main gnomesort function
 * @param array - array to sort
 * @returns void; sorts in place
 */
const gnomeSort = <T>(array: T[]): void => {
    let temp: T,
        i = 0
        
	while (i < array.length) { // Iterate until end of array
		if (i == 0 || array[i] > array[i - 1]) { // Move "gnome" forward if "pots" in  correct order
			i ++
		} else {
            temp = array[i - 1]

            array[i - 1] = array[i] // Swap if needed, go back
            array[i] = temp
            
            i --
		}

	}
}

if (require.main === module) {
	const shuffledArray = randomSequence(0, 1000)
	console.log("GNOME SORT")
	console.log(shuffledArray, "\n")
	gnomeSort(shuffledArray)
	console.log(shuffledArray)
}

export default gnomeSort
