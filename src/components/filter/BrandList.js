import React from 'react'
import styled from "styled-components"
import Checkbox from "antd/es/checkbox/Checkbox";
import {useDispatch, useSelector} from "react-redux";
import {actions} from "../../redux/catalog-reducer";
import {
    getCanonCheckbox,
    getFujiFilmCheckbox,
    getNikonCheckbox, getOlympusCheckbox,
    getOtherCheckbox, getPanasonicCheckbox,
    getSonyCheckbox
} from "../../redux/catalog-selectors";



export const BrandListStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 224px;
  margin: 0px;
`

export const BrandList = () => {

    const dispatch = useDispatch()

    const CanonCheckbox = useSelector(getCanonCheckbox)
    const NikonCheckbox = useSelector(getNikonCheckbox)
    const FujiFilmCheckbox = useSelector(getFujiFilmCheckbox)
    const SonyCheckbox = useSelector(getSonyCheckbox)
    const OlympusCheckbox = useSelector(getOlympusCheckbox)
    const PanasonicCheckbox = useSelector(getPanasonicCheckbox)
    const otherCheckbox = useSelector(getOtherCheckbox)

    const onChangeCanonCheckbox = (CanonCheckbox) => {
        dispatch(actions.changeCanonCheckbox(CanonCheckbox.target.checked))
    }
    const onChangeNikonCheckbox = (NikonCheckbox) => {
        dispatch(actions.changeNikonCheckbox(NikonCheckbox.target.checked))
    }
    const onChangeFujiFilmCheckbox = (FujiFilmCheckbox) => {
        dispatch(actions.changeFujiFilmCheckbox(FujiFilmCheckbox.target.checked))
    }
    const onChangeSonyCheckbox = (SonyCheckbox) => {
        dispatch(actions.changeSonyCheckbox(SonyCheckbox.target.checked))
    }
    const onChangeOlympusCheckbox = (OlympusCheckbox) => {
        dispatch(actions.changeOlympusCheckbox(OlympusCheckbox.target.checked))
    }
    const onChangePanasonicCheckbox = (PanasonicCheckbox) => {
        dispatch(actions.changePanasonicCheckbox(PanasonicCheckbox.target.checked))
    }
    const onChangeOtherCheckbox = (otherCheckbox) => {
        dispatch(actions.changeOtherCheckbox(otherCheckbox.target.checked))
    }

    return (
        <>
            <BrandListStyled>
                <Checkbox defaultChecked={CanonCheckbox} onChange={onChangeCanonCheckbox}>Canon</Checkbox>
                <Checkbox defaultChecked={NikonCheckbox} onChange={onChangeNikonCheckbox}>Nikon</Checkbox>
                <Checkbox defaultChecked={FujiFilmCheckbox} onChange={onChangeFujiFilmCheckbox}>FujiFilm</Checkbox>
                <Checkbox defaultChecked={SonyCheckbox} onChange={onChangeSonyCheckbox}>Sony</Checkbox>
                <Checkbox defaultChecked={OlympusCheckbox} onChange={onChangeOlympusCheckbox}>Olympus</Checkbox>
                <Checkbox defaultChecked={PanasonicCheckbox} onChange={onChangePanasonicCheckbox}>Panasonic</Checkbox>
                <Checkbox defaultChecked={otherCheckbox} onChange={onChangeOtherCheckbox}>????????????</Checkbox>
            </BrandListStyled>
        </>
    )
}