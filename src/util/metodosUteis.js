import * as axios from "axios";
import {getToken} from "../config/auth";

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

export const downloadExcelFile = async fileUrl => {

    let params = {
        url: fileUrl, method: 'GET', responseType: 'blob', headers: {
            authorization: `Bearer ${getToken()}`,
            'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
        }
    };

    return await axios(params).then((response) => {
        const blob = new Blob([response.data], {
            type: 'application/octet-stream'
        });
        console.log(response);
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = response.headers['content-disposition'].replace(/.+filename=/, '');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link)
    })
};

export const arrayToObj = arr =>
    arr.length > 0 ? arr.reduce((obj, item) => Object.assign(obj, item)) : null;

export const mapAndGetId = v => {
    if (Array.isArray(v) && v.length) {
        return v.map(v => v.id)
    }
    return v
};


export const randomId = () => {
    const S4 = () => (((1+Math.random())*0x10000)|0).toString(16).substring(1);

    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
};
