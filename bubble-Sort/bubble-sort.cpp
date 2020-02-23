#include <iostream>
#include <vector>
#include <algorithm>
#include <random>

using std::cout;
using std::endl;

std::vector<int> random_sequence(int minimum, int maximum) { //returns a shuffled array
    std::vector<int> array;
    for (int i = minimum; i < maximum; i++) { //create array and append numbers to it
        array.push_back(i);
    }
    std::shuffle(std::begin(array), std::end(array), std::default_random_engine()); //shuffle the array
    return array;
}

void printArray(std::vector<int> &array) {
    std::cout << "[";
    for (unsigned int i = 0; i < array.size()-1; i++) {
        std::cout << std::to_string(array[i]) << ", ";
    }
    std::cout << std::to_string(array[array.size()-1]) << "]" << std::endl;
}

std::vector<int> bubble_sort(std::vector<int> &array) {
    int swaps; // number of swaps
    for (unsigned int amt = 0; amt < array.size(); amt++) {
        swaps = 0;
        for (unsigned int i = 0; i < array.size()-1-amt; i++) { //iterate through entire array
            if (array[i] > array[i+1]) {
                std::swap(array[i], array[i+1]); //swap if needed
				swaps ++;
            }
        }
        if (swaps == 0) {
            break;
        }
    }
    return array;
}

int main() {
    cout << "BUBBLE SORT" << endl;
    std::vector<int> shuffled_array = random_sequence(0, 1000);

    printArray(shuffled_array);
    cout << endl;

    std::vector<int> sorted_array = bubble_sort(shuffled_array);
    printArray(sorted_array);
    return 0;
}