let initialState = {
    totalItems: 115,
    minPrice: 0,
    maxPrice: 200000
}

const FilterReducer = (state = initialState) => {
    switch (actions.type) {
        case 'BS/FILTER/CHANGE_MIN_PRICE':
            return {...state, minPrice: actions.minPrice}

        case 'BS/FILTER/CHANGE_MAX_PRICE':
            return  {...state, maxPrice: actions.maxPrice}

        default:
            return state;
    }
}

export const actions = {
    changeMinPrice: (minPrice) => ({type: 'BS/FILTER/CHANGE_MIN_PRICE', minPrice}),
    changeMaxPrice: (maxPrice) => ({type: 'BS/FILTER/CHANGE_MAX_PRICE', maxPrice}),
}

export default FilterReducer