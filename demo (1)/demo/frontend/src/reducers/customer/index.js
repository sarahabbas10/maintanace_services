const initialState = {
    customer: {},
}

const customerReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "ADD_CUSTOMER":
            console.log("yeees:"+payload.name);
            return {
                customer: payload,
            }

        case "REMOVE_CUSTOMER":
            return {
                customer: {},
            }
        default:
            return state;
    }
}

export default customerReducer;