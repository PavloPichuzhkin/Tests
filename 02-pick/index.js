/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */


export const pick = (obj, ...fields) => {
  
    let ob = {};
    for (let i = 0; i < fields.length; i++){
                
        if (obj.hasOwnProperty(fields[i])) {
            ob[fields[i]]=obj[fields[i]];
        
        }
       
    }
    return ob;
};
