import React, { useState } from "react";
import HOCComponent from "./HOCComponent";

const ShimaComponent = ({ money, increaseMoney }) => {
  return (
    <div>
      <h2>Shima Has ${money}</h2>
      <button onClick={increaseMoney}>Increase Shima's Money</button>
    </div>
  );
};

export default HOCComponent(ShimaComponent);
