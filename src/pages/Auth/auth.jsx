import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import Login from "./login";
import Register from "./register";
import "./auth.css"; // Import CSS for animations

const Auth = () => {
  const [showLogin, setShowLogin] = useState(true);

  const togglePage = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      <CSSTransition
        in={showLogin}
        timeout={300}
        classNames="slide-left"
        unmountOnExit
      >
        <div className="grid grid-cols-2 absolute inset-0 bg-quaternary">
          <Login togglePage={togglePage} />
          <div className="w-full h-full bg-black flex">
            <video autoPlay loop muted className="">
              <source src="./sma-potrait.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </CSSTransition>
      <CSSTransition
        in={!showLogin}
        timeout={300}
        classNames="slide-right"
        unmountOnExit
      >
        <div className="grid grid-cols-2 absolute inset-0 bg-quaternary">
          <div className="w-full h-full bg-black flex justify-end">
            <video autoPlay loop muted className="">
              <source src="./sma-potrait.mp4" type="video/mp4" />
            </video>
          </div>
          <Register togglePage={togglePage} />
        </div>
      </CSSTransition>
    </div>
  );
};

export default Auth;
