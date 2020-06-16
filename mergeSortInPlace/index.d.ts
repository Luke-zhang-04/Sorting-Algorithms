/**
 * Main mergesort function
 * @param {Array.<number>} array - array to sort
 * @param {number} left - beginning of segment to be sorted (pass in 0 if sorting entire array)
 * @param {number} right - end of segment to be sorted (pass in array.length - 1 if sorting entire array)
 * @returns {void} void; sorts in-place
 */
declare const mergeSort: (array: number[], left?: number | undefined, right?: number | undefined) => void;
export default mergeSort;
