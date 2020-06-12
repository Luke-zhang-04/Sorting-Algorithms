"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = __importDefault(require("../utils"));
/**
 * Shuffles an array
 * @param {Array.<number>} array - array to be shuffled
 * @returns {Array.<number>} array of shuffled numbers
 */
const shuffle = (array) => {
    array.sort(() => Math.random() - 0.5); // Shuffle the array
    return array;
};
/**
 * Checks if an array is sorted
 * @param {Array.<number>} array - array to check
 * @returns {boolean} true if sorted false otherwise
 */
const issorted = (array) => {
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i + 1] < array[i]) {
            return false;
        }
    }
    return true;
};
/**
 * Sorts array with bogosort
 * @param {Array.<number>} array array to sort
 * @returns {Array.<number>} sorted array
 */
const bogoSort = (array) => {
    array = shuffle(array); //shuffle the array
    return issorted(array) ? array : bogoSort(array);
};
if (require.main === module) {
    const shuffled_array = utils_1.default(0, 7); //max range
    console.log("BOGO SORT AKA STUPID SORT");
    console.log(shuffled_array);
    console.log(bogoSort(shuffled_array));
}
exports.default = bogoSort;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHFEQUFxQztBQUVyQzs7OztHQUlHO0FBQ0gsTUFBTSxPQUFPLEdBQUcsQ0FBQyxLQUFlLEVBQVksRUFBRTtJQUMxQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQSxDQUFDLG9CQUFvQjtJQUUxRCxPQUFPLEtBQUssQ0FBQTtBQUNoQixDQUFDLENBQUE7QUFFRDs7OztHQUlHO0FBQ0gsTUFBTSxRQUFRLEdBQUcsQ0FBQyxLQUFlLEVBQVcsRUFBRTtJQUMxQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDN0MsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUM1QixPQUFPLEtBQUssQ0FBQTtTQUNaO0tBQ0U7SUFFSixPQUFPLElBQUksQ0FBQTtBQUNaLENBQUMsQ0FBQTtBQUVEOzs7O0dBSUc7QUFDSCxNQUFNLFFBQVEsR0FBRyxDQUFDLEtBQWUsRUFBWSxFQUFFO0lBQzNDLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUEsQ0FBQyxtQkFBbUI7SUFFN0MsT0FBTyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFBO0FBQ2pELENBQUMsQ0FBQTtBQUVELElBQUksT0FBTyxDQUFDLElBQUksS0FBSyxNQUFNLEVBQUU7SUFDekIsTUFBTSxjQUFjLEdBQUcsZUFBYyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQSxDQUFDLFdBQVc7SUFDdkQsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQyxDQUFBO0lBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUE7SUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQTtDQUN4QztBQUVELGtCQUFlLFFBQVEsQ0FBQSJ9