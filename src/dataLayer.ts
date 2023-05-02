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