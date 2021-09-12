/**
 * repeatString - Duplicates every char in the string some times according to char index
 * @param {string} str - the string
 * @returns {string} - returns the new string
 */
export const repeatString = (str = '') => {
    let out = [];
    let str2 = str.toUpperCase();
    let mas=str2.split('');
    mas.map((el, index) => {
        let ou = '';
        for (let i = 0; i < index + 1; i++) {
            
            
            if (i > 0) el = el.toLowerCase();
            ou += el;
        }
        out[index] = ou;
    })

    let rez = out.join('-');
    return rez;
}
