package main

import (
	"math/rand"
	"time"
	"fmt"
)

func random_sequence(minimum, maximum int) []int { //returns a shuffled array
	array := make([]int, 0)
	for i := minimum; i < maximum; i++ { //create array and append numbers to it
		array = append(array, i)
	}

	rand.Seed(time.Now().UnixNano())
	rand.Shuffle(len(array), func(i, j int) { array[i], array[j] = array[j], array[i] }) //shuffle the array

	return array
}

func min(array []int) int {
	minimum := array[0]
	for _, i := range array {
		if i < minimum {
			minimum = i
		}
	}
	return minimum
}

func index(array []int, search int) int {
	for ind, elem := range array {
		if elem == search {
			return ind
		}
	}
	return 0
}

func selection_sort(array []int) []int {
	var ind int
	for i := 0; i < len(array); i++ {
		ind = index(array, min(array[i:len(array)]))
		array[i], array[ind] = array[ind], array[i]
	}
	return array
}

func main() {
	shuffled_array := random_sequence(0, 1000) //don't set this value too high
	fmt.Println("BOGO SORT AKA STUPID SORT")
	fmt.Println(shuffled_array)
	fmt.Println()
	fmt.Println(selection_sort(shuffled_array))
}