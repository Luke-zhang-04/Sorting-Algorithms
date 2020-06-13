"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = __importDefault(require("../utils"));
/**
 * Finds the next gap to increment the sort by
 * @param {number} gap - current gay to use
 * @returns {number} new gap
 */
const nextGap = (gap) => {
    const newGap = Math.floor((gap * 10) / 13);
    if (newGap < 1) {
        return 1;
    }
    return newGap;
};
/**
 * Main combsort function
 * @param {Array.<number>} array - array to sort
 * @returns {void} void; sorts in place
 */
const combSort = (array) => {
    let gap = array.length, swapped = true, swap = null;
    while (gap > 1 || !swapped) {
        gap = nextGap(gap);
        swapped = false;
        for (let i = 0; i < array.length - gap; i++) { // Iterate through whole array
            if (array[i] > array[i + gap]) { // Swap if needed
                swap = array[i];
                array[i] = array[i + gap];
                array[i + gap] = swap;
                swap = null;
                swapped = true;
            }
        }
    }
};
if (require.main === module) {
    let shuffled_array = utils_1.default(0, 1000);
    console.log("COMB SORT");
    console.log(shuffled_array, "\n");
    combSort(shuffled_array);
    console.log(shuffled_array);
}
exports.default = combSort;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHFEQUFxQztBQUVyQzs7OztHQUlHO0FBQ0gsTUFBTSxPQUFPLEdBQUcsQ0FBQyxHQUFXLEVBQVUsRUFBRTtJQUNwQyxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxHQUFDLEVBQUUsQ0FBQyxDQUFBO0lBRXhDLElBQUksTUFBTSxHQUFHLENBQUMsRUFBRTtRQUNaLE9BQU8sQ0FBQyxDQUFBO0tBQ1g7SUFFRCxPQUFPLE1BQU0sQ0FBQTtBQUNqQixDQUFDLENBQUE7QUFFRDs7OztHQUlHO0FBQ0gsTUFBTSxRQUFRLEdBQUcsQ0FBQyxLQUFlLEVBQVEsRUFBRTtJQUN2QyxJQUFJLEdBQUcsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUNsQixPQUFPLEdBQUcsSUFBSSxFQUNkLElBQUksR0FBRyxJQUFJLENBQUE7SUFFZixPQUFPLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7UUFDeEIsR0FBRyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUNsQixPQUFPLEdBQUcsS0FBSyxDQUFBO1FBRWYsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsOEJBQThCO1lBQ3pFLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUUsRUFBRSxpQkFBaUI7Z0JBQzlDLElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUE7Z0JBQ2YsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUE7Z0JBQ3pCLEtBQUssQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFBO2dCQUNyQixJQUFJLEdBQUcsSUFBSSxDQUFBO2dCQUVYLE9BQU8sR0FBRyxJQUFJLENBQUE7YUFDakI7U0FDSjtLQUNKO0FBQ0wsQ0FBQyxDQUFBO0FBRUQsSUFBSSxPQUFPLENBQUMsSUFBSSxLQUFLLE1BQU0sRUFBRTtJQUN6QixJQUFJLGNBQWMsR0FBRyxlQUFjLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFBO0lBQzVDLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUE7SUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUE7SUFDakMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFBO0lBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUE7Q0FDOUI7QUFFRCxrQkFBZSxRQUFRLENBQUEifQ==