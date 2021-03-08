import React from 'react'
import styled from "styled-components";
import {useSelector} from "react-redux";
import {getImg} from "../redux/catalog-selectors";
import {Button, Image} from "antd";

const CatalogItemStyled = styled.div`
  display: flex;
  flex-direction: column;
  //justify-content: flex-end;
  
  position: relative;
  width: 242px;
  height: 401px;


  border: 1px solid #E6E6E6;
  box-sizing: border-box;
  border-radius: 4px;
`

const ImgStyled = styled.image`
  position: relative;
  width: 242px;
  height: 242px;
  border-radius: 4px 4px 0 0;
  background: #E5E5E5;
`

const NameStyled = styled.div`
  position: relative;
  width: 202px;
  height: 20px;
  bottom: 31px;
  top: 12px;
  left: 16px;

  font-family: Montserrat, serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 140%;
`

const PriceStyled = styled.div`
  position: relative;
  width: 75px;
  height: 22px;
  top: 35px;
  left: 16px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 140%;
`

const ButtonStyled = styled.div`
  position: relative;
  width: 106px;
  height: 40px;
  top: 65px;
  left: 16px;
  //border: 1px solid #DBDBDB;
  //box-sizing: border-box;
  //border-radius: 8px
`


export const CatalogItem = (i) => {

    const img = useSelector(getImg)

    return (
        <>
            <CatalogItemStyled>
                <ImgStyled>
                    <Image>{i.img}</Image>
                </ImgStyled>
                <NameStyled>
                    <p>Camera</p>
                </NameStyled>
                <PriceStyled>
                    Price
                </PriceStyled>
                <ButtonStyled>
                    <Button>В карзину</Button>
                </ButtonStyled>
            </CatalogItemStyled>
        </>
    )
}