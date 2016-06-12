import React from 'react';
import ReactDOM from 'react-dom';
import { renderIntoDocument, findRenderedDOMComponentWithClass, scryRenderedDOMComponentsWithClass } from 'react-addons-test-utils';
import { expect } from 'chai';

import StorePurchase from './StorePurchase';

describe('StorePurchase', () => {

    it('should render without problems', () => {
        const component = renderIntoDocument(<StorePurchase />);
        expect(component).to.not.be.undefined;
    });

    describe('render correct icon', () => {

        it('should render rental icon', () => {

            const component = renderIntoDocument(<StorePurchase type="rental" />);

            const title = findRenderedDOMComponentWithClass(component, 'StorePurchase_title');

            expect(ReactDOM.findDOMNode(title).textContent).to.contain('schedule');
        });

        it('should render buy icon', () => {

            const component = renderIntoDocument(<StorePurchase type="buy" />);

            const title = findRenderedDOMComponentWithClass(component, 'StorePurchase_title');

            expect(ReactDOM.findDOMNode(title).textContent).to.contain('home');
        });

        it('should render default icon', () => {

            const component = renderIntoDocument(<StorePurchase type="asdf" />);

            const title = findRenderedDOMComponentWithClass(component, 'StorePurchase_title');

            expect(ReactDOM.findDOMNode(title).textContent).to.contain('credit_card');
        });
    });

    it('should render purchase costs', () => {

        const purchases = [
            { title: 'foo1', cost: 3.56 },
            { title: 'foo2', cost: 4.56 },
            { title: 'foo3', cost: 5.56 }
        ];
        const component = renderIntoDocument(<StorePurchase purchases={purchases} />);

        const costs = scryRenderedDOMComponentsWithClass(component, 'StorePurchase_item_cost');

        expect(costs.length).to.equal(3);
        expect(ReactDOM.findDOMNode(costs[2]).textContent).to.contain('5.56');

    });

    it('should render purchase name', () => {

        const purchases = [
            { title: 'foo1', cost: 3.56 },
            { title: 'foo2', cost: 4.56 },
            { title: 'foo3', cost: 5.56 }
        ];
        const component = renderIntoDocument(<StorePurchase purchases={purchases} />);

        const names = scryRenderedDOMComponentsWithClass(component, 'StorePurchase_item_name');

        expect(names.length).to.equal(3);
        expect(ReactDOM.findDOMNode(names[2]).textContent).to.contain('foo3');

    });
});


