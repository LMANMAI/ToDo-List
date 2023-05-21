import styled from "@emotion/styled";

export const DashboardContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows: 200px 1fr;
  background-color: #f2f2f2;
  @media (min-width: 768px) {
    grid-template-columns: 250px 1fr;
    grid-template-rows: initial;
  }
`;
