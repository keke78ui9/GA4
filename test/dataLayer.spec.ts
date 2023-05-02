import {} from '../src/types/global';
import {get} from '../src/dataLayer';

describe('test dataLayer get function', () => {
    test('', () => {

        window.dataLayer = window.dataLayer || [];

        window.dataLayer.push({
            'test': 1
        });
        window.dataLayer.push({
            'test': 11
        });

        const result = get('test');
        expect(result).toBe(1);

    });
});