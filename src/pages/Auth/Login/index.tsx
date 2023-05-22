import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FormularioContainer,
  Content,
  Titulo,
  InputField,
  Button,
  ButtonSec,
  Authwraper,
} from "./styles";
import { FaUserAlt, FaLock } from "react-icons/fa";
import AlertaContext from "../../../context/alertas/alertaContext";
import AuthContext from "../../../context/auth/authContext";
import AnimationContext from "../../../context/animations/AnimationContext";

const Login = (props: any) => {
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
  const handleChange = (e: any) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    //valido que no tenga campos vacios
    if (email.trim() === "" || password.trim() === "") {
      mostrarAlerta("Todos los campos son necesarios", "alerta-error");
      return;
    }
    loginUser(user);
  };
  let history = useNavigate();

  useEffect(() => {
    if (autenticado) {
      history("/dashboard");
      if (mensaje) {
        mostrarAlerta(mensaje.msg, mensaje.categoria);
      }
    }
  }, [mensaje, autenticado, props.history]);

  return (
    <Authwraper style={{ display: "flex", padding: "15px" }}>
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

        <Content>
          <h3>¿Nuevo aqui?</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          <ButtonSec
            onClick={() => movePanelAuth()}
            id="sing-up-btn"
            value="Registrarse"
          />
        </Content>
      </FormularioContainer>
      <div className="image_form relative h-1by2 bg-yellow teal-dark pattern-triangles-xl"></div>
    </Authwraper>
  );
};

export default Login;
