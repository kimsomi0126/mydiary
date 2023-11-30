import React from "react";
import Header from "../../components/Header";
import Main from "../../components/Main";
import Footer from "../../components/Footer";
import { useParams } from "react-router-dom";

const DiaryEdit = () => {
  const param = useParams();
  console.log(param);
  return (
    <>
      <Header>Diary 수정</Header>
      <Main>
        <h2 style={{ textAlign: "center" }}>
          다이어리 수정화면 {param.pk}번 수정
        </h2>
      </Main>

      <Footer>DiaryEdit footer</Footer>
    </>
  );
};

export default DiaryEdit;
