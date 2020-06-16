"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = __importDefault(require("../utils"));
/**
 * Main shellsort function
 * @param {Array.<number>} array - array to sort
 * @returns {void} void; sorts in-place
 */
const shellSort = (array) => {
    let gap = Math.floor(array.length / 2); // Alternate gap sequence 4**iterations + 3 * 2**iterations + 1
    while (gap >= 1) {
        for (let i = gap; i < array.length; i++) { // Iterate through array, starting from gap
            let comparator = array[i], //make comparisons with this
            index, // In case of negative index
            output = 0; // For accessing x outside the array
            for (let x = i; x > gap - 2; x -= gap) { // Iterate throguh array with gap as the step
                output = x; // For accessing x outside the array
                if (x - gap < 0) { // In case of negative index
                    index = array.length - x - gap;
                }
                else {
                    index = x - gap;
                }
                if (array[index] <= comparator) { // Break when correct spot is found
                    break;
                }
                else { // Otherwise, move elements forward to make space
                    array[x] = array[index];
                }
            }
            array[output] = comparator; // Insert comparator in the correct spot
        }
        gap = Math.floor(gap / 2); // Increment the gap
    }
};
if (require.main === module) {
    const shuffledArray = utils_1.default(0, 1000);
    console.log("SHELL SORT");
    console.log(shuffledArray, "\n");
    shellSort(shuffledArray);
    console.log(shuffledArray, "\n");
}
exports.default = shellSort;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHFEQUFxQztBQUVyQzs7OztHQUlHO0FBQ0gsTUFBTSxTQUFTLEdBQUcsQ0FBQyxLQUFlLEVBQVEsRUFBRTtJQUN4QyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBQywrREFBK0Q7SUFFcEcsT0FBTyxHQUFHLElBQUksQ0FBQyxFQUFFO1FBQ2IsS0FBSyxJQUFJLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFHLEVBQUUsRUFBRSwyQ0FBMkM7WUFDbkYsSUFBSSxVQUFVLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLDRCQUE0QjtZQUNuRCxLQUFLLEVBQUUsNEJBQTRCO1lBQ25DLE1BQU0sR0FBVyxDQUFDLENBQUEsQ0FBQyxvQ0FBb0M7WUFFM0QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEdBQUcsRUFBRSxFQUFFLDZDQUE2QztnQkFDbEYsTUFBTSxHQUFHLENBQUMsQ0FBQSxDQUFDLG9DQUFvQztnQkFDL0MsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsRUFBRSxFQUFFLDRCQUE0QjtvQkFDM0MsS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtpQkFDakM7cUJBQU07b0JBQ0gsS0FBSyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7aUJBQ2xCO2dCQUVELElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLFVBQVUsRUFBRSxFQUFFLG1DQUFtQztvQkFDakUsTUFBSztpQkFDUjtxQkFBTSxFQUFFLGlEQUFpRDtvQkFDdEQsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQTtpQkFDMUI7YUFDSjtZQUNELEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxVQUFVLENBQUEsQ0FBQyx3Q0FBd0M7U0FDdEU7UUFDRCxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUEsQ0FBQyxvQkFBb0I7S0FDakQ7QUFDTCxDQUFDLENBQUE7QUFFRCxJQUFJLE9BQU8sQ0FBQyxJQUFJLEtBQUssTUFBTSxFQUFFO0lBQ3pCLE1BQU0sYUFBYSxHQUFHLGVBQWMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUE7SUFDN0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQTtJQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQTtJQUNoQyxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUE7SUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUE7Q0FDbkM7QUFFRCxrQkFBZSxTQUFTLENBQUEifQ==