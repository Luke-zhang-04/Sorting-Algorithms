package main

import (
	"math/rand"
	"math"
	"time"
	"fmt"
	"strconv"
)

func random_sequence(smallest, maximum int) []int { //returns a shuffled array
	array := make([]int, 0)
	for i := smallest; i < maximum; i++ { //create array and append numbers to it
		array = append(array, i)
	}

	rand.Seed(time.Now().UnixNano())
	rand.Shuffle(len(array), func(i, j int) { array[i], array[j] = array[j], array[i] }) //shuffle the array

	return array
}

func max(array []int) int { //gets largest number in array
	largest := array[0]
	for _, i := range array {
		if i > largest {
			largest = i
		}
	}
	return largest
}

func min(array []int) int { //gets smallest number in array
	smallest := array[0]
	for _, i := range array {
		if i < smallest {
			smallest = i
		}
	}
	return smallest
}

func counting_sort(array []int, exp int) []int {
	count := make([]int, max(array)+1) 

	for i := 0; i < len(array); i++ { //iterate through given array, and add 1 to the index which is the value of array[i]
		count[digit(array[i], exp)] ++
	}

	for i := 1; i < len(count); i++ { //go through array and add previous index's value to the current index
		count[i] += count[i-1]
	}

	output := make([]int, len(array)) //create output array
	for i := len(array)-1; i > -1; i-- { //iterate through array and plug in sorted values
		output[count[digit(array[i], exp)]-1] = array[i]
        count[digit(array[i], exp)] --
	}

	return output
}

func digit(number, n int) int {
	return number / int(math.Pow10(n)) % 10
}

func list(str string) []rune {
	output := make([]rune, 0)
	for _, i := range(str) {
		output = append(output, i)
	}
	return output
}

func seperate(array []int, digit int) [][]int {
	digit = int(math.Pow10(digit))
	output := make([][]int, 0)
	counter := 0
	smallest := list(string(min(array)))
	for i := 0; i < len(smallest[1:]); i++ {
		smallest[i+1] = '0'
	}
	minimum, _ := strconv.Atoi(string(smallest))
	var beg int
	for i := minimum+digit; i < max(array)+digit+1; i += digit {
		beg = counter

		for counter <= len(array) {
			if counter == len(array) || array[counter] >= i {
				if counter-beg > 0 {
					output = append(output, array[beg:counter])
				}
				break
			}
			counter++
		}
	}
	return output
}

func radix_sort(array []int, digit int, mode string) []int {
	if mode == "lsd" {
		for i := 0; i < len(string(max(array)))+1; i++ {
			array = counting_sort(array, i)
		}
		return array

	} else if mode == "msd" {
		if digit == -2 {
			digit = len(string(max(array)))
		}
		output := make([]int, 0)

		if digit >= 0 {
			array = counting_sort(array, digit)
			array := seperate(array, digit)
			for i := 0; i < len(array); i++ {
				output = append(output, radix_sort(array[i], digit-1, "msd")...)
			}
		} else {
			output = array
		}

		return output

	} else {
		return radix_sort(array, 0, "lsd")
	}
}

func main() {
	shuffled_array := random_sequence(0, 1000)
	fmt.Println("RADIX SORT")
	fmt.Println(shuffled_array)
	fmt.Println()

	fmt.Println("LSD")
	fmt.Println(radix_sort(shuffled_array, 0, "lsd"))

	fmt.Println("MSD")
	fmt.Println(radix_sort(shuffled_array, len(string(max(shuffled_array))), "msd"))
}