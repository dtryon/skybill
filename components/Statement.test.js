import React from 'react';
import { renderIntoDocument } from 'react-addons-test-utils';
import { expect } from 'chai';

import { Statement } from './Statement';

describe('Statement', () => {

    it('should render without problems', () => {

        const component = renderIntoDocument(<Statement init={()=>{}}/>);
        expect(component).to.not.be.undefined;
    });
});

