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
