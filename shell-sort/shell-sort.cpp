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

std::vector<int> shell_sort(std::vector<int> &array) {
    int gap = array.size()/2;
    while (gap >= 1) {
        for (int i = gap; i < array.size(); i++) { //iterate through array, starting from gap
            int comparator = array[i]; //make comparisons with this
            int output; //for accessing x outside the array
            int index; //for negative indexes

            for (int x = i; x > gap-2; x -= gap) { //iterate throguh array with gap as the step
                output = x; //to access x outside the loop
                if (x-gap < 0) { //in case of negative index
                    index = array.size()-x-gap;
                } else {
                    index = x-gap;
                }

                if (array[index] <= comparator) { //break when correct spot is found
					break;
				} else { //otherwise, move elements forward to make space
					array[x] = array[index];
				}
            }
            array[output] = comparator; //insert comparator in the correct spot
        }
        gap /= 2; //increment the gap
    }
    return array;
}

int main() {
    cout << "SHELL SORT" << endl;
    std::vector<int> shuffled_array = random_sequence(0, 1000);

    printArray(shuffled_array);
    cout << endl;

    std::vector<int> sorted_array = shell_sort(shuffled_array);
    printArray(sorted_array);
    return 0;
}