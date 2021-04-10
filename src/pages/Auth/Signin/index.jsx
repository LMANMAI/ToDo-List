import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { FaUserAlt, FaLock, FaEnvelope } from "react-icons/fa";
import styled from "@emotion/styled";
import AlertaContext from "../../../context/alertas/alertaContext";
import AuthContext from "../../../context/auth/authContext";
import AnimationContext from "../../../context/animations/AnimationContext";

const FormularioContainer = styled.form`
  width: 100%;
  height: fit-content;
  border-radius: 50px;
  box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
  padding: 1rem;
  background-color: #ffffff;
  transform: ${(props) => props.position};
  display: flex;
  flex-direction: column;
  margin: 1rem;
  align-items: center;
  @media (min-width: 768px) {
    /* width: 30%; */
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
  &:hover {
    color: white;
  }
`;
const SignIn = (props) => {
  const animaContext = useContext(AnimationContext);
  const {movePanelAuth } = animaContext;
  //contexts
  const alertaContext = useContext(AlertaContext);
  const { alerta, mostrarAlerta } = alertaContext;

  const authContext = useContext(AuthContext);
  const { mensaje, autenticado, registerUser } = authContext;
  let history = useHistory();

  useEffect(() => {
    if (autenticado) {
      history.push("/dashboard")
    }
    if (mensaje) {
      mostrarAlerta(mensaje.msg, mensaje.categoria);
    }
  }, [autenticado, mensaje, props.history]);


  const [usern, setUserN] = useState({
    nombre: "",
    email: "",
    password: "",
    confirmar: "",
  });
  const { nombre, email, password, confirmar } = usern;
  //Funciones
  const handleChange = (e) => {
    setUserN({
      ...usern,
      [e.target.name]: e.target.value,
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('funciton working')
    if (
      nombre.trim() === "" ||
      email.trim() === "" ||
      password.trim() === "" ||
      confirmar.trim() === ""
    ) {
      mostrarAlerta("Todos los campos son obligatorios", "alerta-error");
      return;
    }
    //pasword minimo de 6 caracteres
    if (password.length < 6) {
      mostrarAlerta(
        "el password debe ser de al menos 6 caracteres",
        "alerta-error"
      );
      return;
    }
    //los dos passwords iguales
    if (password.trim() !== confirmar.trim()) {
      mostrarAlerta("Los passwords deben ser iguales", "alerta-error");
      return;
    }
    //pasarlo al action
    registerUser({
      nombre,
      email,
      password,
    });
   
  };

  return (
    <>
      <FormularioContainer onSubmit={handleSubmit}>
        {alerta ? <div className={alerta.categoria}>{alerta.msg}</div> : null}
        <Titulo>Obtener una Cuenta</Titulo>
        <InputField>
          <FaUserAlt />
          <input
            type="text"
            name="nombre"
            value={nombre}
            onChange={handleChange}
            placeholder="Nombre de usuario"
          />
        </InputField>

        <InputField>
          <FaEnvelope />
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="Email"
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

        <InputField>
          <FaLock />
          <input
            type="password"
            name="confirmar"
            value={confirmar}
            onChange={handleChange}
            placeholder="Repetir Contraseña"
          />
        </InputField>
        <Button type="submit" value="Continuar"/>
      </FormularioContainer>
      <Content>
        <h3>¿Ya tienes una cuenta?</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        <ButtonSec onClick={() => movePanelAuth()} value="Iniciar Sesion" />
      </Content>
    </>
  );
};

export default SignIn;
