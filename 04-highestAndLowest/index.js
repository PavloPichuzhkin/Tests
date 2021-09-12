/**
 * highestAndLowest - Modify initial string into new one, that start with highest number and and with lowest:
 * @param {string} numbers - the source numbers
 * @returns {string} - returns the new string
 */
export const highestAndLowest = (numbers) => {
    let arr = numbers.split(' ');
    let arrNumber = arr.map(el => Number(el));
    let min = Math.min(...arrNumber);
    let max = Math.max(...arrNumber);
    return `${min} ${max}`;
}
