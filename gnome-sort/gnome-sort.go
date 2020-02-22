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

func gnome_sort(array []int) []int {
	i := 0
	for i < len(array) { //iterate until end of array
		if i == 0 || array[i] > array[i-1] { //move "gnome" forward if "pots" in  correct order
			i++
		} else {
			array[i], array[i-1] = array[i-1], array[i] //swap if needed, go back
            i--
		}

	}
	return array
}

func main() {
	shuffled_array := random_sequence(0, 1000)
	fmt.Println("GNOME SORT")
	fmt.Println(shuffled_array)
	fmt.Println()
	fmt.Println(gnome_sort(shuffled_array))
}