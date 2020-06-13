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

		if arg == "bogoSort" || arg == "bogo" {
			print("BOGO SORT AKA STUPID SORT")
			shuffledArray := utils.RandomSequence(0, 5) // Don't set this value too high
			print(shuffledArray)
			print()
			sorts.BogoSort(shuffledArray)
			print(shuffledArray)

			continue
		} else if arg == "bubbleSort" || arg == "bubble" {
			print("BUBBLE SORT")
			sort = sorts.BubbleSort
		} else if arg == "cocktailShakerSort" || arg == "cocktail" {
			print("COCKTAIL SHAKER SORT")
			sort = sorts.CocktailShakerSort
		} else if arg == "combSort" || arg == "comb" {
			print("COMBSORT")
			sort = sorts.CombSort
		}

		shuffledArray := utils.RandomSequence(0, 1000) // Don't set this value too high
		print(shuffledArray)
		print()
		sort(shuffledArray)
		print(shuffledArray)
	}

}
