import React from 'react';
import ReactDOM from 'react-dom';
import { renderIntoDocument, findRenderedComponentWithType, findRenderedDOMComponentWithClass } from 'react-addons-test-utils';
import { expect } from 'chai';

import CallsContainer from './CallsContainer';
import CallLog from './CallLog';

describe('CallsContainer', () => {

    it('should render without problems', () => {
        const component = renderIntoDocument(<CallsContainer />);
        expect(component).to.not.be.undefined;
    });

    it('should render children', () => {
        const component = renderIntoDocument(<CallsContainer>
                                                <CallLog id='foo'/>
                                            </CallsContainer>);
        const child = findRenderedComponentWithType(component, CallLog);

        expect(child).to.not.be.undefined;
        expect(child.props.id).to.equal('foo');
    });

    it('should render total', () => {
        const component = renderIntoDocument(<CallsContainer total={3.45}/>);

        const total = findRenderedDOMComponentWithClass(component, 'CallsContainer_total');

        expect(ReactDOM.findDOMNode(total).textContent).to.equal('£3.45')
    });
});





