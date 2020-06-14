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
		"countingSort": 4, "counting": 4, "count": 4,
		"gnomeSort": 5, "gnome": 5,
		"insertionSort": 6, "insertion": 6, "insert": 6,
	}

	functions := map[int]func([]int){
		1: sorts.BubbleSort,
		2: sorts.CocktailShakerSort,
		3: sorts.CombSort,
		4: sorts.CountingSort,
		5: sorts.GnomeSort,
		6: sorts.InsertionSort,
	}

	messages := map[int]string{
		1: "BUBBLE SORT",
		2: "COCKTAIL SHAKER SORT",
		3: "COMB SORT",
		4: "COUNTING SORT",
		5: "GNOME SORT",
		6: "INSERTION SORT",
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
			sorts.QuickSort(shuffledArray, 0, len(shuffledArray) - 1)
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
