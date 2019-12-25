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

func bubble_sort(array []int) []int {
	var swaps int //number of swaps
	for amt := 0; amt < len(array); amt++ {
		swaps = 0
		for i := 0; i < len(array)-1-amt; i++ { //iterate through entire array
			if array[i] > array[i+1] {
				array[i], array[i+1] = array[i+1], array[i]  //swap if needed
				swaps ++
			}
		}
		if swaps == 0 {
			break
		}
	}
	return array
}

func main() {
	shuffled_array := random_sequence(0, 1000)
	fmt.Println("BUBBLE SORT")
	fmt.Println(shuffled_array)
	fmt.Println()
	fmt.Println(bubble_sort(shuffled_array))
}