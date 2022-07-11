// flow
import * as React from "react";
import stacklineLogo from "../../sources/stackline_logo.svg";

const stylex = {
  img: {
    height: "5vh",
  },
};

export default function Header(): React.Node {
  return (
    <div className="d-inline-block bg-dark">
      <img src={stacklineLogo} alt={"StackLine Logo"} style={stylex.img} />
    </div>
  );
}
