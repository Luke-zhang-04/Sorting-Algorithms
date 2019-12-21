package main

import (
	"math/rand"
	"time"
	"fmt"
)

func random_sequence(minimum, maximum int) []int {
	array := make([]int, 0)
	for i := minimum; i < maximum; i++ {
		array = append(array, i)
	}

	rand.Seed(time.Now().UnixNano())
	rand.Shuffle(len(array), func(i, j int) { array[i], array[j] = array[j], array[i] })

	return array
}

func bubble_sort(array []int) []int {
	var swaps int
	for true {
		swaps = 0
		for i := 0; i < len(array)-1; i++ {
			if array[i] > array[i+1] {
				array[i], array[i+1] = array[i+1], array[i]
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
	fmt.Println(shuffled_array)
	fmt.Println()
	fmt.Println(bubble_sort(shuffled_array))
}