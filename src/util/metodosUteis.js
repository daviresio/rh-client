import * as axios from "axios";

export const isEmpty = v => v === undefined || v === null || Object.keys(v).length === 0;

export const getValue = (path, obj) => {
    try {
        return path.split('.').reduce((value, el) => value[el], obj)
    } catch (e) {
        return null
    }
};

export const adicionaZero = value => value.toString().length > 1 ? value : '0' + value;

export const parseDate = value => new Date(Date.parse(value));

export const formateDate = date => `${adicionaZero(date.getDate())}/${adicionaZero(date.getMonth() + 1)}/${date.getFullYear()}`;

export const formateDateFull = v => v ? formateDate(parseDate(v)) : '';

export const downloadFile = async fileUrl => {
    return await axios({url: fileUrl, method: 'GET', responseType: 'blob'}).then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `${fileUrl.split('.com/')[1]}`);
        document.body.appendChild(link);
        link.click();
    })
};

export const arrayToObj = arr =>
    arr.length > 0 ? arr.reduce((obj, item) => Object.assign(obj, item)) : null;
