"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = __importDefault(require("../utils"));
/**
 * Main gnomesort function
 * @param {Array.<number>} array - array to sort
 * @returns {void} void; sorts in place
 */
const gnomeSort = (array) => {
    let temp, i = 0;
    while (i < array.length) { // Iterate until end of array
        if (i == 0 || array[i] > array[i - 1]) { // Move "gnome" forward if "pots" in  correct order
            i++;
        }
        else {
            temp = array[i - 1];
            array[i - 1] = array[i]; // Swap if needed, go back
            array[i] = temp;
            i--;
        }
    }
};
if (require.main === module) {
    const shuffledArray = utils_1.default(0, 1000);
    console.log("GNOME SORT");
    console.log(shuffledArray, "\n");
    gnomeSort(shuffledArray);
    console.log(shuffledArray);
}
exports.default = gnomeSort;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHFEQUFxQztBQUVyQzs7OztHQUlHO0FBQ0gsTUFBTSxTQUFTLEdBQUcsQ0FBQyxLQUFlLEVBQVEsRUFBRTtJQUN4QyxJQUFJLElBQUksRUFDSixDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBRVosT0FBTyxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxFQUFFLDZCQUE2QjtRQUN2RCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxtREFBbUQ7WUFDM0YsQ0FBQyxFQUFHLENBQUE7U0FDSjthQUFNO1lBQ0csSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUE7WUFFbkIsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBQywwQkFBMEI7WUFDbEQsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQTtZQUVmLENBQUMsRUFBRyxDQUFBO1NBQ2I7S0FFRDtBQUNGLENBQUMsQ0FBQTtBQUVELElBQUksT0FBTyxDQUFDLElBQUksS0FBSyxNQUFNLEVBQUU7SUFDNUIsTUFBTSxhQUFhLEdBQUcsZUFBYyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQTtJQUM3QyxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFBO0lBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFBO0lBQ2hDLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQTtJQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFBO0NBQzFCO0FBRUQsa0JBQWUsU0FBUyxDQUFBIn0=