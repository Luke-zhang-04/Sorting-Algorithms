

#include <iostream>
#include <vector>
#include <algorithm>
#include <random>

using std::cout;
using std::endl;

/**
 * Generates random vector from minimum to maximum
 * @param minmum - minimum value
 * @param maximum - maximum value
 * @returns vector of ints with random numbers
 */
std::vector<int> randomSequence(int minimum, int maximum) {
    std::vector<int> array;

    for (int i = minimum; i < maximum; i++) { //create array and append numbers to it
        array.push_back(i);
    }
    std::shuffle(std::begin(array), std::end(array), std::default_random_engine()); //shuffle the array

    return array;
}

/**
 * Outputs an array to stdout
 * @param array - pointer to desired array
 * @returns void
 */
void printArray(std::vector<int> &array) {
    std::cout << "[";
    for (unsigned int i = 0; i < array.size()-1; i++) {
        std::cout << std::to_string(array[i]) << ", ";
    }
    std::cout << std::to_string(array[array.size()-1]) << "]" << std::endl;
}

/**
 * Check if array is sorted
 * @param array - pointer to desired array
 * @returns boolean true if sorted
 */
bool issorted(std::vector<int> &array) {
    for (unsigned int i = 0; i < array.size() - 1; i++) {
        if (array[i + 1] < array[i]) {
            return false;
        }
    }

    return true;
}

/**
 * Main bogosort algorithm
 * @param array - pointer to shuffled array
 * @returns shuffled array (maybe, or recursion error)
 */
std::vector<int> bogoSort(std::vector<int> &array) {
    std::shuffle(std::begin(array), std::end(array), std::default_random_engine());

    return issorted(array) ? array : bogoSort(array);
}

int main() {
    cout << "BOGO SORT AKA STUPID SORT" << endl;
    std::vector<int> shuffled_array = randomSequence(0, 10);

    printArray(shuffled_array);
    cout << endl;

    std::vector<int> sorted_array = !issorted(shuffled_array) ? bogoSort(shuffled_array) : shuffled_array;
    printArray(sorted_array);
    return 0;
}
