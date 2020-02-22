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

func shuffle(array []int) []int { //returns a shuffled array
	rand.Seed(time.Now().UnixNano())
	rand.Shuffle(len(array), func(i, j int) { array[i], array[j] = array[j], array[i] }) //shuffle the array

	return array
}

func is_sorted(array []int) bool { //if array is sorted
	for i := 0; i < len(array)-1; i++ {
		if array[i+1] < array[i] {
			return false
		}
	}
	return true
}

func bogo_sort(array []int) []int {
	array = shuffle(array) //shuffle the array
	if is_sorted(array) {  //check if the array is sorted, otherwise recurse
		return array
	} else {
		return bogo_sort(array)
	}
}

func main() {
	shuffled_array := random_sequence(0, 10) //don't set this value too high
	fmt.Println("BOGO SORT AKA STUPID SORT")
	fmt.Println(shuffled_array)
	fmt.Println()
	fmt.Println(bogo_sort(shuffled_array))
}
