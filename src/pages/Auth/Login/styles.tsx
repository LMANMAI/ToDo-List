import styled from "@emotion/styled";
interface IForm {
  position?: any;
}
export const FormularioContainer = styled.form<IForm>`
  width: 100%;
  height: fit-content;
  border-radius: 50px;
  background-color: #fff;
  box-shadow: -20px 20px 60px #bebebe, 20px -20px 60px #ffffff;
  padding: 1rem;
  z-index: 1;
  margin: 1rem;
  transform: ${(props) => props.position};
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Content = styled.div`
  h3 {
    font-size: 1.3rem;
  }
  p {
    font-size: 0.7rem;
    padding: 0.5rem 0;
  }
`;

export const Titulo = styled.h2`
  font-size: 2.2rem;
  color: #444;
  margin-bottom: 10px;
`;

export const InputField = styled.div`
  max-width: 380px;
  width: 100%;
  height: 55px;
  background-color: #f0f0f0;
  margin: 10px 0;
  border-radius: 50px;
  display: grid;
  grid-template-columns: 15% 85%;
  padding: 0 0.4rem;
  outline: none;
  overflow: hidden;
  svg {
    justify-self: center;
    align-self: center;
    color: #444;
    font-size: 1.1rem;
  }
  input {
    background: none;
    outline: none;
    border: none;
    line-height: 1;
    font-weight: 600;
    font-size: 1.1rem;
    color: #333;

    &::focus svg {
      background-color: #f02d7b;
    }
    &::placeholder {
      font-weight: 500;
      color: #aaa;
    }
  }
`;

export const Button = styled.input`
  width: 150px;
  height: 50px;
  border-radius: 55px;
  border: none;
  outline: none;
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
  margin: 10px 0;
  transition: 0.5s;
  cursor: pointer;
  background: transparent;
  background-color: #f02d7b;
  &:hover {
    background-color: #cc0f5b;
  }
`;
export const ButtonSec = styled(Button)`
  margin: 0;
  background: none;
  border: 2px solid #f02d7b;
  width: 130px;
  height: 41px;
  font-weight: 600;
  font-size: 0.8rem;
  color: #f02d7b;
  text-align: center;
  &:hover {
    color: white;
  }
`;
