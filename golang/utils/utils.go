package utils

import (
	"math/rand"
	"time"
)

// RandomSequence generates a random sequence of numbers between minimum and maximum
func RandomSequence(minimum, maximum int) []int { // Returns a shuffled array
	array := make([]int, 0)

	for i := minimum; i < maximum; i++ { // Create array and append numbers to it
		array = append(array, i)
	}

	rand.Seed(time.Now().UnixNano())
	rand.Shuffle(len(array), func(i, j int) { array[i], array[j] = array[j], array[i] }) // Shuffle the array

	return array
}

// Includes if array includes
func Includes(array []int, target int) bool {
	for _, val := range array {
		if val == target {
			return true
		}
	}

	return false
}

// Max gets largest number in array
func Max(array []int) int {
	largest := array[0]
	for _, i := range array {
		if i > largest {
			largest = i
		}
	}
	return largest
}

// Min gets smallest number in array
func Min(array []int) int {
	smallest := array[0]
	for _, i := range array {
		if i < smallest {
			smallest = i
		}
	}
	return smallest
}
