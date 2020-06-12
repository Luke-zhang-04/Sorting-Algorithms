package sorts

// BubbleSort main bubblesort function
func BubbleSort(array []int) {
	var swaps int //number of swaps

	for amt := 0; amt < len(array); amt++ {
		swaps = 0

		for i := 0; i < len(array)-1-amt; i++ { //iterate through entire array
			if array[i] > array[i+1] {
				array[i], array[i+1] = array[i+1], array[i] //swap if needed
				swaps++
			}
		}

		if swaps == 0 {
			break
		}
	}
}
