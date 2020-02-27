package main

import (
	"fmt"
	"math/rand"
	"time"
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

func nextGap(gap int) int {
	gap = int(gap*10) / 13
	if gap < 1 {
		gap = 1
	}
	return gap
}

func comb_sort(array []int) []int {
	gap := len(array)
	swapped := true

	for gap > 1 || !swapped {
		gap = nextGap(gap)
		swapped = false

		for i := 0; i < len(array)-gap; i++ { //iterate thorugh whole array
			if array[i] > array[i+gap] { //swap if needed
				array[i], array[i+gap] = array[i+gap], array[i]
				swapped = true
			}
		}
	}

	return array
}

func main() {
	fmt.Println("INSERTION SORT")

	shuffled_array := random_sequence(0, 1000)

	fmt.Println(shuffled_array)
	fmt.Println()
	fmt.Println(comb_sort(shuffled_array))
}
