#include <iostream>
#include <vector>
#include <unordered_map>
#include <array>
#include <functional>

#include "bogoSort/main.h"
#include "bubbleSort/main.h"
#include "cocktailShakerSort/main.h"
#include "combSort/main.h"
#include "countingSort/main.h"
#include "gnomeSort/main.h"
#include "insertionSort/main.h"
#include "mergeSort/main.h"
#include "mergeSortInPlace/main.h"
#include "quickSort/main.h"

#include "utils/utils.h"

#define NUM_ALGOS 10

using std::cout;
using std::endl;
using std::string;

int main(int argc, char* argv[]) {

    const std::unordered_map<string, int> argMap {
        {"bogoSort", 1}, {"bogo", 1},
        {"bubbleSort", 2}, {"bubble", 2},
        {"cocktailShakerSort", 3}, {"cocktailShaker", 3}, {"cocktail", 3},
        {"combSort", 4}, {"comb", 4},
        {"countingSort", 5}, {"counting", 5}, {"count", 5},
        {"gnomeSort", 6}, {"gnome", 6},
        {"insertionSort", 7}, {"insertion", 7}, {"insert", 7},
        {"mergeSort", 8}, {"merge", 8},
        {"mergeSortInPlace", 9}, {"mergeSortIP", 9}, {"mergeIP", 9}, {"IPMergeSort", 9}, {"IPMerge", 9},
        {"quickSort", 10}, {"quick", 10},
    };

    std::array<string, NUM_ALGOS+1> algoMessages = {
        "",
        "BOGO SORT AKA STUPID SORT",
        "BUBBLE SORT",
        "COCKTAIL SHAKER SORT",
        "COMBSORT",
        "COUNTING SORT",
        "GNOME SORT",
        "INSERTION SORT",
        "MERGE SORT",
        "IN PLACE MERGE SORT",
        "QUICKSORT",
    };

    std::array< std::function<void(std::vector<int>&)>, NUM_ALGOS+1> algos = {
        [](std::vector<int>& _){}, // Empty lambda that takes in vector reference
        bogoSort,
        bubbleSort,
        cocktailShakerSort,
        combSort,
        countingSort,
        gnomeSort,
        insertionSort,
    };

    for (int i = 1; i < argc; i++) {
        const int algoNum = argMap.at(string(argv[i]));

        int arrSize = algoNum == 1 ? 10 : 1000;

        std::vector<int> shuffledArray = utils::randomSequence(0, arrSize);

        switch (algoNum){
        case 8: {
            cout << algoMessages[algoNum] << endl;

            utils::printArray(shuffledArray);
            std::vector<int> sortedArray = mergeSort(shuffledArray);
            cout << "\n" << endl;
            utils::printArray(sortedArray);

            break;
        
        } case 9:
            cout << algoMessages[algoNum] << endl;

            utils::printArray(shuffledArray);
            mergeSortInPlace(shuffledArray, 0, shuffledArray.size() - 1);
            cout << "\n" << endl;
            utils::printArray(shuffledArray);

            break;
        
        case 10:
            cout << algoMessages[algoNum] << endl;

            utils::printArray(shuffledArray);
            quickSort(shuffledArray);
            cout << "\n" << endl;
            utils::printArray(shuffledArray);
            
            break;

        default:
            cout << algoMessages[algoNum] << endl;

            utils::printArray(shuffledArray);
            algos[algoNum](shuffledArray);
            cout << "\n" << endl;
            utils::printArray(shuffledArray);

            break;
        }

        if(i + 1 < argc) {
            cout << endl;
        }
    }

    return 0;
}
