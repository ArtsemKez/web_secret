import Axios from "axios"

export const instance = Axios.create({
    baseURL: `https://getlens-master.stage.dev.family/api/pages/kamery`,
    withCredentials: true
})

export const catalogAPI = {
    getCatalog() {
        return instance.get(

        )
    }
}

