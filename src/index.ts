import {ga} from './ga4/index';
import {get} from './dataLayer';

const dataLayerHelper = { get };
const ga4 = ga;

export {ga4, dataLayerHelper};