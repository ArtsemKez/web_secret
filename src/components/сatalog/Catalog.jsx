import React from 'react'
import styled from "styled-components";
import {CatalogItem} from "./CatalogItem";

const CatalogStyled = styled.div`
  position: relative;
  left: 50px;
`

export const CatalogPage = () => {
    return(
        <>
            <CatalogStyled>
                <CatalogItem/>
            </CatalogStyled>
        </>
    )
}