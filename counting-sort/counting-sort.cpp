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

int max(std::vector<int> &array) { //gets largest number in array
    int largest = array[0];
    for (const int &i : array) {
        if (i > largest) {
            largest = i;
        }
    }
    return largest;
}

std::vector<int> counting_sort(std::vector<int> &array) {
    std::vector<int> count;
    std::vector<int> output; //create output array

    //fill arrays
    for (unsigned int i = 0; i < max(array) + 1; i++) {
        count.push_back(0);
    } for (unsigned int i = 0; i < array.size(); i++) {
        count[array[i]]++;
    }    

    for (unsigned int i = 1; i < count.size(); i++) { //iterate through given array, and add 1 to the index which is the value of array[i]
        count[i] += count[i-1];
    }

    for (unsigned int i = 0; i < array.size(); i++) { //go through array and add previous index's value to the current index
        output.push_back(0);
    }

    for (const int &i : array) { //iterate through array and plug in sorted values
        output[count[i]-1] = i;
        count[i]--;
    }

    return output;
}

int main() {
    cout << "COUNTING SORT" << endl;
    std::vector<int> shuffled_array = random_sequence(0, 1000);

    printArray(shuffled_array);
    cout << endl;

    std::vector<int> sorted_array = counting_sort(shuffled_array);
    printArray(sorted_array);
    return 0;
}