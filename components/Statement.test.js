import React from 'react';
import { renderIntoDocument, findRenderedComponentWithType } from 'react-addons-test-utils';
import { expect } from 'chai';

import { Statement } from './Statement';
import SubscriptionsContainer from './SubscriptionsContainer';
import SkyStoreContainer from './SkyStoreContainer';
import CallsContainer from './CallsContainer';

describe('Statement', () => {

    it('should render without problems', () => {

        const component = renderIntoDocument(<Statement init={()=>{}}/>);
        expect(component).to.not.be.undefined;
    });

    it('should render subscriptions container', () => {

        const component = renderIntoDocument(<Statement init={()=>{}}/>);

        const subscriptionsContainer = findRenderedComponentWithType(component, SubscriptionsContainer);

        expect(subscriptionsContainer).to.not.be.undefined;
    });

    it('should render sky store container', () => {

        const component = renderIntoDocument(<Statement init={()=>{}}/>);

        const skyStoreContainer = findRenderedComponentWithType(component, SkyStoreContainer);

        expect(skyStoreContainer).to.not.be.undefined;
    });

    it('should render calls container', () => {

        const component = renderIntoDocument(<Statement init={()=>{}}/>);

        const callsContainer = findRenderedComponentWithType(component, CallsContainer);

        expect(callsContainer).to.not.be.undefined;
    });
});

