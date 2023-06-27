import React from "react";
import HOCComponentForLogin from "./HOCComponentForLogin";

const LogingFormComponent = ({ name, email, password, submitHandler }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "400px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form
        onSubmit={submitHandler}
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-around",
        }}
      >
        <div style={{ display: "flex" }}>
          <label>name: </label>
          <input name={"name"} ref={name} />
        </div>
        <div style={{ display: "flex" }}>
          <label>email: </label>
          <input name={"email"} ref={email} />
        </div>
        <div style={{ display: "flex" }}>
          <label>password: </label>
          <input name={"password"} ref={password} />
        </div>
        <div>
          <button type={"submit"}>Login</button>
        </div>
      </form>
    </div>
  );
};

export default HOCComponentForLogin(LogingFormComponent);
