import React from "react";
import Header from "../../components/Header";
import Main from "../../components/Main";
import Footer from "../../components/Footer";

const Index = () => {
  return (
    <>
      <Header>Diary</Header>
      <Main>
        <h2 style={{ textAlign: "center" }}>다이어리 첫 화면</h2>
      </Main>
      <Footer>Diary footer</Footer>
    </>
  );
};

export default Index;
