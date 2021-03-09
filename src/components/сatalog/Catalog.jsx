import React, {useEffect} from 'react'
import styled from "styled-components";
import {CatalogItem} from "./CatalogItem";
import {useDispatch, useSelector} from "react-redux";
import {getItems} from "../redux/catalog-selectors";
import {requestCatalog} from "../redux/catalog-reducer";
import {Col, Row} from "antd";

const CardStyled = styled.div`
  display: grid;
  position: relative; 
`

export const CatalogPage = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(requestCatalog())
    })

    const products = useSelector(getItems)
    return (
        <>
            <CardStyled>
                <Row gutter={[0, 0]}>
                    {products.map((i) => (
                        <Col span={6}>
                            <CatalogItem
                                item={i}
                            />
                        </Col>
                    ))}
                </Row>
            </CardStyled>
        </>
    )
}