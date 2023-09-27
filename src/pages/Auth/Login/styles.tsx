import styled from "@emotion/styled";
interface IForm {
  position?: any;
}
export const FormularioContainer = styled.form<IForm>`
  width: 100%;
  min-height: 660px;
  justify-content: space-between;
  align-items: self-start;
  border-radius: 50px;
  background-color: #fff;
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
interface IProps {
  isFocused: boolean;
}
export const InputField = styled.div<IProps>`
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
    color: ${({ isFocused }) => (isFocused ? "#0461cf" : "#444")};
    font-size: 1.1rem;
    transition: color 0.3s ease-in-out;
  }

  input {
    background: none;
    outline: none;
    border: none;
    line-height: 1;
    font-weight: 600;
    font-size: 1.1rem;
    color: #333;

    &::placeholder {
      font-weight: 500;
      color: #aaa;
    }

    &:focus,
    &:focus-within {
      ~ svg {
        color: red;
      }
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
  background-color: #3e7ec3;
  &:hover {
    background-color: #054fb9;
  }

  &:disabled {
    background-color: #ccc;
    color: #666;
    cursor: not-allowed;
  }
`;
export const ButtonSec = styled(Button)`
  margin: 0;
  background: none;
  border: 2px solid #3e7ec3;
  width: 130px;
  height: 41px;
  font-weight: 600;
  font-size: 0.8rem;
  color: #3e7ec3;
  text-align: center;
  &:hover {
    color: white;
  }
`;
