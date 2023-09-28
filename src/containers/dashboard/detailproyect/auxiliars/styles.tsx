import styled from "@emotion/styled";

export const FormTaskContainer = styled.div`
  padding: 0.5rem;
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
`;

export const Input = styled.input`
  padding: 10px;
  outline: none;
  width: 100%;
`;
export const ButtonContainer = styled.div`
  button {
    padding: 10px;
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 5px;
    background-color: #3e7ec3;
    color: white;
    &:hover {
      background-color: #27527f;
    }
  }
`;
export const Description = styled.div`
  padding: 1rem;
  margin: 0.2rem 0;
  background-color: #ccc;
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
  border: 1px solid blue;
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
    border: 1px solid;
    margin: 0px auto;
    ul {
      padding: 0.5rem;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 15px 0px;
      padding-bottom: 1rem;
    }
  }
`;

export const Tarea = styled.li`
  border: 1px solid green;
  padding: 0.8rem;
  border-radius: 5px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.24);
  height: fit-content;
  min-height: 125px;
  width: fit-content;
  p {
    overflow-y: auto;
    padding: 5px;
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
export const ButtonPending = styled(ButtonState)`
  background-color: transparent;
  border: 2px solid #4b72a8;
  color: #4b72a8;
  font-weight: bold;
`;
