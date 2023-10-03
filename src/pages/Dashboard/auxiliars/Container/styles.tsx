import styled from "@emotion/styled";

export const ContainerDashboard = styled.main`
  display: flex;
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  & > div {
    width: 100%;
    padding: 10px 15px;
  }
`;

export const Box = styled.div`
  margin: 0 auto;
  background: #fff;
  width: 98%;
  max-height: 100vh;
  border-radius: 50px 50px 0 0;
  overflow-y: scroll;
  overflow-x: hidden;
  @media (min-width: 768px) {
    overflow: hidden;
    justify-content: center;
    align-items: center;
    width: 99%;
    height: 98vh;
    border-radius: 35px;
    padding: 0.3rem;
  }
`;
