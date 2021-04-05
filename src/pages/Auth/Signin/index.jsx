import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { FaUserAlt, FaLock, FaEnvelope } from "react-icons/fa";
import styled from "@emotion/styled";
import AlertaContext from "../../../context/alertas/alertaContext";
import AuthContext from "../../../context/auth/authContext";
import AnimationContext from "../../../context/animations/AnimationContext";

const FormularioContainer = styled.form`
  //border: 1px solid blue;
  width: 95%;
  height: 40vh;
  border-radius: 50px;
  margin-right: 1rem;
  box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
  padding: 1rem;
  position: absolute;
  background-color: #ffffff;
  top: 70px;  
  left: 12px;
  transition: .3s ease-in-out;
  transform: ${(props) => props.position};
  // display: none;
`;

const SignIn = (props) => {
  const animaContext = useContext(AnimationContext);
  const { panel } = animaContext;
  //contexts
  const alertaContext = useContext(AlertaContext);
  const { alerta, mostrarAlerta } = alertaContext;

  const authContext = useContext(AuthContext);
  const { mensaje, autenticado, cargandoSpin, registerUser } = authContext;
  let history = useHistory();
  useEffect(() => {
    if (autenticado) {
      setTimeout(() => {
        history.push("/dashboard");
      }, 2000);
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
    <FormularioContainer
      onSubmit={handleSubmit}
      position={!panel ? "translateX(-150%)" : "translateX(0px)"}
    >
      {alerta ? <div className={alerta.categoria}>{alerta.msg}</div> : null}
      <h2 className="titulo">Obtener una Cuenta</h2>
      <div className="input_field">
        <FaUserAlt />
        <input
          type="text"
          name="nombre"
          value={nombre}
          onChange={handleChange}
          placeholder="Nombre de usuario"
        />
      </div>

      <div className="input_field">
        <FaEnvelope />
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="Email"
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

      <div className="input_field">
        <FaLock />
        <input
          type="password"
          name="confirmar"
          value={confirmar}
          onChange={handleChange}
          placeholder="Repetir Contraseña"
        />
      </div>
      <input type="submit" className="btn primario" value="Continuar" />
    </FormularioContainer>
  );
};

export default SignIn;
