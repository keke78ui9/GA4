import {} from '../src/types/global';
import { ga} from '../src/ga4/index';
import { ga4Option } from '../src/ga4/ga4option';

describe('test ga4', () => {
    test('init ga4 should call gtag', () => {

        window.gtag = jest.fn();

        ga.init({
            targetId: 'g-123'
        } as ga4Option);

        ga.event('test', {
            'test': 1
        });        

        expect(window.gtag).toBeCalledTimes(3);

    });
});