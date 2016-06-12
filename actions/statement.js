
async function fetchStatement () {
    const response = await fetch('https://still-scrubland-9880.herokuapp.com/bill.json', { method: 'get', accept: 'appliction/json'});
    const json = await response.json();
    return json;
}

export const getStatement = () => {
    return async (dispatch) => {
        try {
            const statement = await fetchStatement();
            dispatch(statementReceived(statement));
        } catch(err) {
            dispatch(statementFailed());
        }
    }
}

export const statementReceived = (statement) => {
    return {
        type: 'STATEMENT_RECEIVED',
        statement
    };
}

export const statementFailed = () => {
    return {
        type: 'STATEMENT_FAILED',
        message: 'there was a problem fetching the statement'
    };
}

