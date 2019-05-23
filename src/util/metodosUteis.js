export const isEmpty = e => {
    for(let key in e) {
        return e.hasOwnProperty(key);
    }
};