import React, { useState }from 'react'
import 'antd/dist/antd.css';
import {Col, InputNumber, Row, Slider} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {getMaxPrice, getMinPrice} from "../redux/filter-selectors";
import {actions} from "../redux/filter-reducers";




export const PriceSlider = () => {

    const dispatch = useDispatch

    const onChangeMinPrice = (minPrice) => {
        dispatch(actions.changeMinPrice(minPrice))
    }


    const minPrice = useSelector(getMinPrice)
    const maxPrice = useSelector(getMaxPrice)



    return (
        <>


            <Row>
                <Col span={12}>
                    <InputNumber style={{width: '100%', top: '15px'}}
                                 min={0} max={200000} defaultValue={0} value={minPrice}
                                 onChange={onChangeMinPrice}
                    />
                </Col>
                <Col span={12}>
                    <InputNumber style={{width: '100%', top: '15px'}}
                                 min={0} max={200000} defaultValue={200000} value={maxPrice}
                    />
                </Col>
            </Row>
            <Col>
                <Slider
                    style={{top: '25px', width: '95%', color: '#FF681C'}}
                    range={{draggableTrack: true}}
                    min={0} max={200000}
                    value={[minPrice, maxPrice]}
                />
            </Col>
        </>
    )
}