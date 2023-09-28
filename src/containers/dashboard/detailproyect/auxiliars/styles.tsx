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
  /* border: 1px solid blue; */
  width: 100%;
  height: 90%;
  padding: 0.2rem;
  overflow-y: auto;
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
  ul {
    padding: 0.5rem;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    grid-gap: 0.7rem 0.5rem;
    padding-bottom: 1rem;
    @media (min-width: 768px) {
      padding: 1rem;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      grid-gap: 1.4rem;
    }
  }
`;
