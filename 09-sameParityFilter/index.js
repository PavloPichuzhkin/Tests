export const sameParityFilter = (arr = []) => {
    let ar = [];
    if (arr[0] % 2 === 0) {
        ar = arr.filter(elem => {
            // if (elem % 2 === 0) return elem;//?????????
            return elem % 2 === 0;
        })
    }
    else {
        ar = arr.filter(elem => {
        // if (elem%2===1) return elem; //???????????
            // return elem % 2 === 1;
            return !(elem % 2 === 0);
        })
    }

    return ar;
}
