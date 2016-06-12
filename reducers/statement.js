export default (state = { statement: { total: 0}}, action = {}) => {
    switch (action.type) {
        case 'STATEMENT_RECEIVED':
            return { ...state, statement: action.statement };
        case 'STATEMENT_FAILED':
            return { ...state, errorMessage: action.message };
        default:
            return state;
    }
}
