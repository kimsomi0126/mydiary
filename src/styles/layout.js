import styled from "@emotion/styled";

const Wrap = styled.div`
  position: relative;
  width: 100%;

  /* M3/Elevation Light/1 */
  box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.1),
    0px 1px 2px 0px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  background: #fff;
  border-radius: 20px;
`;

const Layout = styled.div`
  max-width: 960px;
  min-width: 320px;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  padding: 25px 25px;
`;

const MainWrap = styled.main`
  min-height: 500px;
  padding: 40px;
`;

export { Wrap, Layout, MainWrap };
