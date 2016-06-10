export default (state = { statement: { total: 0}}, action) => {
    switch (action.type) {
        case 'STATEMENT_RECEIVED':
            return { ...state, statement: action.statement };
        default:
            return state;
    }
}
