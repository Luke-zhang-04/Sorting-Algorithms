# Shell sort #

Shell sort is an optimization of [insertion sort](https://github.com/Luke-zhang-04/Sorting-Algorithms/tree/master/insertionSort), and is simillar in [comb sort](https://github.com/Luke-zhang-04/Sorting-Algorithms/tree/master/combSort) where it uses a gap to move items far apart.

Shell sort works by taking taking a gap, performing insertion sort with this gap (the swap and comparison happens by the distance of gap). In this implementation, the gap is reduced by half its value ever iteration.

Shell sort has a worst case time complexity of `O(n^2)` and a best case time complexity of `O(n log n)`, with a memory complexity of `O(n)` and auxillary memory complexity of `O(1)`
