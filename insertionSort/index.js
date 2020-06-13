"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = __importDefault(require("../utils"));
/**
 * Main insertionsort function
 * @param {Array.<number>} array - array to sort
 * @returns {void} void; sorts in-place
 */
const insertionSort = (array) => {
    let comparator, // Make comparison with this value
    section;
    for (let i = 0; i < array.length; i++) { // Iterate through entire array
        comparator = array[i];
        section = i - 1;
        while (section >= 0 && comparator < array[section]) { // Iterate through array from i to 0 backwards
            array[section + 1] = array[section]; // If comparator <= array[section], move array[section] forward to make space
            section--;
        }
        array[section + 1] = comparator; // Insert comparator into the array, in its correct position
    }
};
if (require.main === module) {
    const shuffledArray = utils_1.default(0, 1000);
    console.log("INSERTION SORT");
    console.log(shuffledArray);
    insertionSort(shuffledArray);
    console.log(shuffledArray);
}
exports.default = insertionSort;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHFEQUFxQztBQUVyQzs7OztHQUlHO0FBQ0gsTUFBTSxhQUFhLEdBQUcsQ0FBQyxLQUFlLEVBQVEsRUFBRTtJQUM1QyxJQUFJLFVBQVUsRUFBRSxrQ0FBa0M7SUFDOUMsT0FBTyxDQUFBO0lBRVgsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSwrQkFBK0I7UUFDMUUsVUFBVSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUNmLE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBRXJCLE9BQU8sT0FBTyxJQUFJLENBQUMsSUFBSSxVQUFVLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsOENBQThDO1lBQ25HLEtBQUssQ0FBQyxPQUFPLEdBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFBLENBQUMsNkVBQTZFO1lBQy9HLE9BQU8sRUFBRyxDQUFBO1NBQ0o7UUFFRCxLQUFLLENBQUMsT0FBTyxHQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQSxDQUFDLDREQUE0RDtLQUNoRztBQUNGLENBQUMsQ0FBQTtBQUVELElBQUksT0FBTyxDQUFDLElBQUksS0FBSyxNQUFNLEVBQUU7SUFDekIsTUFBTSxhQUFhLEdBQUcsZUFBYyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQTtJQUM3QyxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUE7SUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQTtJQUMxQixhQUFhLENBQUMsYUFBYSxDQUFDLENBQUE7SUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQTtDQUM3QjtBQUVELGtCQUFlLGFBQWEsQ0FBQSJ9