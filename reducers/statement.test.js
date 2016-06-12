import reducer from './statement';
import * as actions from '../actions/statement';

import freeze from 'deep-freeze';
import { expect } from 'chai';

describe('statement reducer', () => {
    it('should reduce statement received action', () => {

        const action = actions.statementReceived({ total: 4.50 });

        const currentState = reducer();
        freeze(currentState);

        const nextState = reducer(currentState, action);

        expect(nextState).to.deep.equal({
            statement: { total: 4.50 }
        });

    });

    it('should reduce statement failed action', () => {

        const action = actions.statementFailed();

        const currentState = reducer();
        freeze(currentState);

        const nextState = reducer(currentState, action);

        expect(nextState).to.deep.equal({
            statement: { total: 0 },
            errorMessage: 'there was a problem fetching the statement'
        });

    });
});

