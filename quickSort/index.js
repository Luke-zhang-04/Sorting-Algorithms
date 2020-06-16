"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = __importDefault(require("../utils"));
/**
 * Moves array elements to the correct sides of pivot
 * @param {Array.<number>} array - array to partition
 * @param {number} left - beginning of array segment to partition
 * @param {number} right - end of array segment to partition
 * @param {number} pt - pivot point
 * @returns {number} new pivot
 */
const partition = (array, left, right, pt) => {
    let swaps, // Keep track of the swaps made
    temp; // Temporary variable for swapping
    while (true) {
        swaps = 0;
        for (let i = left; i < pt; i++) { // Start from left side of the pivot (if pivot point isn't 0)
            if (array[pt] < array[i]) { // Swap if element is larger than pivot
                temp = array[pt];
                array[pt] = array[i];
                array[i] = temp;
                pt = i;
                swaps++;
                break;
            }
        }
        for (let i = right; i > pt; i--) { // Start from right side of the pivot
            if (array[pt] > array[i]) { // Swap if element is smaller than pivot
                temp = array[pt];
                array[pt] = array[i];
                array[i] = temp;
                pt = i;
                swaps++;
                break;
            }
        }
        if (swaps === 0) { // Pivot is in the correct spot
            break;
        }
    }
    return pt;
};
/**
 * Main quicksort function
 * @param {Array.<number>} array - array to sort
 * @param {number | undefined} left - start of array segment to sort, leave undefined for whole array
 * @param {number | undefined} right - end of array segment to sort, leave undefined for whole array
 * @returns {void} void; sorts in-place
 */
const quickSort = (array, left, right) => {
    if (left === undefined || right === undefined) {
        [left, right] = [0, array.length - 1];
    }
    if (left < right - 1) {
        const half = Math.floor((left + right) / 2), // Midpoint of the array. Math.floor is integer division
        [start, middle, end] = [array[left], array[half], array[right]];
        let pivotPt;
        // Choose pivot point (median of the first, middle, and last element) to avoid exponential running time
        if ((start > end && start < middle) || (start < end && start > middle)) {
            pivotPt = left;
        }
        else if ((end > start && end < middle) || (end < start && end > middle)) {
            pivotPt = right - 1;
        }
        else {
            pivotPt = half;
        }
        // Move pivot to right spot, move elements onto the correct side of the pivot, and get the new pivot point
        const pt = partition(array, left, right, pivotPt);
        // Recursively quicksort the remaining subarrays
        quickSort(array, pt, right);
        quickSort(array, left, pt);
    }
};
if (require.main === module) {
    const shuffledArray = utils_1.default(0, 1000);
    console.log("QUICK SORT");
    console.log(shuffledArray, "\n");
    quickSort(shuffledArray);
    console.log(shuffledArray);
}
exports.default = quickSort;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHFEQUFxQztBQUVyQzs7Ozs7OztHQU9HO0FBQ0gsTUFBTSxTQUFTLEdBQUcsQ0FDZCxLQUFlLEVBQ2YsSUFBWSxFQUNaLEtBQWEsRUFDYixFQUFVLEVBQ0osRUFBRTtJQUNSLElBQUksS0FBSyxFQUFFLCtCQUErQjtJQUN0QyxJQUFJLENBQUEsQ0FBQyxrQ0FBa0M7SUFFM0MsT0FBTyxJQUFJLEVBQUU7UUFDVCxLQUFLLEdBQUcsQ0FBQyxDQUFBO1FBRVQsS0FBSyxJQUFJLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLDZEQUE2RDtZQUMzRixJQUFJLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSx1Q0FBdUM7Z0JBQy9ELElBQUksR0FBRyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUE7Z0JBQ2hCLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUE7Z0JBQ3BCLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUE7Z0JBQ2YsRUFBRSxHQUFHLENBQUMsQ0FBQTtnQkFDTixLQUFLLEVBQUcsQ0FBQTtnQkFDUixNQUFLO2FBQ1I7U0FDSjtRQUVELEtBQUssSUFBSSxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxxQ0FBcUM7WUFDcEUsSUFBSSxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsd0NBQXdDO2dCQUNoRSxJQUFJLEdBQUcsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFBO2dCQUNoQixLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFD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