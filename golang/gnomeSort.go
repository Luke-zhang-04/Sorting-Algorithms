package sorts

// GnomeSort main gnomesort function
// Sorts in place, returns void
func GnomeSort(array []int) {
	i := 0

	for i < len(array) { // Iterate until end of array
		if i == 0 || array[i] > array[i-1] { // Move "gnome" forward if "pots" in  correct order
			i++
		} else {
			array[i], array[i-1] = array[i-1], array[i] // Swap if needed, go back
			i--
		}

	}
}
