import Axios from "axios"

export const instance = Axios.create({
    baseURL: `https://getlens-master.stage.dev.family/api/pages/kamery`,
    withCredentials: true
})

export const catalogAPI = {
    getCatalog(minPrice, maxPrice, CanonCheckbox, NikonCheckbox,
               FujiFilmCheckbox,
               SonyCheckbox,
               OlympusCheckbox,
               PanasonicCheckbox,
               otherCheckbox
    ) {
        return instance.get(`?` + (minPrice === 0 ? '' : `price%5Bmin%5D=${minPrice}`) +
            (maxPrice === 100000 ? '' : `&price%5Bmax%5D=${maxPrice}`) +
            (!CanonCheckbox ? '' : `&brands%5B%5D=1`) +
            (!NikonCheckbox ? '' : `&brands%5B%5D=9`) +
            (!FujiFilmCheckbox ? '' : `&brands%5B%5D=2`) +
            (!SonyCheckbox ? '' : `&brands%5B%5D=7`) +
            (!OlympusCheckbox ? '' : `&brands%5B%5D=3`) +
            (!PanasonicCheckbox ? '' : `&brands%5B%5D=4`) +
            (!otherCheckbox ? '' : `&brands%5B%5D=0`)
        )
    }
}