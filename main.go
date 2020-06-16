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

	sortValues := map[string]int{
		"bubbleSort": 1, "bubble": 1,
		"cocktailShakerSort": 2, "cocktail": 2,
		"combSort": 3, "comb": 3,
		"gnomeSort": 4, "gnome": 4,
		"insertionSort": 5, "insertion": 5, "insert": 5,
		"selectionSort": 6, "selection": 6, "select": 6,
	}

	functions := map[int]func([]int){
		1: sorts.BubbleSort,
		2: sorts.CocktailShakerSort,
		3: sorts.CombSort,
		4: sorts.GnomeSort,
		5: sorts.InsertionSort,
		6: sorts.SelectionSort,
	}

	messages := map[int]string{
		1: "BUBBLE SORT",
		2: "COCKTAIL SHAKER SORT",
		3: "COMB SORT",
		4: "GNOME SORT",
		5: "INSERTION SORT",
		6: "SELECTION SORT",
	}

	for _, arg := range args {
		var sort int

		switch arg {
		case "bogoSort", "bogo":
			print("BOGO SORT AKA STUPID SORT")
			shuffledArray := utils.RandomSequence(0, 5) // Don't set this value too high
			print(shuffledArray)
			print()
			sorts.BogoSort(shuffledArray)
			print(shuffledArray)
			continue

		case "countingSort", "count", "counting":
			print("MERGE SORT")
			shuffledArray := utils.RandomSequence(0, 1000)
			print(shuffledArray)
			print()
			sortedArray := sorts.CountingSort(shuffledArray)
			print(sortedArray)
			continue

		case "mergeSort", "merge":
			print("MERGE SORT")
			shuffledArray := utils.RandomSequence(0, 1000)
			print(shuffledArray)
			print()
			sortedArray := sorts.MergeSort(shuffledArray)
			print(sortedArray)
			continue

		case "mergeSortInPlace", "mergeSortIP", "IPMergeSort", "mergeIP", "mergeInPlace", "IPMerge":
			print("IN PLACE MERGE SORT")
			shuffledArray := utils.RandomSequence(0, 1000)
			print(shuffledArray)
			print()
			sorts.MergeSortInPlace(shuffledArray, 0, len(shuffledArray)-1)
			print(shuffledArray)
			continue

		case "quickSort", "quick":
			print("QUICKSORT")
			shuffledArray := utils.RandomSequence(0, 1000)
			print(shuffledArray)
			print()
			sorts.QuickSort(shuffledArray, 0, len(shuffledArray)-1)
			print(shuffledArray)
			continue

		case "radix", "radixSort", "radixLSD", "lsd", "radixSortLSD":
			print("RADIX SORT LSD")
			shuffledArray := utils.RandomSequence(0, 1000)
			print(shuffledArray)
			print()
			sorts.RadixSort(&shuffledArray, 0, "lsd")
			print(shuffledArray)
			continue

		case "radixMSD", "msd", "radixSortMSD":
			print("RADIX SORT MSD")
			shuffledArray := utils.RandomSequence(0, 1000)
			print(shuffledArray)
			print()
			sorts.RadixSort(&shuffledArray, -2, "msd")
			print(shuffledArray)
			continue

		}

		sort = sortValues[arg]
		print(messages[sort])
		shuffledArray := utils.RandomSequence(0, 1000)
		print(shuffledArray, "\n")

		functions[sort](shuffledArray)
		print(shuffledArray)
	}

}
