#include <vector>
#include <algorithm>

/**
 * Main cocktail shaker sort function
 * @param array - array to sort
 * @returns void; sorts array in place
 */
void cocktailShakerSort(std::vector<int> &array) {
    int swaps; // Number of swaps
    int section;

    // Iterate for half the length of the array plus one if odd
    for (unsigned int amt = 0; amt < array.size() / 2 + array.size() % 2; amt++) { 
        swaps = 0;

        if (amt > 0) {
            section = (array.size() - amt) - amt;
        } else {
            section = array.size();
        }

        for (unsigned int i = 0; i < section - 1; i++) { //iterate through entire array
            if (array[amt + i] > array[amt + i + 1]) { //swap if needed
                std::swap(array[amt + i], array[amt + i + 1]);
                swaps ++;
			}
        }

        if (swaps == 0) { //array is in order, this break statement could save time
            break;
        }

        for (unsigned int i = section-1; i > 0; i--) {
            if (array[amt + i] < array[amt + i - 1]) { //swap if needed
                std::swap(array[amt + i - 1], array[amt + i]);
                swaps ++;
			}
        }
        if (swaps == 0) {
            break;
        }
    }
}
