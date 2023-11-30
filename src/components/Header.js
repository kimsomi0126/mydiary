import React from "react";
import { TopBar } from "../styles/header";

const Header = ({ children }) => {
  return (
    <TopBar>
      <button onClick={() => {}}>
        <img src={process.env.PUBLIC_URL + "/images/bt_list.svg"} />
      </button>
      <h2>{children}</h2>
      <button onClick={() => {}}>
        <img src={process.env.PUBLIC_URL + "/images/bt_login.svg"} />
      </button>
    </TopBar>
  );
};

export default Header;
