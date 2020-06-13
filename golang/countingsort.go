package sorts

// Gets largest number in array
func max(array []int) int {
	largest := array[0]
	for _, i := range array {
		if i > largest {
			largest = i
		}
	}
	return largest
}

// CountingSort main countingsort function
// Does not sort in place, returns []int
func CountingSort(array []int) []int {
	count := make([]int, max(array)+1)

	for i := 0; i < len(array); i++ { // Iterate through given array, and add 1 to the index which is the value of array[i]
		count[array[i]]++
	}

	for i := 1; i < len(count); i++ { // Go through array and add previous index's value to the current index
		count[i] += count[i-1]
	}

	output := make([]int, len(array)) // Create output array
	for _, i := range array {         // Iterate through array and plug in sorted values
		output[count[i]-1] = i
		count[i]--
	}

	return output
}
