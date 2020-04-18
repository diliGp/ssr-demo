export const actionTypes = {
    increment: 'INCREMENT_COUNT',
    decrement: 'DECREMENT_COUNT'
};

export const increment = (amount = 1) => ({
    type: actionTypes.increment,
    payload: {
        amount
    }
});

export const decrement = (amount = 1) => ({
    type: actionTypes.decrement,
    payload: {
        amount
    }
});

