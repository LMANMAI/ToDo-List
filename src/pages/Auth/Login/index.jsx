import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import {
  FormularioContainer,
  Content,
  Titulo,
  InputField,
  Button,
  ButtonSec,
} from "./styles";
import { FaUserAlt, FaLock } from "react-icons/fa";
import AlertaContext from "../../../context/alertas/alertaContext";
import AuthContext from "../../../context/auth/authContext";
import AnimationContext from "../../../context/animations/AnimationContext";

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
