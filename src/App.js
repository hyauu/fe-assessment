// @flow
import * as React from "react";
import { getRetailInfo } from "./network/retailService.js";
import type RetailState from "./types/retail.js";

function App(): React.Node {
  const data: RetailState = getRetailInfo();
  console.log(data);
  return (
    <div className="App">
      <header className="App-header">{data.title}</header>
    </div>
  );
}

export default App;
