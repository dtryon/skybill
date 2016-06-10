export default (state = { bill: { total: 0}}, action) => {
    switch (action.type) {
        case 'BILL_RECEIVED':
            return { ...state, bill: action.bill };
        default:
            return state;
    }
}
