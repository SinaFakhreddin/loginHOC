import React, { useRef, useState } from "react";
import HOCComponent from "./HOCComponent";

const SinaComponent = ({ money, increaseMoney }) => {
  return (
    <div>
      <h2>Sina Has ${money}</h2>
      <button onClick={increaseMoney}>increase Sina's Money</button>
    </div>
  );
};

export default HOCComponent(SinaComponent);
