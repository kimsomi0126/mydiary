import React from "react";
import { TopBar } from "../styles/header";

const Header = ({ children, handleClickMenu, icon }) => {
  return (
    <TopBar>
      <button
        onClick={() => {
          handleClickMenu();
        }}
      >
        <img
          src={
            process.env.PUBLIC_URL + `/images/${icon ? icon : "bt_list.svg"}`
          }
        />
      </button>
      <h2>{children}</h2>
      <button>
        <img src={process.env.PUBLIC_URL + "/images/bt_login.svg"} />
      </button>
    </TopBar>
  );
};

export default Header;
