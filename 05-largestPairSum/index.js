/**
 * largestPairSum - Returns sum of highest and lowest values in array:
 * @param {array} numbers - the array of numbers
 * @returns {number} - returns the new number
 */
export const largestPairSum = (numbers) => {
   
    let max1 = Math.max(...numbers);
    let index = numbers.indexOf(max1);
   
    let newArrNumber = numbers.splice(index, 1);
    let max2 = Math.max(...numbers);
    return max1 + max2;
}
