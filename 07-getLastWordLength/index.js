export const getLastWordLength = str => {
    str = str.trim();
    let arr = str.split(' ');
    let word = arr.pop();
    return word.length;
};
