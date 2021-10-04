import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
    let result = 0;
    let array = n.toString().split('');
    let temp = 0;
    for (var i in array) {
        let array1 = array.slice(0);
        array1.splice(i, 1);
        temp = array1.join("");
        result < temp ? result = temp : false;
    }
    return Number(result);

}