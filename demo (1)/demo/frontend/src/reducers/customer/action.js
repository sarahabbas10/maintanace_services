export const addCustomer = (customer) => {
    return {
        type: "ADD_CUSTOMER",
        payload: customer
    }
}


export const removeCustomer = () => {
    return { type: "REMOVE_CUSTOMER",
 }
}