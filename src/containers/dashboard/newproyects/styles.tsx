import styled from "@emotion/styled";
interface INewProyect {
  transform?: any;
}
interface IText {
  maxLength?: any;
  type?: any;
}
export const NewProyectContainer = styled.div<INewProyect>`
  height: 100%;
  width: 100%;
  .formt__task_title {
    padding: 10px 15px;
    margin: 0px 10px;
    background: #3e7ec3;
    color: white;
    letter-spacing: 1.02px;
  }

  .newproyect__form {
    padding: 15px;
    display: flex;
    gap: 15px;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    max-width: 1000px;
  }
  .newproyect__label {
    position: absolute;
    top: -6px;
    font-size: 14px;
    background: white;
    left: 15px;
    padding: 0px 5px;
  }
  .newproyect__btn {
    max-width: 300px;
  }

  .input__container {
    position: relative;
    margin-top: 20px;
    padding: 0px !important;
  }
  .newproyect__input,
  .newproyect__textarea {
    outline: none;
  }

  .newproyect__btn_container {
    display: flex;
    gap: 10px;
    justify-content: end;
    .newproyect__btn {
      padding: 10px 15px;
      border: none;
      outline: none;
      cursor: pointer;
      border-radius: 5px;
      transition: all 250ms ease-in-out;

      &:disabled {
        background-color: #ccc;
        color: #999;
        cursor: not-allowed;
        border: none;
        &:hover {
          background-color: #ccc;
          color: #999;
          cursor: not-allowed;
          border: none;
        }
      }
    }
    .submit {
      background-color: #3e7ec3;
      color: white;
      &:hover {
        background-color: #27527f;
      }
    }
    .desc {
      color: #3e7ec3;
      border: 2px solid #3e7ec3;
      background: transparent;
      &:hover {
        border: 2px solid #27527f;
        background-color: #27527f;
        color: white;
      }
    }
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
export const Input = styled.input`
  width: 100%;
  padding: 15px;
`;

export const Text = styled.textarea<IText>`
  resize: none;
  width: 100%;
  height: 150px;
  padding: 15px;

  &:focus + label {
    font-weight: bold;
  }
`;
export const ErrorMessage = styled.p``;
export const Submit = styled.input`
  background-color: #f02d7b;
  color: white;
  width: 80%;
  align-self: center;
`;
