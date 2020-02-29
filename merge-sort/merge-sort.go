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

func merge(array1 []int, array2 []int) []int {
	array := make([]int, 0)
	first, second := 0, 0

	for first < len(array1) && second < len(array2) {
		if array1[first] > array2[second] {
            array = append(array, array2[second])
			second++
		} else if array1[first] < array2[second] {
            array = append(array, array1[first])
			first++
		} else {
			array = append(array, array1[first])
			first++
			array = append(array, array2[second])
			second++
		}
	}

	for first < len(array1) {
		array = append(array, array1[first])
        first++
	}

	for second < len(array2) {
        array = append(array, array2[second])
		second ++
	}

	return array
}

func merge_sort(array []int) []int {
	if len(array) > 1 {
		//split array into two halves
		half := len(array) / 2
		left := array[:half]
		right := array[half:]

		//recursively call each merge sort for each half until array size is 1
        left = merge_sort(left)
        right = merge_sort(right)
        
        //merge left and right sides
        array = merge(left, right)
	}

	return array
}

func main() {
	fmt.Println("MERGE SORT")

	shuffled_array := random_sequence(0, 1000)

	fmt.Println(shuffled_array)
	fmt.Println()
	fmt.Println(merge_sort(shuffled_array))
}