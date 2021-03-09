import {catalogAPI} from "../../api/api";

let initialState = {
    products: [],
    totalItems: 0
}


export const CatalogReducer = (state = initialState, actions) => {
    switch (actions.type) {

        case 'WS/CATALOG/SET_ITEMS':
            return {...state, products: actions.products}

        case 'WS/CATALOG/SET_TOTAL/ITEMS':
            return {...state, totalItems: actions.totalItems}

        default:
            return state;
    }
}

export const actions = {
    setItems: (products) => ({type: 'WS/CATALOG/SET_ITEMS', products}),
    setTotalItems: (totalItems) => ({type: 'WS/CATALOG/SET_TOTAL/ITEMS', totalItems}),

}

export const requestCatalog = () => {
    return async (dispatch) => {
        debugger
        let Response = await catalogAPI.getCatalog()
        dispatch(actions.setItems(Response.data.products))
        dispatch(actions.setTotalItems(Response.data.meta.total))
        debugger
    }
}

export default CatalogReducer