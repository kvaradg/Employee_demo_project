import React, { useState, useEffect, useRef } from "react";
import "./Passcode.css";

function Passcode({
  userData,
  setIsLoggedIn,
  isLoggedIn,
}) {
  const [result, setResult] = useState("");
  const inputRef = useRef("");

  useEffect(() => {
    inputRef.current.focus();
  },[]) 

  function handleClick(e) {
    setResult(result.concat(e.target.name));
  }
  function backspace() {
    setResult(result.slice(0, -1));
  }
  const handleSubmit = () => {
    if (userData.passcode == result) {
      alert("Logged In");
      setResult("");
      setIsLoggedIn(true);
    } else {
      alert("wrong passcode");
    }
  };

  const handleCheckIn = () => {
    if (isLoggedIn) {
      setResult("");
  }
    else{
      alert("Please login");
    }
  };

  const handleCheckOut = () => {
    if (isLoggedIn) {
      setResult("");
    }
    else{
      alert("Please login");
    }
  };

  return (
    <div className="emp-app">
      <h3>Enter Passcode:</h3>
      <div className="container">
        <input type="password" value={result} ref={inputRef} />
        <button className="backspace" onClick={backspace}>
        <i class="fas fa-backspace"></i>
        </button>
      </div>
        
      <div className="keypad">
        <button name="1" onClick={handleClick}>
          1
        </button>
        <button name="2" onClick={handleClick}>
          2
        </button>
        <button name="3" onClick={handleClick}>
          3
        </button>
        <button name="4" onClick={handleClick}>
          4
        </button>
        <button name="5" onClick={handleClick}>
          5
        </button>
        <button name="6" onClick={handleClick}>
          6
        </button>

        <button name="7" onClick={handleClick}>
          7
        </button>
        <button name="8" onClick={handleClick}>
          8
        </button>
        <button name="9" onClick={handleClick}>
          9
        </button>
        <button className="orange" onClick={handleClick}>
  
        </button>
        <button name="0" onClick={handleClick}>
          0
        </button>
        <button className="green" onClick={handleSubmit}>
          <i class="far fa-check-circle"></i>
        </button>
      </div>
      <button className="checkin" onClick={handleCheckIn}>
        Checkin
      </button>
      <button className="checkout" onClick={handleCheckOut}>
        Checkout
      </button>
    </div>
  );
}

export default Passcode;
