import React, {useEffect} from 'react'
import styled from "styled-components";
import {CatalogItem} from "./CatalogItem";
import {useDispatch, useSelector} from "react-redux";
import {getItems} from "../redux/catalog-selectors";
import {requestCatalog} from "../redux/catalog-reducer";
import {Col, Row} from "antd";

const CardStyled = styled.div`
 
  
`

export const CatalogPage = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(requestCatalog())
    })

    const products = useSelector(getItems)
    return (
        <>
            {/*<CardStyled>*/}
                <div>
                    {products.map((i) => (
                        // <Col styles={{marginRight: '20px',   width: '25%!important'}}>
                            <CatalogItem
                                item={i}
                            />
                        // </Col>
                    ))}
                </div>
            {/*</CardStyled>*/}
        </>
    )
}