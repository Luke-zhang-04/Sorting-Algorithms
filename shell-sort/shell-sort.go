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

func shell_sort(array []int) []int {
	gap := len(array)/2
	for gap >= 1 {
		for i := gap; i < len(array); i++ { //iterate through array, starting from gap
			comparator := array[i] //make comparisons with this
			var output int //for accessing x outside the array
			var index int //for negative indexes

			for x := i; x > gap-2; x -= gap { //iterate throguh array with gap as the step
				output = x //to access x outside the loop
				if x-gap < 0 { //in case of negative index
					index = len(array)-x-gap
				} else {
					index = x-gap
				}

				if array[index] <= comparator { //break when correct spot is found
					break
				} else { //otherwise, move elements forward to make space
					array[x] = array[index]
				}
			}
			array[output] = comparator //insert comparator in the correct spot
		}
		gap /= 2 //increment the gap
	}
	return array
}

func main() {
	fmt.Println("SHELL SORT")

	shuffled_array := random_sequence(0, 1000)

	fmt.Println(shuffled_array)

	fmt.Println()

	fmt.Println(shell_sort(shuffled_array))
}