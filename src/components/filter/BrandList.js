import React from 'react'
import styled from "styled-components"
import Checkbox from "antd/es/checkbox/Checkbox";
import Row from "antd/es/descriptions/Row";

export const BrandListStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 224px;
  margin: 0px;
`

export const BrandList = () => {
    return (
        <>
            <BrandListStyled>

                    <Checkbox>Canon</Checkbox>
                    <Checkbox>Nikon</Checkbox>
                    <Checkbox>FujiFilm</Checkbox>
                    <Checkbox>Sony</Checkbox>
                    <Checkbox>Olympus</Checkbox>
                    <Checkbox>Panasonic</Checkbox>
                    <Checkbox>Другие</Checkbox>

            </BrandListStyled>
        </>
    )
}