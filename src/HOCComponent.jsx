import React, { useState } from "react";

const HOCComponent = (Component) => {
  console.log("Component", Component);
  const UpdatedComponent = () => {
    const [money, setMoney] = useState(20);
    const increaseHandler = () => {
      setMoney((prevState) => prevState * 2);
    };

    return <Component money={money} increaseMoney={increaseHandler} />;
  };

  return UpdatedComponent;
};

export default HOCComponent;
