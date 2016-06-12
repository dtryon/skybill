import React from 'react';
import { renderIntoDocument, scryRenderedComponentsWithType } from 'react-addons-test-utils';
import { expect } from 'chai';

import SkyStoreContainer from './SkyStoreContainer';
import StorePurchase from './StorePurchase';

describe('SkyStoreContainer', () => {

    it('should render without problems', () => {
        const component = renderIntoDocument(<SkyStoreContainer />);
        expect(component).to.not.be.undefined;
    });

    it('should render children', () => {
        const component = renderIntoDocument(<SkyStoreContainer>
                                                <StorePurchase name="foo"/>
                                                <StorePurchase name="bar"/>
                                            </SkyStoreContainer>);
        const children = scryRenderedComponentsWithType(component, StorePurchase);

        expect(children.length).to.equal(2);
    });
});


