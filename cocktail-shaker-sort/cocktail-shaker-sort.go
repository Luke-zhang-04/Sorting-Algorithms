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

func cocktail_shaker_sort(array []int) []int {
	var swaps int //number of swaps
	var section int
	for amt := 0; amt < len(array)/2 + len(array) % 2; amt++ { //iterate for half the length of the array plus one if odd
		swaps = 0

		if amt > 0 {
			section = len(array[amt:len(array)-amt])
		} else {
			section = len(array)
		}

		for i := 0; i < section-1; i++ { //iterate through entire array
			if array[amt+i] > array[amt+i+1] { //swap if needed
                array[amt+i], array[amt+i+1] = array[amt+i+1], array[amt+i]
                swaps ++
			}
		}

		if swaps == 0 { //array is in order, this break statement could save time
			break
		}

		for i := section-1; i > 0; i-- {
			if array[amt+i] < array[amt+i-1] { //swap if needed
                array[amt+i], array[amt+i-1] = array[amt+i-1], array[amt+i]
                swaps ++
			}
		}

		if swaps == 0 { //array is in order, this break statement could save time
			break
		}
	}
	return array
}

func isSorted(array []int) bool {
	for i := 0; i < len(array)-1; i++ {
		if array[i] > array[i+1] {
			return false
		}
	}
	return true
}

func main() {
	shuffled_array := random_sequence(0, 1000)
	fmt.Println("COCKTAIL SHAKER SORT")
	fmt.Println(shuffled_array)
	fmt.Println()
	fmt.Println(cocktail_shaker_sort(shuffled_array))
}