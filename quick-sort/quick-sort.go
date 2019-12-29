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

func partition(array []int, pt int) ([]int, int) {
	var swaps int
	for true {
		swaps = 0

		for i := 0; i < pt; i++ {
			if array[pt] < array[i] {
				array[pt], array[i] = array[i], array[pt]
                pt = i
                swaps ++
                break
			}
		}
		for i := len(array)-1; i > pt; i-- {
			if array[pt] > array[i] {
				array[pt], array[i] = array[i], array[pt]
                pt = i
                swaps ++
                break
			}
		}

		if swaps == 0 {
			break
		}
	}

	return array, pt
}

func combine(array1 []int, array2 []int) []int {
	return append(array1, array2...)
}

func quick_sort(array []int) []int {
	if len(array) > 1 {
		half := len(array) / 2
		start, middle, end := array[0], array[half], array[len(array)-1]
		var pivot_pt int

		if (start > end && start < middle) || (start < end && start > middle) {
			pivot_pt = 0
		} else if  (end > start && end < middle) || (end < start && end > middle) {
			pivot_pt = len(array)-1
		} else {
			pivot_pt = half
		}

		var pt int
		array, pt = partition(array, pivot_pt)

		right := quick_sort(array[pt:])
        left := quick_sort(array[:pt])

		array = combine(left, right)

	}

	return array
}

func main() {
	fmt.Println("QUICK SORT")

	shuffled_array := random_sequence(0, 1000)

	fmt.Println(shuffled_array)
	fmt.Println()
	fmt.Println(quick_sort(shuffled_array))
}