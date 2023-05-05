import { DataLayerObject } from './types/dataLayer';

function isObject(target:any): boolean {
    if (!target) {
        return false;
    }

    return Object.prototype.toString.call(target) === '[object Object]';
}

function isArguments(target:object): boolean {
    if (!target) {
        return false;
    }

    return Object.prototype.toString.call(target) === '[object Arguments]';
}

function getDataValue(key:string, currentData: DataLayerObject) {
    if (isObject(currentData)) {
        const data = currentData[key];
        if (data) {
            return data;
        }
        return null;
    }
    else if (isArguments(currentData) || Array.isArray(currentData)) {
        const arr = Object.values(currentData);
        const data = arr.find(c => c === key);
        if (data) {
            return data;
        }
        return null;
    }
    else {
        // not support.
        return null;
    }
}

/**
 * get value from dataLayer 
 * @param key key to search from dataLayer
 * @param getLast boolean, false (default) find the first item, true search the last value for the same key
 * @returns return the value if find, otherwise return empty string;
 */
function get(key:string, getLast?:boolean): any {
        
    if (!window.dataLayer || !Array.isArray(window.dataLayer)) {
        return '';
    }    

    if (!getLast) {

        for (let index = 0; index < window.dataLayer.length; index++) {
            const data = getDataValue(key, window.dataLayer[index]);
            if (!data) {
                continue;
            }

            return data;
        }
    }
    else {
        for (let index = window.dataLayer.length; index > 0; index--) {
            const data = getDataValue(key, window.dataLayer[index]);
            if (!data) {
                continue;
            }

            return data;
        }
    }
}

export {get};