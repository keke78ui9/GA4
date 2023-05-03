import {} from '../src/types/global';
import {dataLayerHelper} from '../src/index';
import {findLast} from '../src/util';

describe('test dataLayer get function', () => {
    beforeEach(() => {
        window.dataLayer = [];
    });

    test('by default dataLayer get should return the 1st item', () => {

        window.dataLayer = window.dataLayer || [];

        window.dataLayer.push({
            'test': 1
        });
        window.dataLayer.push({
            'test': 11
        });

        const result = dataLayerHelper.get('test');
        expect(result).toBe(1);

    });

    test('if get last is true should return the last item', () => {

        window.dataLayer = window.dataLayer || [];

        window.dataLayer.push({
            'test': 1
        });
        window.dataLayer.push({
            'test': 11
        });

        const result = dataLayerHelper.get('test', true);
        expect(result).toBe(11);

    });
});