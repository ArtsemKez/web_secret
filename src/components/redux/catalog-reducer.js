let initialState = {
    items: [
        {
            id: 1,
            img: 'https://imgproxy.by.dev.family/fsS0b59DgGh9X4x4XraAqkcph5TAe3DSO-OLfcgi9LI/w:740/h:740/czM6Ly9nZXRsZW5zLzIyL0RTNGx4bE9XcVRrLmpwZw.webp',
            name: 'Camera',
            price: 10000,
            new: true,
        }
    ]
}
export const CatalogReducer = (state = initialState, actions) => {
    switch (actions.type) {

        default:
            return state;
    }
}

export const actions = {

}

export default CatalogReducer