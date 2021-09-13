// TODO: rename function, maybe array-of-arrays

export const chunk = (arr = [], size = 0) => {
    let ar = [];
    for (let i = 0; i < Math.ceil(arr.length / size); i++) {
        ar[i] = arr.slice((i*size), (i*size) + size);

    }
    
    return ar;
};
