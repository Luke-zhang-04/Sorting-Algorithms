#include <vector>

#include "main.h"

/**
 * Main insertionsort algorithm
 * @param array - array to sort
 * @returns void; sorts in-place
 */
void insertionSort(std::vector<int> &array) {
    for (unsigned int i = 0; i < array.size(); i++) { // Iterate through entire array
        int comparator = array[i]; // Make comparison with this value
        int section = i - 1;

        while (section >= 0 && comparator < array[section]) {
            array[section+1] = array[section]; // If comparator <= array[section], move array[section] forward to make space
			section --;
        }
        array[section + 1] = comparator; // Insert comparator into the array, in its correct position
    }
}
