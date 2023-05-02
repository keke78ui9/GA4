import { ga4Option } from "./ga4option";
import { DataLayerObject } from "../types/dataLayer";
import { KeyValueParams } from "../types/gtag";

class ga4 {

    private static instance: ga4;

    private constructor() {
    }

    public init(option:ga4Option){
        window.dataLayer = window.dataLayer || Array<DataLayerObject>;
        window.gtag = window.gtag || function() {
            window.dataLayer.push(arguments);
        }
        window.gtag('js', new Date());
        window.gtag('config', option.targetId);
    }

    public static getInstance():ga4 {
        if (!ga4.instance) {
            ga4.instance = new ga4();
        }               
        return ga4.instance;
    }

    public event(eventName:string, eventParameters: KeyValueParams ): boolean {

        window.gtag('event', eventName, eventParameters);

        return true;
    }
}

export {ga4};