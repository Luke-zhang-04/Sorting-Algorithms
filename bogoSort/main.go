package main

import (
	"fmt"
	"math/rand"
	"time"
)

// Generated a random sequence of numbers between minimum and maximum
func randomSequence(minimum, maximum int) []int { // Returns a shuffled array
	array := make([]int, 0)

	for i := minimum; i < maximum; i++ { // Create array and append numbers to it
		array = append(array, i)
	}

	rand.Seed(time.Now().UnixNano())
	rand.Shuffle(len(array), func(i, j int) { array[i], array[j] = array[j], array[i] }) // Shuffle the array

	return array
}

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

func bogoSort(array []int) []int {
	array = shuffle(array) // Shuffle the array

	if issorted(array) {
		return array
	}

	return bogoSort(array)
}

func main() {
	shuffledArray := randomSequence(0, 10) // Don't set this value too high
	fmt.Println("BOGO SORT AKA STUPID SORT")
	fmt.Println(shuffledArray)
	fmt.Println()
	fmt.Println(bogoSort(shuffledArray))
}
