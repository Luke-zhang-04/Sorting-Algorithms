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

#include "utils/utils.h"

#define NUM_ALGOS 7

using std::cout;
using std::endl;
using std::string;

int main(int argc, char* argv[]) {

    std::unordered_map<string, int> argMap {
        {"bogoSort", 1}, {"bogo", 1},
        {"bubbleSort", 2}, {"bubble", 2},
        {"cocktailShakerSort", 3}, {"cocktailShaker", 3}, {"cocktail", 3},
        {"combSort", 4}, {"comb", 4},
        {"countingSort", 5}, {"counting", 5}, {"count", 5},
        {"gnomeSort", 6}, {"gnome", 6},
        {"insertionSort", 7}, {"insertion", 7}, {"insert", 7},
    };

    std::array<string, NUM_ALGOS+1> algoMessages = {
        "",
        "BOGO SORT AKA STUPID SORT",
        "BUBBLE SORT",
        "COCKTAIL SHAKER SORT",
        "COMBSORT",
        "COUNTING SORT",
        "GNOME SORT",
        "INSERTION SORT"
    };

    std::array< std::function<void(std::vector<int>&)>, NUM_ALGOS+1> algos = {
        [](std::vector<int>& _){}, //Empty lambda that takes in vector reference
        bogoSort,
        bubbleSort,
        cocktailShakerSort,
        combSort,
        countingSort,
        gnomeSort,
        insertionSort
    };

    for (int i = 1; i < argc; i++) {
        const int algoNum = argMap[string(argv[i])];

        int arrSize = 1000;
        if (algoNum == 1) arrSize = 10;
        std::vector<int> shuffledArray = util::randomSequence(0, arrSize);

        cout << algoMessages[algoNum] << endl;

        util::printArray(shuffledArray);
        algos[algoNum](shuffledArray);
        util::printArray(shuffledArray);

        if(i+1 < argc)
            cout << endl;
    }

    return 0;
}
