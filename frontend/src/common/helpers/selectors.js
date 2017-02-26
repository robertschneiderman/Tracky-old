export const objToArr = obj => {
    let resultArr = [];
    for (let key in obj) {
        resultArr.push(obj[key]);
    }
    return resultArr;
};