export const objToArr = obj => {
    let resultArr = [];
    for (let key in obj) {
        resultArr.push(obj[key]);
    }
    return resultArr;
};

export const arrToObj = arr => {
    let resultObj = {};

    for (let i = 0; i < arr.length; i++) {
        let item = arr[i];
        resultObj[item.id] = item;
    }
    
    return resultObj;
};