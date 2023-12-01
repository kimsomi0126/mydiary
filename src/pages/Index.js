import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";
import { Link, useNavigate } from "react-router-dom";

const Index = () => {
  // Link 태그 아닌 방식으로 path 전달 및 이동
  const navigate = useNavigate();
  // 기능을 정의하겠다.
  const handleClickMenu = () => {
    // 이전 path 로 가기
    navigate("/home");
  };
  return (
    <>
      <Header handleClickMenu={handleClickMenu} icon="bt_home.svg">
        Index
      </Header>
      <Main>
        <h2 style={{ textAlign: "center", color: "red" }}>웹서비스 첫 화면</h2>
        <Link to="/diary">다이어리가기</Link>
      </Main>
      <Footer>Index footer</Footer>
    </>
  );
};

export default Index;
