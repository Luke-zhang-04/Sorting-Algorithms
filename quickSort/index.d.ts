/**
 * Main quicksort function
 * @param {Array.<number>} array - array to sort
 * @param {number | undefined} left - start of array segment to sort, leave undefined for whole array
 * @param {number | undefined} right - end of array segment to sort, leave undefined for whole array
 * @returns {void} void; sorts in-place
 */
declare const quickSort: (array: number[], left?: number | undefined, right?: number | undefined) => void;
export default quickSort;
