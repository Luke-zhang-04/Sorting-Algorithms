"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = __importDefault(require("../utils"));
/**
 * Main insertionsort function
 * @param {Array.<number>} array - array to sort
 * @param {number} start - start of array segment
 * @param {number} end - end of array segment
 * @returns {void} void; sorts in-place
 */
const insertionSort = (array, start, end) => {
    let comparator, // Make comparison with this value
    section;
    for (let i = start + 1; i < end; i++) { // Iterate through entire array
        comparator = array[i];
        section = i - 1;
        while (section >= start && comparator < array[section]) { // Iterate through array from i to 0 backwards
            array[section + 1] = array[section]; // If comparator <= array[section], move array[section] forward to make space
            section--;
        }
        array[section + 1] = comparator; // Insert comparator into the array, in its correct position
    }
}, 
/**
 * Merges an array with indexes start, middle, and end in place
 * Merges arrays array[start:mid] and array[mid:end]
 * @param {Array.<number>} array main array
 * @param {number} start - starting point of segment to be merged
 * @param {number} mid - middle point of segment to be merged
 * @param {number} end - end point of segment to be merged
 * @returns {void} void; merges in-place
 */
merge = (array, start, mid, end) => {
    let start2 = mid + 1;
    if (array[mid] <= array[start2]) {
        return;
    }
    while (start <= mid && start2 <= end) {
        if (array[start] <= array[start2]) {
            start++;
        }
        else {
            let value = array[start2], index = start2;
            while (index != start) {
                array[index] = array[index - 1];
                index--;
            }
            array[start] = value;
            start++;
            mid++;
            start2++;
        }
    }
}, 
/**
 * @param {Array.<number>} array - array to sort
 * @param {number} run - blocks to sort in. Should be a power of two. 32 by default
 * @returns {void} void; sorts in-place
 */
timSort = (array, run = 32) => {
    // Run insertionsort on the blocks
    for (let i = 0; i < array.length; i += run) {
        insertionSort(array, i, Math.min(i + run, array.length));
    }
    // Run merges
    let size = run;
    while (size < array.length) {
        for (let left = 0; left < array.length; left += size * 2) {
            const mid = left + size - 1, right = Math.min((left + 2 * size - 2), (array.length - 1));
            merge(array, left, mid, right);
        }
        size *= 2;
    }
};
if (require.main === module) {
    const shuffledArray = utils_1.default(0, 1000);
    console.log("IN PLACE MERGE SORT");
    console.log(shuffledArray, "\n");
    timSort(shuffledArray);
    console.log(shuffledArray);
}
exports.default = timSort;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHFEQUFxQztBQUVyQzs7Ozs7O0dBTUc7QUFDSCxNQUFNLGFBQWEsR0FBRyxDQUFDLEtBQWUsRUFBRSxLQUFhLEVBQUUsR0FBVyxFQUFRLEVBQUU7SUFDeEUsSUFBSSxVQUFVLEVBQUUsa0NBQWtDO0lBQzlDLE9BQU8sQ0FBQTtJQUVYLEtBQUssSUFBSSxDQUFDLEdBQUcsS0FBSyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsK0JBQStCO1FBQ3pFLFVBQVUsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDZixPQUFPLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUVyQixPQUFPLE9BQU8sSUFBSSxLQUFLLElBQUksVUFBVSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLDhDQUE4QztZQUN2RyxLQUFLLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQSxDQUFDLDZFQUE2RTtZQUNqSCxPQUFPLEVBQUcsQ0FBQTtTQUNKO1FBRUQsS0FBSyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUEsQ0FBQyw0REFBNEQ7S0FDbEc7QUFDRixDQUFDO0FBRUc7Ozs7Ozs7O0dBUUc7QUFDSCxLQUFLLEdBQUcsQ0FDSixLQUFlLEVBQ2YsS0FBYSxFQUNiLEdBQVcsRUFDWCxHQUFXLEVBQ1AsRUFBRTtJQUNOLElBQUksTUFBTSxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUE7SUFFcEIsSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQzdCLE9BQU07S0FDVDtJQUVELE9BQU8sS0FBSyxJQUFJLEdBQUcsSUFBSSxNQUFNLElBQUksR0FBRyxFQUFFO1FBQ2xDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUMvQixLQUFLLEVBQUcsQ0FBQTtTQUNYO2FBQU07WUFDSCxJQUFJLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQ3JCLEtBQUssR0FBRyxNQUFNLENBQUE7WUFFbEIsT0FBTyxLQUFLLElBQUksS0FBSyxFQUFFO2dCQUNuQixLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQTtnQkFDL0IsS0FBSyxFQUFHLENBQUE7YUFDWDtZQUVELEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUE7WUFFcEIsS0FBSyxFQUFHLENBQUE7WUFDUixHQUFHLEVBQUcsQ0FBQTtZQUNOLE1BQU0sRUFBRyxDQUFBO1NBQ1o7S0FDSjtBQUNMLENBQUM7QUFFRDs7OztHQUlHO0FBQ0gsT0FBTyxHQUFHLENBQUMsS0FBZSxFQUFFLE1BQWMsRUFBRSxFQUFRLEVBQUU7SUFDbEQsa0NBQWtDO0lBQ2xDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxHQUFHLEVBQUU7UUFDeEMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFBO0tBQzNEO0lBRUQsYUFBYTtJQUNiLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQTtJQUNkLE9BQU8sSUFBSSxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUU7UUFDeEIsS0FBSyxJQUFJLElBQUksR0FBRyxDQUFDLEVBQUUsSUFBSSxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsSUFBSSxJQUFJLElBQUksR0FBRyxDQUFDLEVBQUU7WUFDdEQsTUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxDQUFDLEVBQ3ZCLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFFL0QsS0FBSyxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFBO1NBQ2pDO1FBRUQsSUFBSSxJQUFJLENBQUMsQ0FBQTtLQUNaO0FBQ0wsQ0FBQyxDQUFBO0FBR0wsSUFBSSxPQUFPLENBQUMsSUFBSSxLQUFLLE1BQU0sRUFBRTtJQUN6QixNQUFNLGFBQWEsR0FBRyxlQUFjLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFBO0lBQzdDLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQTtJQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQTtJQUNoQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUE7SUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQTtDQUM3QjtBQUVELGtCQUFlLE9BQU8sQ0FBQSJ9