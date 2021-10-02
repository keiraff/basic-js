import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {


    calculateDepth(arr) {
        let maxDepth = 1;
        arr.forEach(x => {
            if (Array.isArray(x)) {
                let count = 1;
                count += this.calculateDepth(x);
                if (count >= maxDepth) maxDepth = count;
            }
        });
        return maxDepth;
    }
}