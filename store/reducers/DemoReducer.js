import * as Actions from '../types';

const initialState = {
    addNewAddressResponse: [],
};

const AddNewAddressReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case Actions.ADD_NEW_ADDRESS:
            return { ...state, addNewAddressResponse: payload };
        default:
            return state;
    }
};

export default AddNewAddressReducer;