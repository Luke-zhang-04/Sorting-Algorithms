"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = __importDefault(require("../utils"));
/**
 * Main cocktail shaker sort function
 * @param {Array.<number>} array - array to sort
 * @returns {void} void; sorts array in place
 */
const cocktailShakerSort = (array) => {
    let swaps, // Number of swaps
    temp, // For swapping
    section;
    for (let amt = 0; amt < array.length; amt++) {
        swaps = 0;
        section = (amt > 0 ? array.slice(amt, -amt).length : array.length);
        for (let i = 0; i < section - 1; i++) { // Iterate through array
            if (array[amt + i] > array[amt + i + 1]) { // Swap if needed
                temp = array[amt + i + 1];
                array[amt + i + 1] = array[amt + i];
                array[amt + i] = temp;
                swaps++;
            }
        }
        if (swaps === 0) {
            break;
        }
        for (let i = section - 1; i > 0; i--) {
            if (array[amt + i] < array[amt + i - 1]) { // Swap if needed
                temp = array[amt + i - 1];
                array[amt + i - 1] = array[amt + i];
                array[amt + i] = temp;
                swaps++;
            }
        }
        if (swaps === 0) {
            break;
        }
    }
};
if (require.main === module) {
    const shuffledArray = utils_1.default(0, 1000);
    console.log("COCKTAIL SHAKER SORT");
    console.log(shuffledArray, "\n");
    cocktailShakerSort(shuffledArray);
    console.log(shuffledArray, "\n");
}
exports.default = cocktailShakerSort;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHFEQUFxQztBQUVyQzs7OztHQUlHO0FBQ0gsTUFBTSxrQkFBa0IsR0FBRyxDQUFDLEtBQWUsRUFBUSxFQUFFO0lBQ2pELElBQUksS0FBSyxFQUFFLGtCQUFrQjtJQUN6QixJQUFJLEVBQUUsZUFBZTtJQUNyQixPQUFPLENBQUE7SUFFWCxLQUFLLElBQUksR0FBRyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsRUFBRTtRQUN6QyxLQUFLLEdBQUcsQ0FBQyxDQUFBO1FBRVQsT0FBTyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUVsRSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsT0FBTyxHQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLHdCQUF3QjtZQUMxRCxJQUFJLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxpQkFBaUI7Z0JBQ3hELElBQUksR0FBRyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtnQkFFckMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQTtnQkFDdkIsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUE7Z0JBQ2pDLEtBQUssRUFBRyxDQUFBO2FBQ0M7U0FDSjtRQUVELElBQUksS0FBSyxLQUFLLENBQUMsRUFBRTtZQUNiLE1BQUs7U0FDUjtRQUVELEtBQUssSUFBSSxDQUFDLEdBQUcsT0FBTyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ2xDLElBQUksS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLGlCQUFpQjtnQkFDeEQsSUFBSSxHQUFHLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO2dCQUVyQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFBO2dCQUN2QixLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQTtnQkFDakMsS0FBSyxFQUFHLENBQUE7YUFDQztTQUNKO1FBRUQsSUFBSSxLQUFLLEtBQUssQ0FBQyxFQUFFO1lBQ2IsTUFBSztTQUNSO0tBQ0o7QUFDTCxDQUFDLENBQUE7QUFFRCxJQUFJLE9BQU8sQ0FBQyxJQUFJLEtBQUssTUFBTSxFQUFFO0lBQ3pCLE1BQU0sYUFBYSxHQUFHLGVBQWMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUE7SUFDN0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFBO0lBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFBO0lBQ2hDLGtCQUFrQixDQUFDLGFBQWEsQ0FBQyxDQUFBO0lBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFBO0NBQ25DO0FBRUQsa0JBQWUsa0JBQWtCLENBQUEifQ==