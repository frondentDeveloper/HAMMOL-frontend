export const ProductIdReducer = (state = [], action) =>{
    switch (action.type) {
        case "GET_PRODUCT_ID":{
            return action.payload
        }
        default: {
            return state
        }
    }
};