import React from 'react';
import ReactDOM from 'react-dom';
import { renderIntoDocument, findRenderedComponentWithType, findRenderedDOMComponentWithClass } from 'react-addons-test-utils';
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

    describe('Statement header', () => {

        let statement;
        before('setup statement data', () => {
            statement = { total: 136.03, statement: { due: '2015-01-25', period: { from: '2015-01-26', to: '2015-02-25'}}};
        });

        it ('should render statement period', () => {

            const component = renderIntoDocument(<Statement init={()=>{}} statement={statement} />);

            const statementPeriod = findRenderedDOMComponentWithClass(component, 'Statement_period_dates');

            expect(ReactDOM.findDOMNode(statementPeriod).textContent).to.equal('Jan 26th, 2015 - Feb 25th, 2015');
        });

        it ('should render statement total', () => {

            const component = renderIntoDocument(<Statement init={()=>{}} statement={statement} />);

            const statementPeriod = findRenderedDOMComponentWithClass(component, 'Statement_total');

            expect(ReactDOM.findDOMNode(statementPeriod).textContent).to.equal('£136.03');
        });

        it ('should render statement due date', () => {

            const component = renderIntoDocument(<Statement init={()=>{}} statement={statement} />);

            const statementPeriod = findRenderedDOMComponentWithClass(component, 'Statement_due');

            expect(ReactDOM.findDOMNode(statementPeriod).textContent).to.equal('due: Jan 25th, 2015');
        });
    });
});

