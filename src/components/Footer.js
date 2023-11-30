import React from "react";
import { FooterWrap } from "../styles/footer";
import { Link } from "react-router-dom";

const Footer = ({ children }) => {
  return (
    <FooterWrap>
      <Link to="/home">
        <img src={process.env.PUBLIC_URL + "/images/bt_ft.svg"} />
      </Link>
      <span>{children}</span>
      <button>
        <img src={process.env.PUBLIC_URL + "/images/bt_add.svg"} />
      </button>
    </FooterWrap>
  );
};

export default Footer;
