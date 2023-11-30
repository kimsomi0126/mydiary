import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";

const Index = () => {
  return (
    <>
      <Header>Index</Header>
      <Main>
        <h2 style={{ textAlign: "center", color: "red" }}>웹서비스 첫 화면</h2>
      </Main>
      <Footer>Index footer</Footer>
    </>
  );
};

export default Index;
