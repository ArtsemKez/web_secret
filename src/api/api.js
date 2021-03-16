import Axios from "axios"

export const instance = Axios.create({
    baseURL: `https://getlens-master.stage.dev.family/api/pages/kamery`,
    withCredentials: true
})

export const catalogAPI = {
    getCatalog(minPrice, maxPrice) {
        return instance.get(`?price%5Bmin%5D=${minPrice}&price%5Bmax%5D=${maxPrice}`)
    }
}