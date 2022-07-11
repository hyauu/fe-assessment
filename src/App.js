// flow
import * as React from "react";
import { getRetailInfo } from "./network/retailService.js";
import { useDispatch } from "react-redux";
import { setState } from "./stores/slices/RetailSlice.js";
import type { RetailState } from "./types/reatail.js";
import Col from "react-bootstrap/Col";
import Header from "./components/header/Header.react.js";
import LeftBar from "./components/leftBar/LeftBar.react.js";

function App(): React.Node {
  const dispatch = useDispatch();
  const data: RetailState = getRetailInfo();
  dispatch(setState(data));

  return (
    <div className="container-fluid">
      <div className="row">
        <Header />
      </div>
      <br />
      <div className="row">
        <Col sm={2}>
          <LeftBar />
        </Col>
        {/* <Col sm={10}>2 of 3</Col> */}
      </div>
    </div>
  );
}

export default App;
