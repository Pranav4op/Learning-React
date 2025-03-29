import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <header className="header">
      <div className="left">
        <img
          src="C:\Users\2301664\OneDrive - Cognizant\Desktop\Full Stack\Namaste React\C02 Igniting\react.png"
          alt="Logo"
        />
      </div>
      <div className="center">
        <input
          className="input"
          type="text"
          placeholder="Search anything you want..."
        />
        <button type="submit">Submit</button>
      </div>
      <div className="right">
        <img src="Namaste React\C02 Igniting\user.png" alt="User Icon" />
      </div>
    </header>
  );
};

const ReactComponent = () => {
  return (
    <div className="title" key="title">
      <Header />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);
