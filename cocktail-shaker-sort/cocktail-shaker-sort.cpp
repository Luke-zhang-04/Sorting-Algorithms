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

std::vector<int> cocktail_shaker_sort(std::vector<int> &array) {
    int swaps; //number of swaps
    int section;
    for (unsigned int amt = 0; amt < array.size()/2 + array.size() % 2; amt++) { //iterate for half the length of the array plus one if odd
        swaps = 0;

        if (amt > 0) {
            section = (array.size()-amt)-amt;
        } else {
            section = array.size();
        }

        for (unsigned int i = 0; i < section-1; i++) { //iterate through entire array
            if (array[amt+i] > array[amt+i+1]) { //swap if needed
                std::swap(array[amt+i], array[amt+i+1]);
                swaps ++;
			}
        }

        if (swaps == 0) { //array is in order, this break statement could save time
            break;
        }

        for (unsigned int i = section-1; i > 0; i--) {
            if (array[amt+i] < array[amt+i-1]) { //swap if needed
                std::swap(array[amt+i-1], array[amt+i]);
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
    cout << "COCKTAIL SHAKER SORT" << endl;
    std::vector<int> shuffled_array = random_sequence(0, 1000);

    printArray(shuffled_array);
    cout << endl;

    std::vector<int> sorted_array = cocktail_shaker_sort(shuffled_array);
    printArray(sorted_array);
    return 0;
}