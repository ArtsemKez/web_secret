import React, {useEffect} from 'react'
import styled from "styled-components";
import {CatalogItem} from "./CatalogItem";
import {useDispatch, useSelector} from "react-redux";
import {getItems} from "../redux/catalog-selectors";
import {requestCatalog} from "../redux/catalog-reducer";

const CatalogPageStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  zoom: 100%;
`


export const CatalogPage = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(requestCatalog())
    })

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