export function reducer(state, action) {
    switch (action.type) {
        case 'TOGGLE_PRODUCT_CODE':
            return {
                showProductCode: action.payload
            };

        default:
            return state;
    }
}
