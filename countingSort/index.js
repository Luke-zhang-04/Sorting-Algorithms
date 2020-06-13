"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = __importDefault(require("../utils"));
/**
 * Main countingsort function
 * @param {Array.<number>} array - array to sort
 * @returns {Array.<number | null>} sorted array; does not sort in-place
 */
const countingSort = (array) => {
    // Create array with zeros
    const count = [];
    for (let i = 0; i < Math.max(...array) + 1; i++) {
        count.push(0);
    }
    for (let i = 0; i < array.length; i++) { // Iterate through given array, and add 1 to the index which is the value of array[i]
        count[array[i]]++;
    }
    for (let i = 1; i < count.length; i++) { // Go through array and add previous index's value to the current index
        count[i] += count[i - 1];
    }
    // Create output array filled with null
    let output = [];
    for (let i = 0; i < array.length; i++) {
        output.push(null);
    }
    // Iterate through array and turn none types into sorted values
    for (const i of array) {
        output[count[i] - 1] = i,
            count[i] -= 1;
    }
    return output;
};
if (require.main === module) {
    const shuffledArray = utils_1.default(0, 1000);
    console.log("COUNTING SORT");
    console.log(shuffledArray, "\n");
    const sortedArray = countingSort(shuffledArray);
    console.log(sortedArray);
}
exports.default = countingSort;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHFEQUFxQztBQUVyQzs7OztHQUlHO0FBQ0gsTUFBTSxZQUFZLEdBQUcsQ0FBQyxLQUFlLEVBQW9CLEVBQUU7SUFDdkQsMEJBQTBCO0lBQzFCLE1BQU0sS0FBSyxHQUFhLEVBQUUsQ0FBQTtJQUMxQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUM3QyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO0tBQ2hCO0lBRUQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxxRkFBcUY7UUFDaEksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUE7S0FDakI7SUFFRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLHVFQUF1RTtRQUMvRyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtLQUNyQjtJQUVELHVDQUF1QztJQUN2QyxJQUFJLE1BQU0sR0FBc0IsRUFBRSxDQUFBO0lBQ2xDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ25DLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7S0FDcEI7SUFFRCwrREFBK0Q7SUFDL0QsS0FBSyxNQUFNLENBQUMsSUFBSSxLQUFLLEVBQUU7UUFDbkIsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDO1lBQ3hCLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUE7S0FDaEI7SUFFRCxPQUFPLE1BQU0sQ0FBQTtBQUNqQixDQUFDLENBQUE7QUFFRCxJQUFJLE9BQU8sQ0FBQyxJQUFJLEtBQUssTUFBTSxFQUFFO0lBQ3pCLE1BQU0sYUFBYSxHQUFHLGVBQWMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUE7SUFDN0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQTtJQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQTtJQUNoQyxNQUFNLFdBQVcsR0FBRyxZQUFZLENBQUMsYUFBYSxDQUFDLENBQUE7SUFDL0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQTtDQUMzQjtBQUVELGtCQUFlLFlBQVksQ0FBQSJ9