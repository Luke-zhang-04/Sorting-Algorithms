package sorts

// Returns smaller of the two
func smaller(first, second int) int {
	if first < second {
		return first
	}

	return second
}

// insertionSort main function for insertionsort
// Returns void; sorts in-place
func insertionSort(array []int, start, end int) {
	for i := start + 1; i < end; i++ { // Iterate through entire array
		comparator := array[i] // Make comparison with this value
		section := i - 1

		for section >= start && comparator < array[section] { // Iterate through array from i to 0 backwards
			array[section+1] = array[section] // If comparator <= array[section], move array[section] forward to make space
			section--
		}
		array[section+1] = comparator // Insert comparator into the array, in its correct position
	}
}

// WARNING: WHEN USING THIS SORT BY ITSELF, MAKE SURE THE NEXT FUNCTION IS NOT COMMENTED OUT
/*
// In place merging
func mergeInPlace(array []int, start, mid, end int) {
	start2 := mid + 1

	if array[mid] <= array[start2] {
		return
	}

	for start <= mid && start2 <= end {
		if array[start] <= array[start2] {
			start++
		} else {
			var value int = array[start2]
			var index int = start2

			for index != start {
				array[index] = array[index-1]
				index--
			}

			array[start] = value

			start++
			mid++
			start2++
		}
	}
}
*/

// TimSort main timsort function
// Run should be a power of 2 to work best. Pass in 32 for default
func TimSort(array []int, run int) {
	// Run insertionsort
	for i := 0; i < len(array); i += run {
		insertionSort(array, i, smaller(i+run, len(array)))
	}

	// Run merges
	size := run
	for size < len(array) {
		for left := 0; left < len(array); left += size * 2 {
			mid := left + size - 1
			right := smaller((left + 2*size - 1), (len(array) - 1))

			mergeInPlace(array, left, mid, right)
		}

		size *= 2
	}
}
