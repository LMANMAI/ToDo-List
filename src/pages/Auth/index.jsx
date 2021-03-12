import React from "react";
import styled from "styled-components";
import { FaLock, FaUserAlt } from "react-icons/fa";

const AuthContainer = styled.div`
  position: relative;
  width: 100vw;
  min-height: 100vh;
  background-color: #fff;
  overflow: hidden;
  /* ::before {
    content: "";
    position: absolute;
    width: 2000px;
    height: 2000px;
    border-radius: 50%;
    right: -10%;
    bottom: -110%;
    background: #4d70a5;
    transform: translateY(-50%);
    z-index: 6;
    transition: 1.8s all ease-in-out; 
  }*/
`;
const FormContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;
const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 15%;
  /* transform: translate(-50%, -50%); */
  width: 70%;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr;
  z-index: 5;
  transition: 1s 0.7s ease-in-out;
`;
const Formulario = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0.5rem 1.5rem;
  overflow: hidden;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  transition: 0.2s 0.7s ease-in-out;
`;
const Titulo = styled.h1`
  font-size: 2.8rem;
  color: #444;
  margin-bottom: 10px;
`;
const InputField = styled.div`
  max-width: 500px;
  width: 100%;
  height: 55px;
  background-color: #f0f0f0;
  margin: 10px 0;
  border-radius: 50px;
  display: grid;
  grid-template-columns: 15% 85%;
  align-items: center;
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
const ButtonInput = styled.input`
  width: 150px;
  height: 50px ;
  border-radius: 55px;
  border: none;
  outline: none;
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
  margin: 10px 0;
  transition: .5s;
  cursor: pointer;
  background-color: #4d70a5;
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
function AuthPage() {
  return (
    <AuthContainer>
      <FormContainer>
        <Wrapper>
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
            <ButtonInput type="submit" value="Ingresar"/>
          </Formulario>
        </Wrapper>
      </FormContainer>
    </AuthContainer>
  );
}

export default AuthPage;
