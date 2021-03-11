import { createSelector } from "reselect"


export const getItemsSelector = (state) => {
    return state.catalogPage.products
}

export const getItems = createSelector(getItemsSelector, (products) => {
    return products.filter(i => true)
})

export const getImg = (state) => {
    return state.catalogPage.products
}

export const getName = (state) => {
    return state.catalogPage.products.name
}

export const getTotalItems = (state) => {
    return state.catalogPage.totalItems
}

export const getImage = (state) => {
    return state.catalogPage.products.image.x1
}





