import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { FaUserAlt, FaLock, FaEnvelope } from "react-icons/fa";
import {
  FormularioContainer,
  Content,
  Titulo,
  InputField,
  Button,
  ButtonSec,
} from "./styles";
import AlertaContext from "../../../context/alertas/alertaContext";
import AuthContext from "../../../context/auth/authContext";
import AnimationContext from "../../../context/animations/AnimationContext";

const SignIn = (props) => {
  const animaContext = useContext(AnimationContext);
  const { movePanelAuth } = animaContext;
  //contexts
  const alertaContext = useContext(AlertaContext);
  const { alerta, mostrarAlerta } = alertaContext;

  const authContext = useContext(AuthContext);
  const { mensaje, autenticado, registerUser } = authContext;
  let history = useHistory();

  useEffect(() => {
    if (autenticado) {
      history.push("/dashboard");
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
        <Button type="submit" value="Continuar" />
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
