import React, {useEffect} from 'react'
import styled from "styled-components";
import {CatalogItem} from "./CatalogItem";
import {useDispatch, useSelector} from "react-redux";
import {getItems, getMaxPrice, getMinPrice} from "../../redux/catalog-selectors";
import {requestCatalog} from "../../redux/catalog-reducer";

const CatalogPageStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  zoom: 100%;
`

export const CatalogPage = () => {

    const minPrice = useSelector(getMinPrice);
    const maxPrice = useSelector(getMaxPrice);

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(requestCatalog(minPrice, maxPrice))
    },[minPrice, maxPrice])

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