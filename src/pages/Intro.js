import { Link } from "react-router-dom";
import Main from "../components/Main";

const Intro = () => {
  return (
    <Main>
      <h1>인트로</h1>
      <h2>
        <Link to="/home">첫화면</Link> <br />
        <Link to="/diary">다이어리 메인</Link>
        <br />
        <Link to="/diary/add">다이어리추가</Link>
        <br />
        <Link to="/diary/edit/1">다이어리수정</Link>
      </h2>
    </Main>
  );
};

export default Intro;
