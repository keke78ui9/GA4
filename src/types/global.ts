import { DataLayerObject } from "./dataLayer";
import { gtag } from "./gtag";

declare global {
  

  interface Window {
      dataLayer: Array<DataLayerObject>;
      gtag:gtag;
    }
  }

export {};