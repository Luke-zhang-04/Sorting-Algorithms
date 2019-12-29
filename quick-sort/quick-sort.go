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

func partition(array []int, pt int) ([]int, int) { //moves array elements to the correct sides of pivot (pt)
	var swaps int //keep track of the swaps made
	for true {
		swaps = 0

		for i := 0; i < pt; i++ { //start from left side of the pivot (if pivot point isn't 0)
			if array[pt] < array[i] { //swap if element is larger than pivot
				array[pt], array[i] = array[i], array[pt]
                pt = i
                swaps ++
                break
			}
		}
		for i := len(array)-1; i > pt; i-- { //start from right side of the pivot
			if array[pt] > array[i] { //swap if element is smaller than pivot
				array[pt], array[i] = array[i], array[pt]
                pt = i
                swaps ++
                break
			}
		}

		if swaps == 0 { //pivot is in the correct spot
			break
		}
	}

	return array, pt
}

func combine(array1 []int, array2 []int) []int { //combine two arrays together
	return append(array1, array2...)
}

func quick_sort(array []int) []int {
	if len(array) > 1 {
		half := len(array) / 2 //midpoint of the array
		start, middle, end := array[0], array[half], array[len(array)-1]
		var pivot_pt int

		//choose pivot point (median of the first, middle, and last element) to avoid exponential running time
		if (start > end && start < middle) || (start < end && start > middle) {
			pivot_pt = 0
		} else if  (end > start && end < middle) || (end < start && end > middle) {
			pivot_pt = len(array)-1
		} else {
			pivot_pt = half
		}

		//move pivot to right spot, move elements onto the correct side of the pivot, and get the new pivot point
		var pt int
		array, pt = partition(array, pivot_pt)

		//recursively quicksort the remaining subarrays
		right := quick_sort(array[pt:])
        left := quick_sort(array[:pt])

		array = combine(left, right) //combine left and right 

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