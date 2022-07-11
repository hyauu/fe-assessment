// flow
import * as React from "react";
import { useSelector } from "react-redux";
const stylex = {
  contianer: {
    height: "100vh",
  },
  img: {
    height: "20vh",
    weight: "20vw",
  },
  tag: {
    margin: "1px 2px",
    minWidth: "0",
  },
  title: {
    textAlign: "center",
  },
};

export default function LeftBar(): React.Node {
  const imgURL: string = useSelector((state) => state.retail.image);
  const title: string = useSelector((state) => state.retail.title);
  const details = useSelector((state) => state.retail.details);
  const tags = useSelector((state) => state.retail.tags).map((tag, idx) => {
    return (
      <span className="p-2 shadow-sm" key={idx} style={stylex.tag}>
        {tag}
      </span>
    );
  });
  return (
    <div
      className="d-flex shadow flex-column justify-content-start align-items-center"
      style={stylex.contianer}
    >
      <div className="p-2">
        <img src={imgURL} alt="product" style={stylex.img} />
      </div>
      <div className="p-2">
        <h4 style={stylex.title}>{title}</h4>
        {details}
        <hr />
      </div>
      <div className="p-2 d-flex flex-wrap flex-row">{tags}</div>
    </div>
  );
}
