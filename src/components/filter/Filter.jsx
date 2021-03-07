import React from 'react'
import {
    BrandListStyled,
    FilterStyled,
    PriceTitleStyled,
    QuantityStyled,
    TitleBrandStyled,
    TitleStyled
} from "./FilterStyled"
import {PriceSlider} from "./PriceSlider";
import {useSelector} from "react-redux";
import {getTotalItems} from "../redux/filter-selectors";
import {BrandList} from "./BrandList";

export const Filter = () => {

    const totalItems = useSelector(getTotalItems)

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