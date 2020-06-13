package sorts

// InsertionSort main function for insertionsort
// Returns void; sorts in-place
func InsertionSort(array []int) {
	for i := 0; i < len(array); i++ { // Iterate through entire array
		comparator := array[i] // Make comparison with this value
		section := i - 1
		for section >= 0 && comparator < array[section] { // Iterate through array from i to 0 backwards
			array[section+1] = array[section] // If comparator <= array[section], move array[section] forward to make space
			section--
		}
		array[section+1] = comparator // Insert comparator into the array, in its correct position
	}
}
