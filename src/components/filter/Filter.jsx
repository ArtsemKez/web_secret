import React, {useEffect} from 'react'
import {
    BrandListStyled,
    FilterStyled,
    PriceTitleStyled,
    QuantityStyled,
    TitleBrandStyled,
    TitleStyled
} from "./FilterStyled"
import {PriceSlider} from "./PriceSlider";
import {useDispatch, useSelector} from "react-redux";
import {BrandList} from "./BrandList";
import {getTotalItems} from "../../redux/catalog-selectors";
import {requestCatalog} from "../../redux/catalog-reducer";

export const Filter = () => {


    const totalItems = useSelector(getTotalItems)

    const dispatch = useDispatch()

    return (
        <>
            <FilterStyled>
                <QuantityStyled>Товаров {totalItems}</QuantityStyled>
                <TitleStyled>Камеры</TitleStyled>
                <PriceTitleStyled>Цена, ₽</PriceTitleStyled>
                <PriceSlider/>
                <TitleBrandStyled>Бренд</TitleBrandStyled>
                <BrandListStyled><BrandList/></BrandListStyled>
            </FilterStyled>
        </>
    )
}