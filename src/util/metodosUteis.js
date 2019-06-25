export const isEmpty = e => {
    for(let key in e) {
        return e.hasOwnProperty(key);
    }
};

export const getValue = (path, obj) => {
    try {
        return path.split('.').reduce((value, el) => value[el], obj)
    } catch (e) {
        return null
    }
}

