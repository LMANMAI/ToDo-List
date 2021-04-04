import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "@emotion/styled";
import { FaUserAlt, FaLock } from "react-icons/fa";
import AlertaContext from "../../../context/alertas/alertaContext";
import AuthContext from "../../../context/auth/authContext";

const FormularioContainer = styled.form`
  //border: 1px solid blue;
  width: 90vw;
  height: 40vh;
  border-radius: 50px;
 //background: #e0e0e0;
  box-shadow: -20px 20px 60px #bebebe, 20px -20px 60px #ffffff;
  padding: 1rem;
  margin-right: 4rem;
  margin-left: 1rem;
`;
const Login = (props) => {
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
    <FormularioContainer onSubmit={handleSubmit} className="sing_in_form">
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
