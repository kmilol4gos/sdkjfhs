export const cartInitialState = JSON.parse(window.localStorage.getItem('cart')) || [];

export const CART_ACTION_TYPES = {
    ADD_TO_CART: 'ADD_TO_CART',
    REMOVE_FROM_CART: 'REMOVE_FROM_CART',
    CLEAR_CART: 'CLEAR_CART',
    CALCULAR_TOTAL: 'CALCULAR_TOTAL',
    CANTIDAD_PRODUCTOS: 'CANTIDAD_PRODUCTOS'
}

//update localstorage con el state del carrito
export const updateLocalStorage = (state) => {
    window.localStorage.setItem('cart', JSON.stringify(state));
}

export const cartReducer = (state, action) => {
    const { type: actionType, payload: actionPayload } = action;

    switch (actionType) {
        case CART_ACTION_TYPES.ADD_TO_CART: {
            const { id } = actionPayload;
            const productInCartIndex = state.findIndex(item => item.id === id);

            if (productInCartIndex >=0) {
                const newState = structuredClone(state);
                newState[productInCartIndex].quantity += 1;
                updateLocalStorage(newState);
                return newState;
            }

            const newState = [
                ...state,
                {
                    ...actionPayload,
                    quantity: 1
                }
            ]

            updateLocalStorage(newState);
            return newState;

        }

        case CART_ACTION_TYPES.REMOVE_FROM_CART: {

            const { id_p } = actionPayload;
            const productInCartIndex = state.findIndex(item => item.id === id_p);

            if(productInCartIndex < 0){
                const newState = structuredClone(state);
                newState[productInCartIndex].quantity -= 1;
                updateLocalStorage(newState);
                return newState;
            }
            const { id } = actionPayload;
            const newState = state.filter(item => item.id !== id);
            updateLocalStorage(newState);
            return newState;
        }

        case CART_ACTION_TYPES.CLEAR_CART: {
            updateLocalStorage([]);
            return [];
        }

        case CART_ACTION_TYPES.CALCULAR_TOTAL: {
            const total = state.reduce((acc, item) => {
                return acc + (item.price * item.quantity);
            }
                , 0);
            return total;
        }

        case CART_ACTION_TYPES.CANTIDAD_PRODUCTOS: {
            const cantidad = state.reduce((acc, item) => {
                return acc + item.quantity;
            }
                , 0);
            return cantidad;
        }
    }

    return state;
}