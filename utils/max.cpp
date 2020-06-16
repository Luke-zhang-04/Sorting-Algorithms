#include <vector>

#include "max.h"

/**
 * Finds the largest item in a vector
 * @param array - array to look into
 * @returns integer; largest item
 */
int max(std::vector<int> &array) {
    int largest = array[0];
    
    for (const int &i : array) {
        if (i > largest) {
            largest = i;
        }
    }

    return largest;
}

/**
 * Finds the smallest item in a vector
 * @param array - array to look into
 * @returns integer; smallest item
 */
int min(std::vector<int> &array) {
    int minimum = array[0];

    for (const int &i : array) {
        if (i < minimum) {
            minimum = i;
        }
    }

    return minimum;
}
