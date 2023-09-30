import styled from "@emotion/styled";
interface IBackground {
  bg_position?: boolean;
}
export const FormTaskContainer = styled.div`
  padding: 0.5rem 0px;
  display: flex;
  flex-direction: column;
  .form_task_container {
    display: flex;
    align-items: center;
    gap: 10px;
    flex-direction: column;
  }
  .input__container {
    position: relative;
    padding: 10px 5px;
    flex-grow: 0.7;
  }
  .form__label {
    position: absolute;
    top: 2px;
    left: 15px;
    background-color: white;
    font-size: 14px;
  }

  .content {
    width: 100%;
    #form__select {
      padding: 10px;
      outline: none;
      border-radius: 0px;
    }
    #form__select option {
      background-color: #fff;
      color: #333;
      border-radius: 0px;
      padding: 5px 0px;
    }
  }
  @media (min-width: 640px) {
    .form_task_container {
      flex-direction: row;
    }
    .content {
      width: inherit;
    }
  }

  .error_status {
    input {
      border-color: #e74c3c;
    }
    label {
      color: #e74c3c;
    }
  }
`;

export const Input = styled.input`
  padding: 10px;
  outline: none;
  width: 100%;
  border-radius: 5px;
  border: 1px solid;
`;
export const ButtonContainer = styled.div`
  button {
    padding: 10px;
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 5px;
    background-color: #ff7f00;
    color: white;
    &:hover {
      background-color: #d16800;
    }
  }
`;
export const Description = styled.div`
  padding: 1rem;
  margin: 0.2rem 0;
  color: #333;
  border-radius: 5px;
  .description {
    h4 {
      margin: 5px 0px;
    }
    p {
      font-size: 13px;
      padding-left: 15px;
    }
  }
`;

export const ListadoTareas = styled.div`
  width: 100%;
  padding: 0.2rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
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

  .listadotareas__column {
    width: 85%;
    height: fit-content;
    margin: 0px auto;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px 15px;
    h3 {
      text-align: center;
      color: #333;
      padding: 20px 0px;
    }
    .list_container {
      padding: 0.5rem;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 15px 0px;
      padding-bottom: 1rem;
    }
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 15px;
    .listadotareas__column {
      ul {
        flex-direction: row;
        height: fit-content;
        gap: 0px 15px;
        overflow-x: auto;
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
    }
  }
`;
export const BackgroundUI = styled.div<IBackground>`
  position: fixed;
  top: 0px;
  left: 0px;
  background: rgba(0, 0, 0, 0.75);
  width: 100vw;
  height: 100vh;
  z-index: 1;
  transition: all 350ms ease-in-out;
  display: ${(props) => (props.bg_position ? "block" : "none")};
`;
interface ITask {
  isHighlighted?: string;
}
export const Tarea = styled.li<ITask>`
  padding: 0.8rem;
  border-radius: 0px 0px 5px 5px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.24);
  height: fit-content;
  width: 100%;
  min-width: 250px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  position: relative;
  cursor: pointer;
  position: relative;
  transition: all 250ms ease-in-out;
  border-top: 5px solid #ff7f00;
  textarea {
    resize: none;
    width: 100%;
    outline: none;
    border: none;
    cursor: pointer;
    background: #fff;
  }
  &.highlighted {
    z-index: 2;
  }
  button {
    padding: 5px 7px;
    position: absolute;
    right: 10px;
    display: none;
    cursor: pointer;
    border: none;
    color: white;
    background: #ff7f00;
  }

  &:hover {
    background: #efefef;
    .button__options {
      display: ${(props) =>
        props.isHighlighted && props.isHighlighted?.length > 0
          ? "none"
          : "block"};
    }
  }
  p {
    overflow-y: auto;
    padding: 5px;
    word-wrap: break-word;
  }

  .button__edit {
    position: absolute;
    bottom: -35px;
    z-index: 3;
    background-color: white;
    border: none;
    left: 0px;
    width: fit-content;
    display: block;
    color: white;
    background: #ff7f00;
    border-radius: 5px;
  }
  .edit__submenu {
    position: absolute;
    right: -160px;
    top: -25px;
    list-style: none;
    transition-delay: 750ms;
    transition: transform 450ms ease;
    transform: translateX(
      ${(props) =>
        props.isHighlighted && props.isHighlighted?.length > 0
          ? "0px"
          : "-15px"}
    );
    li {
      background: rgb(0 0 0 / 35%);
      padding: 5px;
      color: #ccc;
      margin: 2.5px 0px;
      border-radius: 5px;
      &:hover {
        transform: translateX(5px);
        color: #fff;
      }
    }
  }
  #textarea {
    font-family: inherit;
    background: transparent;
  }
`;
export const ButtonStateContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    padding-top: 5px;
  }
`;

export const ButtonState = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  margin: 2.5px 0;
  margin: 0 4px;
  padding: 8px;
  border-radius: 25px;
  color: white;
  background-color: #4b72a8;
  align-self: center;
`;
export const ButtonPending = styled(ButtonState)`
  background-color: transparent;
  border: 2px solid #4b72a8;
  color: #4b72a8;
  font-weight: bold;
`;
