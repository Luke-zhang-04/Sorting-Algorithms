"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = __importDefault(require("../utils"));
/**
 * Merges two arrays array1 and array2
 * @param {Array.<number>} array1 - first array to merge with
 * @param {Array.<number>} array2 - second array to merge with
 * @returns {Array.<number>} merges array
 */
const merge = (array1, array2) => {
    const array = [];
    let first = 0, second = 0;
    while (first < array1.length && second < array2.length) {
        if (array1[first] > array2[second]) {
            array.push(array2[second]);
            second++;
        }
        else if (array1[first] < array2[second]) {
            array.push(array1[first]);
            first++;
        }
        else {
            array.push(array1[first]);
            first++;
            array.push(array2[second]);
            second++;
        }
    }
    while (first < array1.length) {
        array.push(array1[first]);
        first++;
    }
    while (second < array2.length) {
        array.push(array2[second]);
        second++;
    }
    return array;
};
/**
 * Main mergesort algorithm
 * @param {Array.<number>} array - array to sort
 * @returns {Array.<number>} sorted array; does not sort in-place
 */
const mergeSort = (array) => {
    if (array.length > 1) {
        // Split array into two halves
        const half = array.length / 2;
        let left = array.slice(0, half), right = array.slice(half);
        // Recursively call each merge sort for each half until array size is 1
        left = mergeSort(left);
        right = mergeSort(right);
        // Merge left and right sides
        array = merge(left, right);
    }
    return array;
};
if (require.main === module) {
    const shuffledArray = utils_1.default(0, 1000);
    console.log("MERGE SORT");
    console.log(shuffledArray, "\n");
    const sortedArray = mergeSort(shuffledArray);
    console.log(sortedArray);
}
exports.default = mergeSort;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHFEQUFxQztBQUVyQzs7Ozs7R0FLRztBQUNILE1BQU0sS0FBSyxHQUFHLENBQUMsTUFBZ0IsRUFBRSxNQUFnQixFQUFZLEVBQUU7SUFDM0QsTUFBTSxLQUFLLEdBQUcsRUFBRSxDQUFBO0lBQ2hCLElBQUksS0FBSyxHQUFHLENBQUMsRUFDVCxNQUFNLEdBQUcsQ0FBQyxDQUFBO0lBRWQsT0FBTyxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sSUFBSSxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRTtRQUNwRCxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDaEMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQTtZQUNuQyxNQUFNLEVBQUcsQ0FBQTtTQUNUO2FBQU0sSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ2pDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUE7WUFDbEMsS0FBSyxFQUFHLENBQUE7U0FDUjthQUFNO1lBQ0csS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQTtZQUNsQyxLQUFLLEVBQUcsQ0FBQTtZQUNDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUE7WUFDbkMsTUFBTSxFQUFHLENBQUE7U0FDSDtLQUNKO0lBRUQsT0FBTyxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRTtRQUMxQixLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFBO1FBQ3pCLEtBQUssRUFBRyxDQUFBO0tBQ1g7SUFFRCxPQUFPLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFO1FBQzNCLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUE7UUFDMUIsTUFBTSxFQUFHLENBQUE7S0FDWjtJQUVELE9BQU8sS0FBSyxDQUFBO0FBQ2hCLENBQUMsQ0FBQTtBQUVEOzs7O0dBSUc7QUFDSCxNQUFNLFNBQVMsR0FBRyxDQUFDLEtBQWUsRUFBWSxFQUFFO0lBQzVDLElBQUksS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7UUFDbEIsOEJBQThCO1FBQzlCLE1BQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFBO1FBQzdCLElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxFQUMzQixLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUVuQyx1RUFBdUU7UUFDakUsSUFBSSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUN0QixLQUFLLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBRXhCLDZCQUE2QjtRQUM3QixLQUFLLEdBQUcsS0FBSyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQTtLQUM3QjtJQUVKLE9BQU8sS0FBSyxDQUFBO0FBQ2IsQ0FBQyxDQUFBO0FBRUQsSUFBSSxPQUFPLENBQUMsSUFBSSxLQUFLLE1BQU0sRUFBRTtJQUN6QixNQUFNLGFBQWEsR0FBRyxlQUFjLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFBO0lBQzdDLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUE7SUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUE7SUFDaEMsTUFBTSxXQUFXLEdBQUcsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFBO0lBQzVDLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUE7Q0FDM0I7QUFFRCxrQkFBZSxTQUFTLENBQUEifQ==