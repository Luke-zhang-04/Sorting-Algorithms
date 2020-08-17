# Comb Sort #

Comb sort is an imporvement of bubble sort. In essence, the algorithm looks to eliminate *turtles*. *Turtles*, or small values near the end of the list, since in a bubble sort these slow the sorting down tremendously. *Rabbits*, or large values around the beginning of the list, do not pose a problem in bubble sort. 

Comb sort works like bubble sort, except in bubble sort, when any two elements are compared, they always have a gap (distance from each other) of 1. The basic idea of comb sort is that the gap can be much more than 1.

Comb sort has a worst case time complexity of `O(n^2)`, and a best case time complexity of `O(n log n)`, with an average complexity of `O(n^2/2^p)` (where `p` is the number of increments), and a worst case memory complexity of `O(n)` total with `O(1)` auxillary.
