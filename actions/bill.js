
async function fetchBill () {
    const response = await fetch('https://still-scrubland-9880.herokuapp.com/bill.json', { method: 'get', accept: 'appliction/json'});
    const json = await response.json();
    return json;
}

export const getBill = () => {
    return async (dispatch) => {
        const bill = await fetchBill();
        dispatch(billReceived(bill));
    }
}

export const billReceived = (bill) => {
    return {
        type: 'BILL_RECEIVED',
        bill
    };
}

