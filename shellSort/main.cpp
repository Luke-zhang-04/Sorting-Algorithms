#include <vector>

#include "./main.h"

/**
 * Main shellsort function
 * @param array - array to sort
 * @returns void; sorts in-place
 */
void shellSort(std::vector<int> &array) {
    int gap = array.size()/2;
    while (gap >= 1) {
        for (int i = gap; i < array.size(); i++) { // Iterate through array, starting from gap
            int comparator = array[i]; // Make comparisons with this
            int output; // For accessing x outside the array
            int index; // For negative indexes

            for (int x = i; x > gap-2; x -= gap) { // Iterate throguh array with gap as the step
                output = x; // To access x outside the loop
                if (x-gap < 0) { // In case of negative index
                    index = array.size() - x - gap;
                } else {
                    index = x-gap;
                }

                if (array[index] <= comparator) { // Break when correct spot is found
					break;
				} else { // Otherwise, move elements forward to make space
					array[x] = array[index];
				}
            }
            array[output] = comparator; // Insert comparator in the correct spot
        }
        gap /= 2; // Increment the gap
    }

}
