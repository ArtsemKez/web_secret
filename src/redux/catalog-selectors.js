import { createSelector } from "reselect"

export const getItemsSelector = (state) => {
    return state.catalogPage.products
}

export const getItems = createSelector(getItemsSelector, (products) => {
    return products.filter(i => true)
})

export const getTotalItems = (state) => {
    return state.catalogPage.totalItems
}
export const getMinPrice = (state) => {
    return state.catalogPage.minPrice
}
export const getMaxPrice = (state) => {
    return state.catalogPage.maxPrice
}
export const getCanonCheckbox = (state) => {
    return state.catalogPage.CanonCheckbox
}
export const getNikonCheckbox = (state) => {
    return state.catalogPage.NikonCheckbox
}
export const getFujiFilmCheckbox = (state) => {
    return state.catalogPage.FujiFilmCheckbox
}
export const getSonyCheckbox = (state) => {
    return state.catalogPage.SonyCheckbox
}
export const getOlympusCheckbox = (state) => {
    return state.catalogPage.OlympusCheckbox
}
export const getPanasonicCheckbox = (state) => {
    return state.catalogPage.PanasonicCheckbox
}
export const getOtherCheckbox = (state) => {
    return state.catalogPage.otherCheckbox
}