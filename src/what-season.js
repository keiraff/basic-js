import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(date) {
    if (date === undefined) return 'Unable to determine the time of year!';
    if (isNaN(Date.parse(date))) throw new Error('Invalid date!');
    try {
        date.toDateString();
    } catch (error) {
        throw new Error('Invalid date!');
    }
    let month = date.getMonth();
    let season = null;
    switch (month) {
        case 0:
        case 1:
        case 11:
            season = 'winter';
            break;
        case 2:
        case 3:
        case 4:
            season = 'spring';
            break;
        case 5:
        case 6:
        case 7:
            season = 'summer';
            break;
        default:
            season = 'fall';
    }
    return season;
}