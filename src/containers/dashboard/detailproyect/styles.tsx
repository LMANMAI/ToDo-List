import styled from "@emotion/styled";

interface IFormconfigmenu {
  openmenu?: boolean;
}
export const Tarea = styled.li`
  padding: 0.8rem;
  height: 200px;
  border-radius: 25px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.24);
  display: grid;
  grid-template-rows: 2fr 1fr;
  p {
    overflow-y: auto;
    padding: 5px;
  }
  @media (min-width: 768px) {
    grid-template-rows: 2fr 30px;
    height: 25vh;
    background-color: #f2f2f2;
  }
`;
export const ButtonStateContainer = styled.div`
  display: flex;
  flex-direction: column;
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
export const FormTaskContainer = styled.div`
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  .form__task {
    .form__task_header {
      display: flex;
      align-items: center;
    }
    .formt__task_title {
      flex-grow: 1;
      padding: 10px 15px;
      margin: 0px 10px;
      background: #3e7ec3;
      color: white;
      letter-spacing: 1.02px;
      position: relative;
      width: 210px;
      .edit__mode_button {
        display: none;
        position: absolute;
        z-index: 3;
        bottom: -20px;
        left: 15px;
        padding: 2px 5px;
        border: none;
        cursor: pointer;
        outline: none;
        background: #ff7f00;
        color: white;
        border-radius: 2px;
        transition: all 250ms ease-in-out;
        &:hover {
          background: #d16800;
        }
      }
      .form__input {
        width: 210px;
        max-width: 480px;
      }
      .btn_edit {
        display: block;
      }
    }

    @media (min-width: 640px) {
      .formt__task_title {
        width: 100%;
        .form__input {
          width: 100%;
        }
      }
    }
    .form__task_btn {
      outline: none;
      border: none;
      background-color: #3e7ec3;
      color: white;
      padding: 11.5px 10px;
      cursor: pointer;
      font-size: 15px;
      &:hover {
        background-color: #27527f;
      }
    }
    .options {
      color: #3e7ec3;
      border: 2px solid #3e7ec3;
      background: transparent;
      font-weigth: bold;
      &:hover {
        border: 2px solid #27527f;
        background-color: #27527f;
        color: white;
      }
    }
    .picked {
      background: #27527f;
      border: 2px solid #27527f;
      color: white;
      border-radius: 5px 5px 0px 0px;
      z-index: 3;
    }
  }

  .form__task_btn,
  .formt__task_title {
    border-radius: 5px;
  }
  @media (min-width: 768px) {
    flex-direction: column;
  }

  .form__input {
    background: transparent;
    border: none;
    outline: none;
    color: white;
    font-size: 20px;
    padding: 0px 10px;
    position: relative;
  }
  .edit__mode {
    z-index: 3;
    background: white;
    color: #333;
  }

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
export const FormConfigMenu = styled.ul<IFormconfigmenu>`
  position: absolute;
  right: 0px;
  top: 30px;
  min-width: 200px;
  font-size: 13px;
  background: #27527f;
  color: white;
  transition: all 250ms ease;
  border-radius: 5px 0 5px 5px;
  overflow: hidden;
  padding-top: 5px;
  z-index: 2;
  display: ${(props) => (props.openmenu ? "block" : "none")};
  li {
    padding: 7px 10px;
    cursor: pointer;
    &:hover {
      background: #3e7ec3;
    }
  }
`;

export const SkeletonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 90vw;
  padding: 25px;
  .skeleton-box {
    width: 100%;
    height: 20px;
    background-color: #f0f0f0;
    margin-bottom: 10px;
    animation: loading 1.5s infinite;
  }
  .header {
    height: 40px;
  }
  .form {
    display: flex;
    align-items: center;
    gap: 15px;
    background: white;
    height: 50px;
    .skeleton-box {
      height: 40px;
    }
  }
  .list {
    height: 300px;
  }
  @keyframes loading {
    0% {
      opacity: 0.6;
    }
    50% {
      opacity: 0.8;
    }
    100% {
      opacity: 0.6;
    }
  }
`;
