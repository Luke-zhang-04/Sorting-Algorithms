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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHFEQUFxQztBQUVyQzs7Ozs7OztHQU9HO0FBQ0gsTUFBTSxTQUFTLEdBQUcsQ0FDZCxLQUFlLEVBQ2YsSUFBWSxFQUNaLEtBQWEsRUFDYixFQUFVLEVBQ0osRUFBRTtJQUNSLElBQUksS0FBSyxFQUFFLCtCQUErQjtJQUN0QyxJQUFJLENBQUEsQ0FBQyxrQ0FBa0M7SUFFM0MsT0FBTyxJQUFJLEVBQUU7UUFDVCxLQUFLLEdBQUcsQ0FBQyxDQUFBO1FBRVQsS0FBSyxJQUFJLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLDZEQUE2RDtZQUMzRixJQUFJLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSx1Q0FBdUM7Z0JBQy9ELElBQUksR0FBRyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUE7Z0JBQ2hCLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUE7Z0JBQ3BCLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUE7Z0JBQ2YsRUFBRSxHQUFHLENBQUMsQ0FBQTtnQkFDTixLQUFLLEVBQUUsQ0FBQTtnQkFDUCxNQUFLO2FBQ1I7U0FDSjtRQUVELEtBQUssSUFBSSxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxxQ0FBcUM7WUFDcEUsSUFBSSxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsd0NBQXdDO2dCQUNoRSxJQUFJLEdBQUcsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFBO2dCQUNoQixLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFD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