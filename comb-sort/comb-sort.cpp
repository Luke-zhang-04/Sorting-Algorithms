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

int nextGap(int gap) {
    gap = int(gap*10)/13;
    if (gap < 1) {
        gap = 1;
    } return gap;
}

std::vector<int> comb_sort(std::vector<int> &array) {
    int gap = array.size();
    bool swapped = true;

    while (gap > 1 || !swapped) {
        gap = nextGap(gap);
		swapped = false;

        for (unsigned int i = 0; i < array.size()-gap; i++) { //iterate through whole array
            if (array[i] > array[i + gap]) {
                std::swap(array[i], array[i+gap]);
                swapped = true;
            }
        }
    }
 
    return array;
}

int main() {
    cout << "COMB SORT" << endl;
    std::vector<int> shuffled_array = random_sequence(0, 1000);

    printArray(shuffled_array);
    cout << endl;

    std::vector<int> sorted_array = comb_sort(shuffled_array);
    printArray(sorted_array);
    return 0;
}