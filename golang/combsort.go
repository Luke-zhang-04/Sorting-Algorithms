package sorts

// Finds the next gap to increment by
func nextGap(gap int) int {
	var newGap int = int(gap*10) / 13

	if newGap < 1 {
		newGap = 1
	}

	return newGap
}

// CombSort the main combsort function
func CombSort(array []int) {
	gap := len(array)
	swapped := true

	for gap >= 1 || (gap >= 1 && !swapped) {
		gap = nextGap(gap)
		swapped = false

		for i := 0; i < len(array)-gap; i++ { // Iterate thorugh whole array
			if array[i] > array[i+gap] { // Swap if needed
				array[i], array[i+gap] = array[i+gap], array[i]
				swapped = true
			}
		}

		if !swapped && gap == 1 {
			break
		}

	}
}
