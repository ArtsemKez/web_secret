import { useDispatch, useSelector } from "react-redux";
import { Col, InputNumber, Row, Slider } from "antd";
import { getMaxPrice, getMinPrice } from "../redux/filter-selectors";
import { actions } from "../redux/filter-reducers";
import "antd/dist/antd.css";

export const PriceSlider = () => {
  const dispatch = useDispatch();

  const minPrice = useSelector(state => getMinPrice(state));
  const maxPrice = useSelector(state => getMaxPrice(state));


  const onChangePrice = (price, flag) => dispatch(actions[flag](price));

  const onChangePriceBySlider = ([minPrice, maxPrice]) => {
    dispatch(actions.changeMinPrice(minPrice));
    dispatch(actions.changeMaxPrice(maxPrice));
  }

  return (
      <>
        <Row>
          <Col span={12}>
            <InputNumber
                style={{ width: "100%", top: "15px" }}
                min={0}
                max={200000}
                defaultValue={minPrice || 0}
                value={minPrice}
                onChange={(price) => onChangePrice(price, "changeMinPrice")}
            />
          </Col>
          <Col span={12}>
            <InputNumber
                style={{ width: "100%", top: "15px" }}
                min={0}
                max={200000}
                value={maxPrice}
                defaultValue={maxPrice || 200000}
                onChange={(price) => onChangePrice(price, "changeMaxPrice")}
            />
          </Col>
        </Row>
        <Col>
          <Slider
              style={{ top: "25px", width: "95%", color: "#FF681C" }}
              defaultValue={[0, 200000]}
              onChange={(prices) => onChangePriceBySlider(prices)}
              min={0} max={200000}
              value={[minPrice, maxPrice]}
              range={{ draggableTrack: false }}
          />
        </Col>
      </>
  );
};
