import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "@emotion/styled";
import { FaUserAlt, FaLock } from "react-icons/fa";
import AlertaContext from "../../../context/alertas/alertaContext";
import AuthContext from "../../../context/auth/authContext";
import AnimationContext from "../../../context/animations/AnimationContext";

const FormularioContainer = styled.form`
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
  @media (min-width: 768px) {
    //border: 1px solid red;
  }
`;
const Content = styled.div`
  /* padding-right: 15%;
  */

  h3 {
    font-size: 1.3rem;
  }
  p {
    font-size: 0.7rem;
    padding: 0.5rem 0;
  }
`;

const Titulo = styled.h2`
  font-size: 2.2rem;
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
  outline: none;
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

const Button = styled.input`
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
const ButtonSec = styled(Button)`
  margin: 0;
  background: none;
  border: 2px solid #f02d7b;
  width: 130px;
  height: 41px;
  font-weight: 600;
  font-size: 0.8rem;
  color: #f02d7b;
  text-align: center;
  &:hover{
    color: white;
  }
`;
const Login = (props) => {
  const animaContext = useContext(AnimationContext);
  const { panel, movePanelAuth } = animaContext;

  const authContext = useContext(AuthContext);
  const { mensaje, autenticado, cargandoSpin, loginUser } = authContext;

  const alertaContext = useContext(AlertaContext);
  const { alerta, mostrarAlerta } = alertaContext;
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { email, password } = user;
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //valido que no tenga campos vacios
    if (email.trim() === "" || password.trim() === "") {
      mostrarAlerta("Todos los campos son necesarios", "alerta-error");
      return;
    }
    loginUser(user);
  };
  let history = useHistory();
  useEffect(() => {
    if (autenticado) {
      history.push("/dashboard");
      if (mensaje) {
        mostrarAlerta(mensaje.msg, mensaje.categoria);
      }
    }
  }, [mensaje, autenticado, props.history]);

  return (
    <>
      <FormularioContainer onSubmit={handleSubmit}>
        <Titulo>Iniciar Sesion</Titulo>
        {alerta ? <div className={alerta.categoria}>{alerta.msg}</div> : null}
        <InputField>
          <FaUserAlt />
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="Nombre de usuario o Email"
          />
        </InputField>

        <InputField>
          <FaLock />
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            placeholder="Contraseña"
          />
        </InputField>
        <Button type="submit" value="Entrar" />
      </FormularioContainer>
      <Content>
        <h3>¿Nuevo aqui?</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        <ButtonSec
          onClick={() => movePanelAuth()}
          id="sing-up-btn"
          value="Registrarse"
        />
      </Content>
    </>
  );
};

export default Login;
