import currency from './currency';

import { expect } from 'chai';

describe('currency formatting', () => {

    it('should be able to format with currency symbol', () => {

        const result = currency.format(2.33);

        expect(result).to.equal('£2.33');
    });

    it('should be able to format decimal places for integer', () => {

        const result = currency.format(2);

        expect(result).to.equal('£2.00');
    });

    it('should be able to format to 0 if null', () => {

        const result = currency.format(null);

        expect(result).to.equal('£0.00');
    });

    it('should be able to format to 0 if not a number', () => {

        const result = currency.format('something');

        expect(result).to.equal('£0.00');
    });
});
