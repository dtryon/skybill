import React from 'react';
import ReactDOM from 'react-dom';
import { renderIntoDocument, findRenderedDOMComponentWithClass } from 'react-addons-test-utils';
import { expect } from 'chai';

import PackageSubscription from './PackageSubscription';

describe('PackageSubscription', () => {

    it('should render without problems', () => {
        const component = renderIntoDocument(<PackageSubscription />);
        expect(component).to.not.be.undefined;
    });

    describe('render correct icon', () => {

        it('should render tv icon', () => {

            const component = renderIntoDocument(<PackageSubscription type="tv" />);

            const title = findRenderedDOMComponentWithClass(component, 'PackageSubscription_title');

            expect(ReactDOM.findDOMNode(title).textContent).to.contain('tv');
        });

        it('should render talk icon', () => {

            const component = renderIntoDocument(<PackageSubscription type="talk" />);

            const title = findRenderedDOMComponentWithClass(component, 'PackageSubscription_title');

            expect(ReactDOM.findDOMNode(title).textContent).to.contain('call');
        });

        it('should render broadband icon', () => {

            const component = renderIntoDocument(<PackageSubscription type="broadband" />);

            const title = findRenderedDOMComponentWithClass(component, 'PackageSubscription_title');

            expect(ReactDOM.findDOMNode(title).textContent).to.contain('cast');
        });

        it('should render default icon', () => {

            const component = renderIntoDocument(<PackageSubscription type="asdf" />);

            const title = findRenderedDOMComponentWithClass(component, 'PackageSubscription_title');

            expect(ReactDOM.findDOMNode(title).textContent).to.contain('card_giftcard');
        });
    });

    it('should render type as name', () => {

        const component = renderIntoDocument(<PackageSubscription type="tv" />);

        const title = findRenderedDOMComponentWithClass(component, 'PackageSubscription_title');

        expect(ReactDOM.findDOMNode(title).textContent).to.contain('TV');
    });

    it('should render subscription name', () => {

        const component = renderIntoDocument(<PackageSubscription type="tv" name="foo" />);

        const name = findRenderedDOMComponentWithClass(component, 'PackageSubscription_name');

        expect(ReactDOM.findDOMNode(name).textContent).to.contain('foo');
    });

    it('should render subscription cost', () => {

        const component = renderIntoDocument(<PackageSubscription type="tv" cost={4.44} />);

        const name = findRenderedDOMComponentWithClass(component, 'PackageSubscription_cost');

        expect(ReactDOM.findDOMNode(name).textContent).to.contain('4.44');
    });
});

