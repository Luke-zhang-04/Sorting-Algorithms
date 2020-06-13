package main

import (
	"fmt"
	"os"

	sorts "./golang"
	utils "./golang/utils"
)

func main() {
	print := fmt.Println
	args := os.Args[1:]

	for _, arg := range args {
		var sort func([]int)

		switch arg {
		case "bogoSort", "bogo":
			print("BOGO SORT AKA STUPID SORT")
			shuffledArray := utils.RandomSequence(0, 5) // Don't set this value too high
			print(shuffledArray)
			print()
			sorts.BogoSort(shuffledArray)
			print(shuffledArray)
			continue

		case "bubbleSort", "bubble":
			print("BUBBLE SORT")
			sort = sorts.BubbleSort
			break

		case "cocktailShakerSort", "cocktail":
			print("COCKTAIL SHAKER SORT")
			sort = sorts.CocktailShakerSort
			break

		case "combSort", "comb":
			print("COMB SORT")
			sort = sorts.CombSort
			break

		case "countingSort", "counting", "count":
			print("COUNTING SORT")
			shuffledArray := utils.RandomSequence(0, 1000) // Don't set this value too high
			print(shuffledArray)
			print()
			sortedArray := sorts.CountingSort(shuffledArray)
			print(sortedArray)
			continue

		case "gnomeSort", "gnome":
			print("GNOME SORT")
			sort = sorts.GnomeSort
			break

		case "insertionSort", "insertion", "insert":
			print("INSERTION SORT")
			sort = sorts.InsertionSort
			break

		case "mergeSort", "merge":
			print("MERGE SORT")
			shuffledArray := utils.RandomSequence(0, 1000) // Don't set this value too high
			print(shuffledArray)
			print()
			sortedArray := sorts.MergeSort(shuffledArray)
			print(sortedArray)
			continue

		default:
			print(fmt.Sprintf("NameError: %s is not a sorting algorithm. Check your casing.\n", arg))
			continue
		}

		shuffledArray := utils.RandomSequence(0, 1000) // Don't set this value too high
		print(shuffledArray)
		print()
		sort(shuffledArray)
		print(shuffledArray)
	}

}
