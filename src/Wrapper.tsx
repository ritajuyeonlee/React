import React from "react";

function Wrapper({ children }) {
  const style = {
    lineHeight: 3,
    padding: 20,
    backgroundColor: "rgba(236,227,244,1)",
  };
  return <div style={style}>{children}</div>;
}

export default Wrapper;
