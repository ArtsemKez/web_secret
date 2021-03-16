import {catalogAPI} from "../api/api";

let initialState = {
    products: [],
    minPrice: 0,
    maxPrice: 100000,
    totalItems: 0,
    CanonCheckbox: false,
    NikonCheckbox: false,
    FujiFilmCheckbox: false,
    SonyCheckbox: false,
    OlympusCheckbox: false,
    PanasonicCheckbox: false,
    otherCheckbox: false,
}

export const CatalogReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case 'WS/CATALOG/SET_ITEMS':
            return {...state, products: actions.products}
        case 'WS/FILTER/CHANGE_MIN_PRICE':
            return {...state, minPrice: actions.minPrice}
        case 'WS/FILTER/CHANGE_MAX_PRICE':
            return {...state, maxPrice: actions.maxPrice}
        case 'WS/FILTER/SET_TOTAL_ITEMS':
            return {...state, totalItems: actions.totalItems}
        case 'WS/FILTER/CHANGE_CANON_CHECKBOX':
            return {...state, CanonCheckbox: actions.CanonCheckbox}
        case 'WS/FILTER/CHANGE_NIKON_CHECKBOX':
            return {...state, NikonCheckbox: actions.NikonCheckbox}
        case 'WS/FILTER/CHANGE_FUJIFILM_CHECKBOX':
            return {...state, FujiFilmCheckbox: actions.FujiFilmCheckbox}
        case 'WS/FILTER/CHANGE_SONY_CHECKBOX':
            return {...state, SonyCheckbox: actions.SonyCheckbox}
        case 'WS/FILTER/CHANGE_OLYMPUS_CHECKBOX':
            return {...state, OlympusCheckbox: actions.OlympusCheckbox}
        case 'WS/FILTER/CHANGE_PANASONIC_CHECKBOX':
            return {...state, PanasonicCheckbox: actions.PanasonicCheckbox}
        case 'WS/FILTER/CHANGE_OTHER_CHECKBOX':
            return {...state, otherCheckbox: actions.otherCheckbox}

        default:
            return state;
    }
}

export const actions = {
    setItems: (products) => ({type: 'WS/CATALOG/SET_ITEMS', products}),
    setTotalItems: (totalItems) => ({type: 'WS/FILTER/SET_TOTAL_ITEMS', totalItems}),
    changeMinPrice: (minPrice) => ({type: 'WS/FILTER/CHANGE_MIN_PRICE', minPrice}),
    changeMaxPrice: (maxPrice) => ({type: 'WS/FILTER/CHANGE_MAX_PRICE', maxPrice}),
    changeCanonCheckbox: (CanonCheckbox) => ({type: 'WS/FILTER/CHANGE_CANON_CHECKBOX', CanonCheckbox}),
    changeNikonCheckbox: (NikonCheckbox) => ({type: 'WS/FILTER/CHANGE_NIKON_CHECKBOX', NikonCheckbox}),
    changeFujiFilmCheckbox: (FujiFilmCheckbox) => ({type: 'WS/FILTER/CHANGE_FUJIFILM_CHECKBOX', FujiFilmCheckbox}),
    changeSonyCheckbox: (SonyCheckbox) => ({type: 'WS/FILTER/CHANGE_SONY_CHECKBOX', SonyCheckbox}),
    changeOlympusCheckbox: (OlympusCheckbox) => ({type: 'WS/FILTER/CHANGE_OLYMPUS_CHECKBOX', OlympusCheckbox}),
    changePanasonicCheckbox: (PanasonicCheckbox) => ({type: 'WS/FILTER/CHANGE_PANASONIC_CHECKBOX', PanasonicCheckbox}),
    changeOtherCheckbox: (otherCheckbox) => ({type: 'WS/FILTER/CHANGE_OTHER_CHECKBOX', otherCheckbox}),
}

export const requestCatalog = (minPrice, maxPrice, CanonCheckbox,
                               NikonCheckbox,
                               FujiFilmCheckbox,
                               SonyCheckbox,
                               OlympusCheckbox,
                               PanasonicCheckbox,
                               otherCheckbox) => {
    return async (dispatch) => {
        let Response = await catalogAPI.getCatalog(minPrice, maxPrice, CanonCheckbox,
            NikonCheckbox,
            FujiFilmCheckbox,
            SonyCheckbox,
            OlympusCheckbox,
            PanasonicCheckbox,
            otherCheckbox)
        dispatch(actions.setItems(Response.data.products))
        dispatch(actions.setTotalItems(Response.data.meta.total))
    }
}

export default CatalogReducer