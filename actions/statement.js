
async function fetchStatement () {
    const response = await fetch('https://still-scrubland-9880.herokuapp.com/bill.json', { method: 'get', accept: 'appliction/json'});
    const json = await response.json();
    return json;
}

export const getStatement = () => {
    return async (dispatch) => {
        const statement = await fetchStatement();
        dispatch(statementReceived(statement));
    }
}

export const statementReceived = (statement) => {
    return {
        type: 'STATEMENT_RECEIVED',
        statement
    };
}

