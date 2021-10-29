import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #fefefe;
`;
export const PanelContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
`;

export const ButtonContainer = styled.div`
  z-index: 2;
  margin: 0 auto;
`;
export const ContentRight = styled.div`
  height: 100vh;
  padding: 1rem;
  transition: 0.4s 0.6s ease-in-out;
  transform: ${(props) => props.position};
  visibility: ${(props) => props.visivility};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  @media (min-width: 768px) {
    margin: 0 auto;
  }
`;
export const ContentLeft = styled.div`
  height: 100vh;
  position: absolute;
  top: 0;
  padding: 1rem;
  transition: 0.4s 0.6s ease-in-out;
  transform: ${(props) => props.position};
  visibility: ${(props) => props.visivility};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  @media (min-width: 768px) {
    margin: 0 auto;
  }
`;
