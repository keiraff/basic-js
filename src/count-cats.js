import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
export default function countCats(matrix) {
    let count = 0;
    for (var x = 0; x < matrix.length; x++) {
        for (var j = 0; j < matrix[x].length; j++) {
            if (matrix[x][j] == "^^") count++;
        }
    }
    return count;
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
}