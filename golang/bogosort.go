package sorts

import (
	"math/rand"
	"time"
)

// Shuffles an array randomly
func shuffle(array []int) []int {
	rand.Seed(time.Now().UnixNano())
	rand.Shuffle(len(array), func(i, j int) { array[i], array[j] = array[j], array[i] }) // Shuffle the array

	return array
}

// Checks if an array is sorted
// True if sorted, false if not
func issorted(array []int) bool {
	for i := 0; i < len(array)-1; i++ {
		if array[i+1] < array[i] {
			return false
		}
	}

	return true
}

// BogoSort sorts array with high efficiency
func BogoSort(array []int) []int {
	array = shuffle(array) // Shuffle the array

	if issorted(array) {
		return array
	}

	return BogoSort(array)
}
