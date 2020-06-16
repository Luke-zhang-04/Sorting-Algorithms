#include <vector>
#include <algorithm>
#include <string>
#include <math.h>

#include "../utils/max.h"
#include "./main.h"

using std::string;


int min(std::vector<int> &array) {
    int smallest = array[0];
    for (const int &i : array) {
        if (i < smallest) {
            smallest = i;
        }
    }
    return smallest;
}

int digit(int number, int n) {
    return number / int(pow(10, n)) % 10;
}

string charsToString(std::vector<char> &chars) {
    int i; 
    string s = ""; 

    for (i = 0; i < chars.size(); i++) { 
        s = s + chars[i];
    }

    return s; 
}

std::vector<char> list(string str) {
    std::vector<char> res;

    for (const char &i : str) {
        res.push_back(i);
    }

    return res;
}

std::vector<std::vector<int>> seperate(std::vector<int> &array, int digit) {
    digit = int(pow(10, digit));
    std::vector<std::vector<int>> output;
    unsigned int counter = 0;
    std::vector<char> smallest = list(std::to_string(min(array)));
    std::vector<char> slice = std::vector<char>(smallest.begin() + 1, smallest.end());

    for (unsigned int i = 0; i < slice.size(); i++) {
        smallest[i+1] = '0';
    }

    const int minimum = std::stoi(charsToString(smallest));
    int beg;

    for (
        unsigned int i = minimum + digit;
        i < max(array) + digit + 1;
        i += digit
    ) {
        beg = counter;

		while (counter <= array.size()) {
			if (counter == array.size() || array[counter] >= i) {
				if (counter-beg > 0) {
                    std::vector<int> part = std::vector<int>(array.begin() + beg, array.begin() + counter);
					output.push_back(part);
				}
                break;
			}
			counter++;
		}
    }
    return output;
}

void countingSort(std::vector<int> &array, int exp) {
    std::vector<int> count;
    std::vector<int> output;
    for (unsigned int i = 0; i < max(array) + 1; i++) {
        count.push_back(0);
    }
    for (unsigned int i = 0; i < array.size(); i++) {
        output.push_back(0);
    }

    for (unsigned int i = 0; i < array.size(); i++) {
        count[digit(array[i], exp)]++;
    }    

    for (unsigned int i = 1; i < count.size(); i++) {
        count[i] += count[i-1];
    }
    for (int i = array.size()-1; i > -1; i--) {
        output[count[digit(array[i], exp)]-1] = array[i];
        count[digit(array[i], exp)]--;
    }

    array = output;
}

std::vector<int> combine(std::vector<int> &array1, std::vector<int> &array2) {
    std::vector<int> array = array1;
    array.insert(array.end(), array2.begin(), array2.end());
    return array;
}

void radixSort(std::vector<int> &array, string mode, int digit) {
    if (mode == "lsd") {
        if (digit == -3) {
            digit = 0;
        }

		for (unsigned int i = 0; i < std::to_string(max(array)).size(); i++) {
			countingSort(array, i);
		}

    } else if (mode == "msd") {
        if (digit == -3) {
            digit = std::to_string(max(array)).size();
        }

		if (digit == -2) {
			digit = std::to_string(max(array)).size();
		}
		std::vector<int> output;

		if (digit >= 0) {
			countingSort(array, digit);
			auto array2 = seperate(array, digit);

			for (std::vector<int> &i : array2) {
                radixSort(i, "msd", digit-1);
                output = combine(output, i);
			}
		} else {
			output = array;
		}

        array = output;

	} else {
		radixSort(array, "lsd", 0);
	}
}
