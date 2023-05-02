import { DataLayerObject } from "./dataLayer";
import { gtag } from "./gtag";

declare global {
  
    interface Array<T> {
      findLast(predicate: (value:T, index:number, array:T[]) => unknown, thisArg?:any ): T | undefined
    }

    interface Window {
      dataLayer: Array<DataLayerObject>;
      gtag:gtag;
    }
  }

export {};