export const sortByInterval = (a, b) => {
    let intervalValues = {'daily': 1, 'weekly': 2, 'monthly': 3};    
    return intervalValues[a.interval] > intervalValues[b.interval];
};