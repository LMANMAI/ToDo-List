import React from "react";
import styled from "styled-components";
import { FaLock, FaUserAlt } from "react-icons/fa";
import './index.scss';

const Container = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-color: #fff;
  overflow: hidden;
  ::before {
    content: "";
    position: absolute;
    width: 2000px;
    height: 2000px;
    border-radius: 50%;
    bottom: 70%;
    left: 50%;
    background: linear-gradient(45deg, #1f7a8c, #125866);
    transform: translateY(-50%);
    z-index: 6;
    transition: 1.8s all ease-in-out;
  }
  @media (max-width: 870px) {
    .container {
      min-height: 800px;
      height: 100vh;
    }
    ::before {
      width: 1500px;
      height: 1500px;
      left: 30%;
      bottom: 68%;
      transform: translateX(-50%);
      right: initial;
      top: initial;
      transition: 2s ease-in-out;
    }
  }
  @media (min-width: 1024px) {
    ::before {
      content: "";
      width: 2000px;
      height: 2000px;
      /* transform: translateY(-50%); */
      left: -30%;
      top: -120%;
    }
  }
`;
const FormContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;
const SignInSignUpContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 75%;
  transform: translate(-50%, -50%);
  width: 50%;
  display: grid;
  grid-template-columns: 1fr;
  z-index: 5;
  transition: 1s 0.7s ease-in-out;
  @media (max-width: 870px) {
    width: 100%;
    left: 50%;
    top: 95%;
    transform: translate(-50%, -100%);
    transition: 1s 0.8s ease-in-out;
  }
`;
const Formulario = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 0.5rem;
  transition: all 0.2s 0.7s;
  overflow: hidden;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  transition: 0.2s 0.7s ease-in-out;
`;

const Titulo = styled.h2`
  font-size: 2.8rem;
  color: #444;
  margin-bottom: 10px;
`;
const InputField = styled.div`
  max-width: 380px;
  width: 100%;
  height: 55px;
  background-color: #f0f0f0;
  margin: 10px 0;
  border-radius: 50px;
  display: grid;
  grid-template-columns: 15% 85%;
  padding: 0 0.4rem;
  svg {
    text-align: center;
    margin: 00 auto;
    color: #444;
    width: 40%;
    height: 40%;
    object-fit: contain;
  }
`;
const Input = styled.input`
  background: none;
  outline: none;
  border: none;
  line-height: 1;
  font-weight: 600;
  font-size: 1.1rem;
  color: #333;
  ::placeholder {
    font-weight: 500;
    color: #aaa;
  }
`;
const ButtonInput = styled.input`
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
  background-color: #4d70a5;
`;

function AuthPage() {
  return (
    <Container>
      <FormContainer>
        <SignInSignUpContainer>
          <Formulario id="sign_in" action="">
            <Titulo>Iniciar Sesion</Titulo>

            <InputField>
              <FaUserAlt />
              <Input type="text" placeholder="nombre de usuario" />
            </InputField>

            <InputField>
              <FaLock />
              <Input type="password" placeholder="contraseña" />
            </InputField>
            <ButtonInput type="submit" value="Ingresar" />
          </Formulario>
        </SignInSignUpContainer>
      </FormContainer>
    </Container>
  );
}

export default AuthPage;
