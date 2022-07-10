// @flow
import * as React from "react";
import { getRetailInfo } from "./network/retailService.js";
import { useSelector, useDispatch } from "react-redux";
import { setState } from "./stores/slices/RetailSlice.js";
import type RetailState from "./types/retail.js";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function App(): React.Node {
  const dispatch = useDispatch();
  const data: RetailState = getRetailInfo();
  dispatch(setState(data));
  const temp = useSelector((state) => state.retail);
  console.log(temp);
  return (
    <div className="container-fluid">
      <Row>
        <div className="d-inline p-2 bg-dark text-white">
          <p className="fs-1 fw-bold">StackLine Assessment</p>
        </div>
      </Row>
      <Row>
        <Col sm={4}>{data.title}</Col>
        <Col sm={8}>2 of 3</Col>
      </Row>
    </div>
  );
}

export default App;
