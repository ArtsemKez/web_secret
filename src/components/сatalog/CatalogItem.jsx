import React from 'react'
import {Button, Image} from "antd";
import {ButtonStyled, CatalogItemStyled, ImgStyled, NameStyled, PriceStyled} from "./CatalogItemStyled";

export const CatalogItem = ({item}) => {
    return (
        <>
            <CatalogItemStyled>
                <ImgStyled>
                    <Image>{item?.image?.desktop?.x1}</Image>
                </ImgStyled>
                <NameStyled>
                    {item.title}
                </NameStyled>
                <PriceStyled>
                    {item.price}₽
                </PriceStyled>
                <ButtonStyled>
                    <Button>В карзину</Button>
                </ButtonStyled>
            </CatalogItemStyled>

        </>
    )
}