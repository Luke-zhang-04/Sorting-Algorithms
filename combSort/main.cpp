#include <vector>

/**
 * Calculates next gap
 * @param gap - gap to calculate new gap with
 * @returns new gap
 */
int nextGap(int gap) {
    int newGap = int(gap * 10) / 13;
    
    return newGap < 1 ? 1 : newGap;
}

/**
 * Main combsort function
 * @param array - array to sort
 * @returns void; sorts in place
 */
void combSort(std::vector<int> &array) {
    int gap = array.size();
    bool swapped = true;

    while (gap > 1 || (gap > 1 && !swapped)) {
        gap = nextGap(gap);
		swapped = false;

        for (unsigned int i = 0; i < array.size() - gap; i++) { // Iterate through whole array
            if (array[i] > array[i + gap]) {
                std::swap(array[i], array[i + gap]);
                swapped = true;
            }
        }
    }

}
