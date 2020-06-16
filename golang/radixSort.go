package sorts

import (
	"math"
	"strconv"

	utils "./utils"
)

func countingSort(array *[]int, exp int) {
	count := make([]int, utils.Max(*array)+1)

	for i := 0; i < len(*array); i++ { //iterate through given array, and add 1 to the index which is the value of array[i]
		count[digit((*array)[i], exp)]++
	}

	for i := 1; i < len(count); i++ { //go through array and add previous index's value to the current index
		count[i] += count[i-1]
	}

	output := make([]int, len(*array))      //create output array
	for i := len(*array) - 1; i > -1; i-- { //iterate through array and plug in sorted values
		output[count[digit((*array)[i], exp)]-1] = (*array)[i]
		count[digit((*array)[i], exp)]--
	}

	*array = output
}

func digit(number, n int) int {
	return number / int(math.Pow10(n)) % 10
}

func list(str string) []rune {
	output := make([]rune, 0)
	for _, i := range str {
		output = append(output, i)
	}
	return output
}

func seperate(array []int, digit int) [][]int {
	digit = int(math.Pow10(digit))
	output := make([][]int, 0)
	counter := 0
	smallest := list(string(utils.Min(array)))
	for i := 0; i < len(smallest[1:]); i++ {
		smallest[i+1] = '0'
	}
	minimum, _ := strconv.Atoi(string(smallest))
	var beg int
	for i := minimum + digit; i < utils.Max(array)+digit+1; i += digit {
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

// RadixSort main radix sort function
// Digit should be -2 when calling msd
func RadixSort(array *[]int, digit int, mode string) {
	if mode == "lsd" {
		for i := 0; i < len(string(utils.Max(*array)))+1; i++ {
			countingSort(array, i)
		}

	} else if mode == "msd" {
		if digit == -2 {
			digit = len(string(utils.Max(*array)))
		}
		array2 := make([][]int, 0)
		var output []int

		if digit >= 0 {
			output = make([]int, 0)

			countingSort(array, digit)
			array2 = seperate(*array, digit)

			for _, i := range array2 {
				RadixSort(&i, digit-1, "msd")
				output = append(output, i...)
			}
		} else {
			output = make([]int, len(*array))
			copy(output, *array)
		}

		// Reassign here
		*array = output

	} else {
		RadixSort(array, 0, "lsd")
	}
}
