import styled from "@emotion/styled";

export const SideBarContainer = styled.div`
  background-color: #f2f2f2;
  width: 100%;
  display: grid;
  grid-template-rows: 70px 70px;
  padding: 1rem;
  color: #4b72a8;
  @media (min-width: 768px) {
    z-index: 1;
    grid-template-rows: 175px 2fr 50px;
  }
`;
export const SideBarDatos = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (min-width: 768px) {
    flex-direction: column;
  }
`;
export const Brand = styled.h2`
  font-weight: 300;
  align-self: center;
  display: flex;
  align-items: center;
  p {
    text-transform: uppercase;
    font-size: 13px;
  }
`;
export const SidebarButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.2rem;
  margin: 0.3rem 0;
  @media (min-width: 768px) {
    transition: all 0.2s ease-in-out;
    flex-direction: column;
  }
`;
export const Button = styled.button`
  margin: 0 0.4rem;
  height: fit-content;
  width: 30%;
  border-radius: 35px;
  font-size: 1.5rem;
  color: #4b72a8;
  background: transparent;
  border: none;
  outline: none;
  padding: 0.5rem;
  p {
    font-size: 10px;
  }
  &:focus {
    background: #f02d7b;
    color: white;
  }

  @media (min-width: 768px) {
    width: 90%;
    display: flex;
    align-items: center;
    margin: 0.5rem 0;
    font-size: 1.8rem;
    cursor: pointer;
    border-radius: 35px;
    padding: 0.5rem;
    outline: none;
    transition: all 0.2s ease-in-out;
    svg {
      margin: 0 0.4rem;
    }
    p {
      font-size: 0.8rem;
    }
    &:hover {
      background: #314f79;
      color: white;
    }
    &:active {
      background: #f02d7b;
    }
  }
`;
export const EndSesionButton = styled.button`
  background-color: #f02d7b;
  border: none;
  outline: none;
  padding: 0.3rem;
  border-radius: 35px;
  color: white;
  cursor: pointer;
`;
