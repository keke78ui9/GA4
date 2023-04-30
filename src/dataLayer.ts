function get(key:string, getLast?:boolean):string | object {
    if (window.dataLayer) {
        // if (getLast) {
        //     const data = window.dataLayer?.find((item) => item[key]);    
        // }

        const data = window.dataLayer?.find((item) => item[key]);
        return data ? data[key] : '';
    }
    return '';
}