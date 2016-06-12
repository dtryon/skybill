import React from 'react';
import ReactDOM from 'react-dom';
import { renderIntoDocument, scryRenderedComponentsWithType, findRenderedDOMComponentWithClass } from 'react-addons-test-utils';
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

    it('should render total', () => {
        const component = renderIntoDocument(<SkyStoreContainer total={3.46}/>);

        const total = findRenderedDOMComponentWithClass(component, 'SkyStoreContainer_total');

        expect(ReactDOM.findDOMNode(total).textContent).to.equal('£3.46')
    });
});


