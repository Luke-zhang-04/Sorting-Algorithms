package sorts

// Merges two arrays array1 and array2 together
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
		second++
	}

	return array
}

// MergeSort main mergesort algorithm
func MergeSort(array []int) []int {
	if len(array) > 1 {
		// Split array into two halves
		half := len(array) / 2
		left := array[:half]
		right := array[half:]

		// Recursively call each merge sort for each half until array size is 1
		left = MergeSort(left)
		right = MergeSort(right)

		// Merge left and right sides
		array = merge(left, right)
	}

	return array
}
