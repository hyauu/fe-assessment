// @flow
import * as React from "react";
import { getRetailInfo } from "./network/retailService.js";
import { useDispatch } from "react-redux";
import { setState } from "./stores/slices/RetailSlice.js";
import type { RetailState } from "./types/reatail.js";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Header from "./component/header/Header.js";

function App(): React.Node {
  const dispatch = useDispatch();
  const data: RetailState = getRetailInfo();
  dispatch(setState(data));

  return (
    <div className="container-fluid">
      <Row>
        <Header />
      </Row>
      <Row>
        <Col sm={4}>{data.title}</Col>
        <Col sm={8}>2 of 3</Col>
      </Row>
    </div>
  );
}

export default App;
