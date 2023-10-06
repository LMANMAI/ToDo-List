import styled from "@emotion/styled";

export const ProyectListContainer = styled.div`
  width: 95%;
  margin: 0 auto;
  justify-content: center;
  display: flex;
  z-index: 3;
  @media (min-width: 768px) {
    padding: 0.5rem;
    width: 95%;
    overflow-y: auto;
    height: 90%;
    padding: 0.5rem;
    &::-webkit-scrollbar {
      -webkit-appearance: none;
    }
    &::-webkit-scrollbar:vertical {
      width: 10px;
    }
    &::-webkit-scrollbar:horizontal {
      height: 10px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #797979;
      border-radius: 20px;
      border: 2px solid #f1f2f3;
    }
    &::-webkit-scrollbar-track {
      border-radius: 10px;
    }
  }
`;
export const ButtonClose = styled.button`
  background-color: #f02d7b;
  border: none;
  outline: none;
  width: 50px;
  height: 50px;
  border-radius: 35px;
  cursor: pointer;
  margin: 0.5rem;
  svg {
    color: white;
  }
`;
export const LisContainer = styled.ul`
  width: 95%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 45px;
  @media (min-width: 768px) {
    margin: 0 auto;
    width: 95%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-auto-rows: 130px;
    li {
      display: flex;
      justify-content: center;
      max-width: 400px;
    }
  }
`;

export const ProyectObject = styled.li`
  a {
    cursor: pointer;
    outline: none;
    background-color: #c3833e;
    width: 100%;
    border: none;
    height: 80px;
    margin: 5px 0;
    border-radius: 5px;
    color: white;
    padding: 10px 15px;
    box-shadow: 4px 9px 14px -7px rgba(0, 0, 0, 0.75);
    display: flex;
    flex-wrap: wrap;
    transition: all 250ms ease-in-out;
    &:hover {
      transform: scale(1.01);
      box-shadow: 4px 9px 34px -7px rgba(0, 0, 0, 0.75);
    }
  }
  @media (min-width: 768px) {
    display: flex;
    a {
      min-width: 250px;
      width: 100%;
      height: 120px;
    }
  }
  .proyect__item {
    display: flex;
    flex-direction: column;
  }
  &:hover {
    background: none;
  }
`;
