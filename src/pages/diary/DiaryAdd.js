import React from "react";
import Header from "../../components/Header";
import Main from "../../components/Main";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";

const DiaryAdd = () => {
  const navigate = useNavigate();
  const handleClickMenu = () => {
    navigate(-1);
  };
  return (
    <>
      <Header handleClickMenu={handleClickMenu} icon="bt_back.svg">
        Diary 추가
      </Header>
      <Main>
        <h2 style={{ textAlign: "center" }}>다이어리 추가화면</h2>
      </Main>
      <Footer>DiaryAdd footer</Footer>
    </>
  );
};

export default DiaryAdd;
