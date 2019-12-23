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

func insertion_sort(array []int) []int {
	for i := 0; i < len(array); i++ {
		comparator := array[i]
		section := i - 1
		for section >= 0 && comparator < array[section] {
			array[section+1] = array[section]
			section --
		}
	array[section+1] = comparator
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