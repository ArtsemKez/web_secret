import React from 'react'
import {ButtonStyle, CatalogItemStyle, ImageStyle, IsNewStyle, PriceStyle, TitleStyle} from "./CatalogItemStyled";
import {Button} from "antd";

export const CatalogItem = ({item}) => {
    return (
        <>
            <CatalogItemStyle>
                <ImageStyle>
                    {/*<Image src={item.image}/>*/}
                </ImageStyle>
                <TitleStyle>
                    {item.title}
                </TitleStyle>
                <PriceStyle>
                    {item.price}₽
                </PriceStyle>
                <IsNewStyle>
                    {item.is_new != false ? 'Новое' : ''}
                </IsNewStyle>
                <ButtonStyle>
                    <Button
                        style={{
                            border: '1px solid #DBDBDB',
                            boxSizing: 'border-box',
                            borderRadius: '8px',
                            fontFamily: 'Montserrat',
                            fontStyle: 'normal',
                            fontWeight: '500',
                            fontSize: '14px',
                            lineHeight: '140%'
                        }}>В корзину</Button>
                </ButtonStyle>
            </CatalogItemStyle>
        </>
    )
}