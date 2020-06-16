package sorts

// ShellSort main shellsort algorithm
// Returns void; sorts in-place
func ShellSort(array []int) {
	gap := len(array) / 2 // Alternate gap sequence 4**iterations + 3 * 2**iterations + 1
	for gap >= 1 {
		for i := gap; i < len(array); i++ { // Iterate through array, starting from gap
			comparator := array[i] // Make comparisons with this
			var output int         // For accessing x outside the array
			var index int          // For negative indexes

			for x := i; x > gap-2; x -= gap { // Iterate throguh array with gap as the step
				output = x     // To access x outside the loop
				if x-gap < 0 { // In case of negative index
					index = len(array) - x - gap
				} else {
					index = x - gap
				}

				if array[index] <= comparator { // Break when correct spot is found
					break
				} else { // Otherwise, move elements forward to make space
					array[x] = array[index]
				}
			}
			array[output] = comparator // Insert comparator in the correct spot
		}
		gap /= 2 // Increment the gap
	}
}
