import styled from "@emotion/styled";

export const EndProyectsContainer = styled.div`
  padding: 1rem 0.5rem;
  height: 100%;
  z-index: 1;
  position: relative;
  .modal__finishedproyects {
    height: 200px;
    width: 350px;
    background-color: #fff;
    .button__finishedcontainerbuttons {
      position: relative;
      bottom: -60px;
      button {
        cursor: pointer;
        margin: 0px 5px;
        padding: 5px;
        border: none;
        outline: none;
        border-radius: 5px;
        transition: all 250ms ease;
      }
      .cancelbutton {
        color: #3e7ec3;
        background: transparent;
        border: 0.5px solid;
        font-weight: bold;
        &: hover {
          color: white;
          background: #27527f;
        }
      }
      .actionbutton {
        color: white;
        background: #3e7ec3;
        &:hover {
          background: #27527f;
        }
      }
    }
  }
  .hightlight {
    position: absolute;
    z-index: 2 !important;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    border-radius: 5px;
    padding: 10px;
    text-align: center;
    font-size: 14px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    opacity: 1;
    display: flex;
  }
  .hidden {
    opacity: 0;
    display: none;
  }
`;
export const List = styled.ul`
  min-height: 50vh;
  padding: 5px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-gap: 0.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 1rem;
  }
`;

export const Item = styled.li`
  background-color: #757575;
  padding: 1rem;
  border-radius: 5px;
  color: white;
  height: 150px;
  position: relative;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.14),
    0px 1px 10px 0px rgba(0, 0, 0, 0.12), 0px 2px 4px -1px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;
  @media (min-width: 768px) {
    height: 150px;
  }
  &:hover {
    transform: scale(1.015);
    box-shadow: 0px 20px 25px -5px rgba(0, 0, 0, 0.1),
      0px 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
`;
export const EliminarButton = styled.button`
  background-color: #f2f2f2;
  border: none;
  outline: none;
  padding: 5px;
  margin: 5px 0;
  border-radius: 5px;
  cursor: pointer;
  position: absolute;
  bottom: 5px;
  right: 5px;
  color: white;
  background: #33333394;
`;
