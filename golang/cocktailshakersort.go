package sorts

// CocktailShakerSort main cocktail shaker sort function
func CocktailShakerSort(array []int) {
	var swaps, section int //number of swaps

	for amt := 0; amt < len(array) / 2 + len(array) % 2; amt++ { //iterate for half the length of the array plus one if odd
		swaps = 0

		if amt > 0 {
			section = len(array[amt:len(array) - amt])
		} else {
			section = len(array)
		}

		for i := 0; i < section-1; i++ { //iterate through entire array
			if array[amt + i] > array[amt + i + 1] { //swap if needed
				array[amt + i], array[amt + i + 1] = array[amt + i + 1], array[amt + i]
				swaps ++
			}
		}

		if swaps == 0 { //array is in order, this break statement could save time
			break
		}

		for i := section - 1; i > 0; i-- {
			if array[amt + i] < array[amt + i - 1] { //swap if needed
				array[amt + i], array[amt + i - 1] = array[amt + i - 1], array[amt + i]
				swaps ++
			}
		}

		if swaps == 0 { //array is in order, this break statement could save time
			break
		}
	}
}
