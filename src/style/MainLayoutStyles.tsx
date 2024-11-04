import styled from "styled-components";

export const MainLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 100px);
  width: 700px;
  background-color: ${({ theme }) => theme.colors.backgroundMain};
  padding: 20px;
  transition: all 0.3s ease;
`;
