#include <iostream>
#include <vector>
#include <random>
#include <chrono>

#include "utils.h"

using std::chrono::high_resolution_clock;
using std::chrono::time_point_cast;

namespace util{
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
        shuffle(array);
        return array;
    }

    /**
     * Outputs an array to stdout
     * @param array - pointer to desired array
     * @returns void
     */
    void printArray(const std::vector<int> &array) {
        std::cout << "[";
        for (unsigned int i = 0; i < array.size()-1; i++) {
            std::cout << std::to_string(array[i]) << ", ";
        }
        std::cout << std::to_string(array[array.size()-1]) << "]" << std::endl;
    }

    void shuffle(std::vector<int>& array){
        auto now = high_resolution_clock::now();
        unsigned time = now.time_since_epoch().count();
        std::shuffle(std::begin(array), std::end(array), std::default_random_engine(time));
    }

}//namespace util