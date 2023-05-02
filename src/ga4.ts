class ga4 {

    private static instance: ga4;

    private constructor() {
        this.initialization();
    }

    private initialization(){
        window.gtag("config", "123", {
            "xe": true
        });
        window.gtag('event', 'view_item', {
            
        });
    }

    public static getInstance():ga4 {
        if (!ga4.instance) {
            ga4.instance = new ga4();
        }               
        return ga4.instance;
    }

    public static send(): boolean {

        return true;
    }

}

export {ga4};