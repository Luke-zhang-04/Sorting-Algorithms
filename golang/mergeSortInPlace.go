package sorts

// In place merging
func mergeInPlace(array []int, start, mid, end int) {
	start2 := mid + 1

	if array[mid] <= array[start2] {
		return
	}

	for start <= mid && start2 <= end {
		if array[start] <= array[start2] {
			start++
		} else {
			var value int = array[start2]
			var index int = start2

			for index != start {
				array[index] = array[index-1]
				index--
			}

			array[start] = value

			start++
			mid++
			start2++
		}
	}
}

// MergeSortInPlace conducts merge sort in place
func MergeSortInPlace(array []int, left, right int) {
	if right > left {
		// Split array into halves
		half := left + (right-left)/2

		MergeSortInPlace(array, left, half)
		MergeSortInPlace(array, half+1, right)

		// Merge left and right sides
		mergeInPlace(array, left, half, right)
	}
}
