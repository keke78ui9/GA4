interface KeyValuePair {
    [key:string|number]: any;
  }

interface DataLayerObject extends KeyValuePair{
    event?: string;
    value?: string;
}

export {DataLayerObject};