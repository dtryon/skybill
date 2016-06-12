import React from 'react';
import { renderIntoDocument, scryRenderedComponentsWithType } from 'react-addons-test-utils';
import { expect } from 'chai';

import SubscriptionsContainer from './SubscriptionsContainer';
import PackageSubscription from './PackageSubscription';

describe('SubscriptionsContainer', () => {

    it('should render without problems', () => {
        const component = renderIntoDocument(<SubscriptionsContainer />);
        expect(component).to.not.be.undefined;
    });

    it('should render children', () => {
        const component = renderIntoDocument(<SubscriptionsContainer>
                                                <PackageSubscription name="foo"/>
                                                <PackageSubscription name="bar"/>
                                                <PackageSubscription name="bar"/>
                                            </SubscriptionsContainer>);
        const children = scryRenderedComponentsWithType(component, PackageSubscription);

        expect(children.length).to.equal(3);
    });
});


