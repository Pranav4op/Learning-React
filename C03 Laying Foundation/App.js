import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <header className="header">
      <div className="left">
        <img
          src="SRC Image "
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
        <img src="SRC img User" alt="User Icon" />
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
