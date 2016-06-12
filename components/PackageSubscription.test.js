import React from 'react';
import { renderIntoDocument } from 'react-addons-test-utils';
import { expect } from 'chai';

import PackageSubscription from './PackageSubscription';

describe('PackageSubscription', () => {

    it('should render without problems', () => {
        const component = renderIntoDocument(<PackageSubscription />);
        expect(component).to.not.be.undefined;
    });
});

