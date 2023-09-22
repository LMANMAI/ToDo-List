import styled from "@emotion/styled";
interface IForm {
  position?: any;
}
export const FormularioContainer = styled.form<IForm>`
  width: 100%;
  min-height: 660px;
  border-radius: 50px;

  padding: 1rem;
  background-color: #ffffff;
  transform: ${(props) => props.position};
  display: flex;
  flex-direction: column;
  margin: 1rem;
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
  background-color: #0461cf;
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
  border: 2px solid #0461cf;
  width: 130px;
  height: 41px;
  font-weight: 600;
  font-size: 0.8rem;
  color: #0461cf;
  text-align: center;
  &:hover {
    color: white;
  }
`;
export const Authwraper = styled.div`
  box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
  .image_form {
    display: none;
    width: calc(80vw - 400px);
    background-color: red;
  }

  @media (min-width: 768px) {
    .image_form {
      display: block;
    }
  }
`;
