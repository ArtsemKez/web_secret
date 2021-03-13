import styled from "styled-components";
import React from "react";

export const CatalogItemStyle = styled.div`
  position: relative;
  width: 242px;
  height: 401px;
  border: 1px solid #E6E6E6;
  box-sizing: border-box;
  border-radius: 4px;
  margin-right: 20px;
  margin-bottom: 20px;
  
  @media(max-width: 768px){
    min-width: 100%;
    height: 164px;
    width: 100%;
    margin-right: 0;
    margin-bottom: 0;
    justify-content: center;
}
`

export const ImageStyle = styled.div`
  position: relative;
  border-radius: 4px 4px 0 0;
  width: 242px;
  height: 242px;
  @media(max-width: 768px){
    width: 124px;
    height: 124px;
    position: absolute;
    left: 20px;
    top: 20px;
  }
`

export const TitleStyle = styled.div`
  position: relative;
  width: 202px;
  height: 40px;
  top: 12px;
  left: 16px;
  
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;

  @media(max-width: 768px){
    left: 160px;
    width: calc(50%);
  }
`

export const PriceStyle = styled.div`
  position: relative;
  width: 75px;
  height: 25px;
  top: 22px;
  left: 16px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 140%;

  @media(max-width: 768px){
    left: 160px;
    right: 0;
  }
`

export const IsNewStyle = styled.div`
  position: relative;
  width: 37px;
  height: 15px;
  left: 189px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  line-height: 140%;
  text-align: right;

  @media(max-width: 768px){
    left: calc(160px + 150px);
  }
`

export const ButtonStyle = styled.div`
  position: relative;
  width: 106px;
  height: 40px;
  top: 30px;
  left: 16px;

  @media(max-width: 768px){
    left: 160px;
  }
`