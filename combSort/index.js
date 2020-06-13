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
    return newGap < 1 ? 1 : newGap;
};
/**
 * Main combsort function
 * @param {Array.<number>} array - array to sort
 * @returns {void} void; sorts in place
 */
const combSort = (array) => {
    let gap = array.length, swapped = true, swap = null;
    while (gap > 1 || (gap > 1 && !swapped)) {
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
    let shuffledArray = utils_1.default(0, 1000);
    console.log("COMB SORT");
    console.log(shuffledArray, "\n");
    combSort(shuffledArray);
    console.log(shuffledArray);
}
exports.default = combSort;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHFEQUFxQztBQUVyQzs7OztHQUlHO0FBQ0gsTUFBTSxPQUFPLEdBQUcsQ0FBQyxHQUFXLEVBQVUsRUFBRTtJQUNwQyxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxHQUFDLEVBQUUsQ0FBQyxDQUFBO0lBRXhDLE9BQU8sTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUE7QUFDbEMsQ0FBQyxDQUFBO0FBRUQ7Ozs7R0FJRztBQUNILE1BQU0sUUFBUSxHQUFHLENBQUMsS0FBZSxFQUFRLEVBQUU7SUFDdkMsSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFDbEIsT0FBTyxHQUFHLElBQUksRUFDZCxJQUFJLEdBQUcsSUFBSSxDQUFBO0lBRWYsT0FBTyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQ3JDLEdBQUcsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDbEIsT0FBTyxHQUFHLEtBQUssQ0FBQTtRQUVmLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLDhCQUE4QjtZQUN6RSxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFFLEVBQUUsaUJBQWlCO2dCQUM5QyxJQUFJLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFBO2dCQUNmLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFBO2dCQUN6QixLQUFLLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQTtnQkFDckIsSUFBSSxHQUFHLElBQUksQ0FBQTtnQkFFWCxPQUFPLEdBQUcsSUFBSSxDQUFBO2FBQ2pCO1NBQ0o7S0FDSjtBQUNMLENBQUMsQ0FBQTtBQUVELElBQUksT0FBTyxDQUFDLElBQUksS0FBSyxNQUFNLEVBQUU7SUFDekIsSUFBSSxhQUFhLEdBQUcsZUFBYyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQTtJQUMzQyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFBO0lBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFBO0lBQ2hDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQTtJQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFBO0NBQzdCO0FBRUQsa0JBQWUsUUFBUSxDQUFBIn0=