import styled from "@emotion/styled";

export const Tarea = styled.li`
  // border: 1px solid green;
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
  }

  .form__task_btn,
  .formt__task_title {
    border-radius: 5px;
  }
  @media (min-width: 768px) {
    flex-direction: column;
  }
`;
