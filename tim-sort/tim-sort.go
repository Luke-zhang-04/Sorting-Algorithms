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

func insertion_sort(array []int) []int {
	for i := 0; i < len(array); i++ { //iterate through entire array
		comparator := array[i] //make comparison with this value
		section := i - 1
		for section >= 0 && comparator < array[section] { //iterate through array from i to 0 backwards
			array[section+1] = array[section] //if comparator <= array[section], move array[section] forward to make space
			section --
		}
		array[section+1] = comparator //insert comparator into the array, in its correct position
	}
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

func tim_sort(array []int, run int) []int {
	parts := make([][]int, 0)

	for i := 0; i < len(array); i += run {
		parts = append(parts, array[i:i+run])
	}

	for index, elem := range parts {
		parts[index] = insertion_sort(elem)
	}
	
	for len(parts) > 1 {
		out := make([][]int, 0)
		for i := 0; i < len(parts); i += 2 {
			out = append(out, merge(parts[i], parts[i+1]))
		}
		parts = out
	}
	return parts[0]
}

func main() {
	fmt.Println("TIM SORT")

	shuffled_array := random_sequence(0, 1000)

	fmt.Println(shuffled_array)

	fmt.Println()

	fmt.Println(tim_sort(shuffled_array, 32))
}