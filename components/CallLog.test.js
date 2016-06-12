import React from 'react';
import ReactDOM from 'react-dom';
import { renderIntoDocument, scryRenderedDOMComponentsWithClass } from 'react-addons-test-utils';
import { expect } from 'chai';

import CallLog from './CallLog';

describe('CallLog', () => {

    it('should render without problems', () => {
        const component = renderIntoDocument(<CallLog />);
        expect(component).to.not.be.undefined;
    });

    it('should render call costs', () => {

        const calls = [
            { called: '07716393769', duration: '00:23:03', cost: 2.13 },
            { called: '08716393769', duration: '00:23:04', cost: 3.13 },
            { called: '09716393769', duration: '00:23:05', cost: 4.13 }
        ];

        const component = renderIntoDocument(<CallLog calls={calls}/>);

        const costs = scryRenderedDOMComponentsWithClass(component, 'CallLog_cost');

        expect(costs.length).to.equal(3);
        expect(ReactDOM.findDOMNode(costs[1]).textContent).to.contain('3.13');
    });

    it('should render call duration', () => {

        const calls = [
            { called: '07716393769', duration: '00:23:03', cost: 2.13 },
            { called: '08716393769', duration: '00:23:04', cost: 3.13 },
            { called: '09716393769', duration: '00:23:05', cost: 4.13 }
        ];

        const component = renderIntoDocument(<CallLog calls={calls}/>);

        const durations = scryRenderedDOMComponentsWithClass(component, 'CallLog_info');

        expect(durations.length).to.equal(3);
        expect(ReactDOM.findDOMNode(durations[1]).textContent).to.contain('00:23:04');
    });

    it('should render call numbers', () => {

        const calls = [
            { called: '07716393769', duration: '00:23:03', cost: 2.13 },
            { called: '08716393769', duration: '00:23:04', cost: 3.13 },
            { called: '09716393769', duration: '00:23:05', cost: 4.13 }
        ];

        const component = renderIntoDocument(<CallLog calls={calls}/>);

        const numbers = scryRenderedDOMComponentsWithClass(component, 'CallLog_info');

        expect(numbers.length).to.equal(3);
        expect(ReactDOM.findDOMNode(numbers[1]).textContent).to.contain('08716393769');
    });
});


