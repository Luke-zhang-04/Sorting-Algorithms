#include <vector>
#include <algorithm>

/**
 * Main bubblesort algorithm
 * @param array - vector to sort
 * @returns void; sorts in place
 */
void bubbleSort(std::vector<int> &array) {
    int swaps; // Number of swaps

    for (unsigned int amt = 0; amt < array.size(); amt++) {
        swaps = 0;

        for (unsigned int i = 0; i < array.size() - 1 - amt; i++) { // Iterate through entire array
            if (array[i] > array[i + 1]) {
                std::swap(array[i], array[i + 1]); // Swap if needed
				swaps ++;
            }
        }
        if (swaps == 0) {
            break;
        }
    }

}
