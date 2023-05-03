import {} from '../src/types/global';
import { ga4 } from '../src/index';
import { ga4Option } from '../src/ga4/ga4option';

describe('test ga4', () => {
    test('init ga4 should call gtag', () => {

        window.gtag = jest.fn();

        ga4.init({
            targetId: 'g-123'
        } as ga4Option);

        ga4.send('test', {
            'test': 1
        });                

        expect(window.gtag).toBeCalledTimes(3);

    });

    test('init ga4 able to use gtag at ga4', () => {

        window.gtag = jest.fn();

        ga4.init({
            targetId: 'g-123'
        } as ga4Option);

        ga4.gtag('event', 'test', {
            'test': 1
        });                

        expect(window.gtag).toBeCalledTimes(3);

    });
});