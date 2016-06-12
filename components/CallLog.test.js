import React from 'react';
import { renderIntoDocument } from 'react-addons-test-utils';
import { expect } from 'chai';

import CallLog from './CallLog';

describe('CallLog', () => {

    it('should render without problems', () => {
        const component = renderIntoDocument(<CallLog />);
        expect(component).to.not.be.undefined;
    });
});


