import * as actions from './statement';

import { expect } from 'chai';
import sinon from 'sinon';
import nock from 'nock';


describe('statement actions', () => {

    afterEach(function () {
        // runs after each test in this block
        nock.cleanAll();
    });

    it('getStatement is successful', async () => {

        const dispatch = sinon.spy();

        nock('https://still-scrubland-9880.herokuapp.com')
        .get('/bill.json')
        .reply(200, [{},{},{}]);
        await actions.getStatement()(dispatch);

        expect(dispatch.args[0][0].type).to.equal(actions.statementReceived().type);
        expect(dispatch.args[0][0].statement.length).to.equal(3);
    });

    it('getStatement is not successful', async () => {

        const dispatch = sinon.spy();

        nock('https://still-scrubland-9880.herokuapp.com')
        .get('/bill.json')
        .reply(500);
        await actions.getStatement()(dispatch);

        expect(dispatch.args[0][0].type).to.equal(actions.statementFailed().type);
        expect(dispatch.args[0][0].message).to.equal('there was a problem fetching the statement');
    });
});
