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

func insertion_sort(array []int) []int {
	for i := 0; i < len(array); i++ { //iterate through entire array
		comparator := array[i] //make comparison with this value
		section := i - 1
		for section >= 0 && comparator < array[section] { //iterate through array from i to 0 backwards
			array[section+1] = array[section] //if comparator <= array[section], move array[section] forward to make space
			section --
		}
		array[section+1] = comparator //insert comparator into the array, in its correct position
	}
	return array
}

func main() {
	fmt.Println("INSERTION SORT")

	shuffled_array := random_sequence(0, 1000)

	fmt.Println(shuffled_array)
	fmt.Println()
	fmt.Println(insertion_sort(shuffled_array))
}