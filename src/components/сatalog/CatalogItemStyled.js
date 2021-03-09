import styled from "styled-components";

export const CatalogItemStyled = styled.div`
  display: inline-flex;
  flex-direction: column;
  position: relative;
  border: 1px solid #E6E6E6;
  box-sizing: border-box;
  border-radius: 4px;
  height: 400px;
`

export const ImgStyled = styled.image`
  position: relative;
  border-radius: 4px 4px 0 0;
  background: #E5E5E5;
  width: 100%;
  padding-top: 100%;
`

export const NameStyled = styled.div`
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

export const PriceStyled = styled.div`
  position: relative;
  width: 75px;
  height: 22px;
  top: 51px;
  left: 16px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 140%;
`

export const ButtonStyled = styled.div`
  position: relative;
  width: 106px;
  height: 40px;
  top: 60px;
  left: 16px;
`