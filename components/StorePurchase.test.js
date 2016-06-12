import React from 'react';
import { renderIntoDocument } from 'react-addons-test-utils';
import { expect } from 'chai';

import StorePurchase from './StorePurchase';

describe('StorePurchase', () => {

    it('should render without problems', () => {
        const component = renderIntoDocument(<StorePurchase />);
        expect(component).to.not.be.undefined;
    });
});


