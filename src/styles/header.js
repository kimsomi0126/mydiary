import styled from "@emotion/styled";

const TopBar = styled.header`
  width: 100%;
  height: 64px;
  display: flex;
  gap: 6px;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
  padding: 8px 4px;
  background: #f0edf1;

  button {
    width: 48px;
    height: 48px;
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    flex-direction: column;
    border: 0;
    cursor: pointer;
  }

  h2 {
    font-size: 2.2rem;
    font-weight: 400;
  }
`;
export { TopBar };
