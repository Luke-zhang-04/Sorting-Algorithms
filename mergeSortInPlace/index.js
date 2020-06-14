"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = __importDefault(require("../utils"));
/**
 * Merges an array with indexes start, middle, and end in place
 * Merges arrays array[start:mid] and array[mid:end]
 * @param {Array.<number>} array main array
 * @param {number} start - starting point of segment to be merged
 * @param {number} mid - middle point of segment to be merged
 * @param {number} end - end point of segment to be merged
 * @returns {void} void; merges in-place
 */
const merge = (array, start, mid, end) => {
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
};
/**
 * Main mergesort function
 * @param {Array.<number>} array - array to sort
 * @param {number} left - beginning of segment to be sorted (pass in 0 if sorting entire array)
 * @param {number} right - end of segment to be sorted (pass in array.length - 1 if sorting entire array)
 * @returns {void} void; sorts in-place
 */
const mergeSort = (array, left, right) => {
    if (left === undefined || right === undefined) {
        [left, right] = [0, array.length - 1];
    }
    if (right > left) {
        // Split array into halves
        const half = Math.floor(left + (right - left) / 2); // Halfway point
        mergeSort(array, left, half);
        mergeSort(array, half + 1, right);
        // Merge left and right sides
        merge(array, left, half, right);
    }
};
if (require.main === module) {
    const shuffledArray = utils_1.default(0, 1000);
    console.log("IN PLACE MERGE SORT");
    console.log(shuffledArray, "\n");
    mergeSort(shuffledArray, 0, shuffledArray.length - 1);
    console.log(shuffledArray);
}
exports.default = mergeSort;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHFEQUFxQztBQUVyQzs7Ozs7Ozs7R0FRRztBQUNILE1BQU0sS0FBSyxHQUFHLENBQ1YsS0FBZSxFQUNmLEtBQWEsRUFDYixHQUFXLEVBQ1gsR0FBVyxFQUNQLEVBQUU7SUFDTixJQUFJLE1BQU0sR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFBO0lBRXBCLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUM3QixPQUFNO0tBQ1Q7SUFFRCxPQUFPLEtBQUssSUFBSSxHQUFHLElBQUksTUFBTSxJQUFJLEdBQUcsRUFBRTtRQUNsQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDL0IsS0FBSyxFQUFHLENBQUE7U0FDWDthQUFNO1lBQ0gsSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUNyQixLQUFLLEdBQUcsTUFBTSxDQUFBO1lBRWxCLE9BQU8sS0FBSyxJQUFJLEtBQUssRUFBRTtnQkFDbkIsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUE7Z0JBQy9CLEtBQUssRUFBRyxDQUFBO2FBQ1g7WUFFRCxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFBO1lBRXBCLEtBQUssRUFBRyxDQUFBO1lBQ1IsR0FBRyxFQUFHLENBQUE7WUFDTixNQUFNLEVBQUcsQ0FBQTtTQUNaO0tBQ0o7QUFDTCxDQUFDLENBQUE7QUFFRDs7Ozs7O0dBTUc7QUFDSCxNQUFNLFNBQVMsR0FBRyxDQUFDLEtBQWUsRUFBRSxJQUFhLEVBQUUsS0FBYyxFQUFRLEVBQUU7SUFDdkUsSUFBSSxJQUFJLEtBQUssU0FBUyxJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7UUFDM0MsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQTtLQUN4QztJQUVELElBQUksS0FBSyxHQUFHLElBQUksRUFBRTtRQUNkLDBCQUEwQjtRQUMxQixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQSxDQUFDLGdCQUFnQjtRQUVuRSxTQUFTLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUM1QixTQUFTLENBQUMsS0FBSyxFQUFFLElBQUksR0FBRyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUE7UUFFakMsNkJBQTZCO1FBQzdCLEtBQUssQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQTtLQUNsQztBQUNMLENBQUMsQ0FBQTtBQUVELElBQUksT0FBTyxDQUFDLElBQUksS0FBSyxNQUFNLEVBQUU7SUFDNUIsTUFBTSxhQUFhLEdBQUcsZUFBYyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQTtJQUM3QyxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUE7SUFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUE7SUFDaEMsU0FBUyxDQUFDLGFBQWEsRUFBRSxDQUFDLEVBQUUsYUFBYSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQTtJQUNyRCxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFBO0NBQzFCO0FBRUQsa0JBQWUsU0FBUyxDQUFBIn0=