# Cocktail Shaker Sort #

Cocktail shaker sort is a variation of [bubble sort](https://github.com/Luke-zhang-04/Sorting-Algorithms/tree/master/bubbleSort).

It works by continuously iterating thourgh the entire array, swapping any elements that are out of place, and then traversing the array in reverse, swapping as needed, until a pass is made without a swap, whereby the algorithm then terminates.

Cocktail shaker sort has a time complexity of `O(n^2)` if the array is reverse sorted, and a time complexity of `O(n)` if the array is already sorted, with an average complexity of `O(n^2)`, and a worst case memory complexity of `O(n)` total with `O(1)` auxillary.


