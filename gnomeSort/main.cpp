#include <vector>

#ifndef MAX
#include "../utils/max.h"
#endif

/**
 * Main gnomesort function
 * @param array - array to sort
 * @returns void; sorts in-place
 */
void gnomeSort(std::vector<int> &array) {
    int i = 0;

    while (i < array.size()) { // Iterate through entire array
        if (i == 0 || array[i] > array[i - 1]) { // Move "gnome" forward if "pots" in  correct order
			i ++;
		} else {
			std::swap(array[i - 1], array[i]); // Swap if needed, go back
            i --;
		}
    }
}
