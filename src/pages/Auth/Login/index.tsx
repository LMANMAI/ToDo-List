import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FormularioContainer,
  Content,
  Titulo,
  InputField,
  Button,
  ButtonSec,
} from "./styles";
import { Authwraper } from "../styles";
import { FaUserAlt, FaLock } from "react-icons/fa";
import AlertaContext from "../../../context/alertas/alertaContext";
import AlertaState from "../../../context/alertas/alertaState";
import AuthContext from "../../../context/auth/authContext";
import AnimationContext from "../../../context/animations/AnimationContext";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const Login = (props: any) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFocused2, setIsFocused2] = useState(false);
  const idPanel = "login";
  let history = useNavigate();
  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
  };

  const handleInputFocus2 = () => {
    setIsFocused2(true);
  };

  const handleInputBlur2 = () => {
    setIsFocused2(false);
  };

  const animaContext = useContext(AnimationContext);
  const { panel, movePanelAuth } = animaContext;
  const authContext = useContext(AuthContext);
  const { mensaje, autenticado, cargandoSpin, loginUser } = authContext;

  const { alerta, mostrarAlerta, ocultarAlerta } = useContext(AlertaContext);

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
  const handleSubmitLogin = (e: any) => {
    e.preventDefault();
    //valido que no tenga campos vacios
    if (email.trim() === "" || password.trim() === "") {
      mostrarAlerta("Todos los campos son necesarios", "alerta-error");

      return;
    }
    loginUser(user);
  };

  useEffect(() => {
    if (autenticado) {
      history("/dashboard");
      if (mensaje) {
        mostrarAlerta(mensaje.msg, mensaje.categoria);
      }
    }
  }, [mensaje, autenticado, props.history]);

  useEffect(() => {
    if (alerta !== null) {
      toast(alerta.msg, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        toastId: idPanel,
      });
    }
  }, [alerta]);

  return (
    <div>
      <Authwraper>
        <FormularioContainer>
          <div
            style={{
              width: "100%",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Titulo>Iniciar Sesion</Titulo>

            <InputField isFocused={isFocused}>
              <FaUserAlt className={isFocused ? "focused" : ""} />
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                placeholder="Nombre de usuario o Email"
                onFocus={() => handleInputFocus()}
                onBlur={handleInputBlur}
              />
            </InputField>

            <InputField isFocused={isFocused2}>
              <FaLock className={isFocused2 ? "focused" : ""} />
              <input
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
                onFocus={() => handleInputFocus2()}
                onBlur={handleInputBlur2}
                placeholder="Contraseña"
              />
            </InputField>
            <Button
              type="button"
              value="Entrar"
              onClick={(e) => handleSubmitLogin(e)}
            />
          </div>

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
        <div className="image_form"></div>
      </Authwraper>
    </div>
  );
};

export default Login;
