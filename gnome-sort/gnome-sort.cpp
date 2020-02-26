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

int max(std::vector<int> &array) {
    int largest = array[0];
    for (const int &i : array) {
        if (i > largest) {
            largest = i;
        }
    }
    return largest;
}

std::vector<int> gnome_sort(std::vector<int> &array) {
    int i = 0;
    while (i < array.size()) { //iterate through entire array
        if (i == 0 || array[i] > array[i-1]) { //move "gnome" forward if "pots" in  correct order
			i++;
		} else {
			std::swap(array[i-1], array[i]); //swap if needed, go back
            i--;
		}
    }

    return array;
}

int main() {
    cout << "GNOME SORT" << endl;
    std::vector<int> shuffled_array = random_sequence(0, 1000);

    printArray(shuffled_array);
    cout << endl;

    std::vector<int> sorted_array = gnome_sort(shuffled_array);
    printArray(sorted_array);
    return 0;
}