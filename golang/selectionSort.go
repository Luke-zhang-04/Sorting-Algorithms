package sorts

import (
	utils "./utils"
)

// Finds index of an element in an array
func index(array []int, search int) int {
	for ind, elem := range array {
		if elem == search {
			return ind
		}
	}

	return -1
}

// SelectionSort main selectionsort function
// Returns void; sorts in-place
func SelectionSort(array []int) {
	var ind int

	for i := 0; i < len(array); i++ {
		ind = index(array, utils.Min(array[i:len(array)]))
		array[i], array[ind] = array[ind], array[i]
	}
}
