import React, {useEffect} from 'react'
import styled from "styled-components";
import {CatalogItem} from "./CatalogItem";
import {useDispatch, useSelector} from "react-redux";
import {
    getCanonCheckbox,
    getFujiFilmCheckbox,
    getItems,
    getMaxPrice,
    getMinPrice,
    getNikonCheckbox, getOlympusCheckbox, getOtherCheckbox, getPanasonicCheckbox, getSonyCheckbox
} from "../../redux/catalog-selectors";
import {requestCatalog} from "../../redux/catalog-reducer";
import {useHistory} from "react-router-dom";

const CatalogPageStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  zoom: 100%;
`

export const CatalogPage = () => {

    const minPrice = useSelector(getMinPrice);
    const maxPrice = useSelector(getMaxPrice);
    const CanonCheckbox = useSelector(getCanonCheckbox); //1
    const NikonCheckbox = useSelector(getNikonCheckbox); //9
    const FujiFilmCheckbox = useSelector(getFujiFilmCheckbox); //2
    const SonyCheckbox = useSelector(getSonyCheckbox); //7
    const OlympusCheckbox = useSelector(getOlympusCheckbox); //3
    const PanasonicCheckbox = useSelector(getPanasonicCheckbox); //4
    const otherCheckbox = useSelector(getOtherCheckbox); //0

    const dispatch = useDispatch()
    const history = useHistory()

    const Url = `?` + (minPrice === 0 ? '' : `price%5Bmin%5D=${minPrice}`) +
        (maxPrice === 100000 ? '' : `&price%5Bmax%5D=${maxPrice}`) +
        (CanonCheckbox === false ? '' : '&brands%5B%5D=1') +
        (NikonCheckbox === false ? '' : '&brands%5B%5D=9') +
        (FujiFilmCheckbox === false ? '' : '&brands%5B%5D=2') +
        (SonyCheckbox === false ? '' : '&brands%5B%5D=7') +
        (OlympusCheckbox === false ? '' : '&brands%5B%5D=3') +
        (PanasonicCheckbox === false ? '' : '&brands%5B%5D=4') +
        (otherCheckbox === false ? '' : '&brands%5B%5D=0')


    useEffect(() => {
        history.push({
            pathname: '/catalog',
            search: Url
        })
    }, [minPrice, maxPrice, CanonCheckbox,
        NikonCheckbox,
        FujiFilmCheckbox,
        SonyCheckbox,
        OlympusCheckbox,
        PanasonicCheckbox,
        otherCheckbox
    ])

    useEffect(() => {
        dispatch(requestCatalog(minPrice, maxPrice, NikonCheckbox,
            FujiFilmCheckbox,
            SonyCheckbox,
            OlympusCheckbox,
            PanasonicCheckbox,
            otherCheckbox))
    }, [minPrice, maxPrice, CanonCheckbox,
        NikonCheckbox,
        FujiFilmCheckbox,
        SonyCheckbox,
        OlympusCheckbox,
        PanasonicCheckbox,
        otherCheckbox])

    const products = useSelector(getItems)
    return (
        <>
            <CatalogPageStyled>
                {products.map((i) => (
                    <CatalogItem
                        item={i}
                    />
                ))}
            </CatalogPageStyled>
        </>
    )
}