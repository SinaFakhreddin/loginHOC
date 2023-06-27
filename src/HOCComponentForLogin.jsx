import React, { useRef, useState } from "react";
import { userNames } from "./Api";
import { LogingFormComponent } from "./LogingFormComponent";
import UserPage from "./UserPage";

const HOCComponentForLogin = (Component) => {
  const UpdatedComponent = () => {
    const [loggedInUser, setLoggedInUser] = useState(null);
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const submitHandler = (e) => {
      e.preventDefault();
      const logedIn = userNames.find(
        (userName) =>
          userName.name === nameRef.current.value &&
          userName.email === emailRef.current.value &&
          userName.password === passwordRef.current.value
      );

      setLoggedInUser(logedIn);
    };

    return loggedInUser ? (
      <UserPage userLoggedIn={loggedInUser} />
    ) : (
      <Component
        submitHandler={submitHandler}
        name={nameRef}
        email={emailRef}
        password={passwordRef}
      />
    );
  };

  return UpdatedComponent;
};

export default HOCComponentForLogin;
