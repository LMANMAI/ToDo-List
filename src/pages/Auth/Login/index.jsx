import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "@emotion/styled";
import { FaUserAlt, FaLock } from "react-icons/fa";
import AlertaContext from "../../../context/alertas/alertaContext";
import AuthContext from "../../../context/auth/authContext";
import AnimationContext from "../../../context/animations/AnimationContext";

const FormularioContainer = styled.form`
  //border: 1px solid blue;
  width: 95%;
  height: 40vh;
  border-radius: 50px;
  background-color: #fff;
  box-shadow: -20px 20px 60px #bebebe, 20px -20px 60px #ffffff;
  padding: 1rem;
  position: absolute;
  z-index: 1;
  top: 70px;
  transition: .3s ease-in-out;
  transform: ${(props) => props.position};
  
  @media( min-width: 768px){

  }
`;
const Login = (props) => {
  const animaContext = useContext(AnimationContext);
  const { panel } = animaContext;

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
    <FormularioContainer
      onSubmit={handleSubmit}
      position={panel ? "translateX(150%)" : "translateX(0px)"}
    >
      <h2 className="titulo">Iniciar Sesion</h2>
      {alerta ? <div className={alerta.categoria}>{alerta.msg}</div> : null}
      <div className="input_field">
        <FaUserAlt />
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="Nombre de usuario o Email"
        />
      </div>

      <div className="input_field">
        <FaLock />
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          placeholder="Contraseña"
        />
      </div>
      <input type="submit" className="btn primario" value="Entrar" />
    </FormularioContainer>
  );
};

export default Login;
