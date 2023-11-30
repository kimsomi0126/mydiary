import styled from "@emotion/styled";

const FooterWrap = styled.footer`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
  padding: 0px 16px;
  background: #f0edf1;

  button {
    display: flex;
    align-items: center;
    cursor: pointer;
    justify-content: center;
    padding: 16px;
    border: 0;
    background: #dfe1f9;
    border-radius: 16px;
  }
`;

export { FooterWrap };
