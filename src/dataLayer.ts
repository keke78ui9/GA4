/**
 * get value from dataLayer 
 * @param key key to search from dataLayer
 * @param getLast boolean, false (default) find the first item, true search the last value for the same key
 * @returns return the value if find, otherwise return empty string;
 */
function get(key:string, getLast?:boolean):string | object {
    
    if (window.dataLayer) {
        const data = getLast 
        ? window.dataLayer?.findLast((item) => item[key])
        : window.dataLayer?.find((item) => item[key]);
        return data ? data[key] : '';
    }

    return '';
}

export {get};