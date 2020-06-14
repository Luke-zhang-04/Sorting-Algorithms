package sorts

// Moves array elements to the correct sides of pivot (pt)
func partition(array []int, left, right, pt int) int {
	var swaps int // Keep track of the swaps made

	for true {
		swaps = 0

		for i := left; i < pt; i++ { // Start from left side of the pivot (if pivot point isn't 0)
			if array[pt] < array[i] { // Swap if element is larger than pivot
				array[pt], array[i] = array[i], array[pt]
				pt = i
				swaps ++
				break
			}
		}

		for i := right; i > pt; i-- { // Start from right side of the pivot
			if array[pt] > array[i] { // Swap if element is smaller than pivot
				array[pt], array[i] = array[i], array[pt]
				pt = i
				swaps ++
				break
			}
		}

		if swaps == 0 { // {ivot is in the correct spot
			break
		}
	}

	return pt
}

// QuickSort main quicksort function
// Set left to 0, and right to len(array) - 1
func QuickSort(array []int, left, right int) {
	if left < right - 1 {
		half := (left + right) / 2 // Midpoint of the array
		start, middle, end := array[left], array[half], array[right]

		var pivotPt int

		// Choose pivot point (median of the first, middle, and last element) to avoid exponential running time
		if (start > end && start < middle) || (start < end && start > middle) {
			pivotPt = left
		} else if (end > start && end < middle) || (end < start && end > middle) {
			pivotPt = right - 1
		} else {
			pivotPt = half
		}

		// Move pivot to right spot, move elements onto the correct side of the pivot, and get the new pivot point
		var pt int = partition(array, left, right, pivotPt)

		// Recursively quicksort the remaining subarrays
		QuickSort(array, pt, right)
		QuickSort(array, left, pt)
	}
}
