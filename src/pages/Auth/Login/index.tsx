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
import AuthContext from "../../../context/auth/authContext";
import AnimationContext from "../../../context/animations/AnimationContext";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import loginuser from "../../../services/loginuser";

const Login = (props: any) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFocused2, setIsFocused2] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);
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

  const uiContext = useContext(AnimationContext);
  const { movePanelAuth } = uiContext;
  const { mensaje, autenticado, loginUser } = useContext(AuthContext);

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
  const handleSubmitLogin = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    //valido que no tenga campos vacios
    if (email.trim() === "" || password.trim() === "") {
      showNotification2("Todos los campos son necesarios");
      setLoading(false);
      return;
    }
    const request = await loginuser(user);
    console.log(request);
    // loginUser(user);
    setLoading(false);
  };

  useEffect(() => {
    if (autenticado) {
      history("/dashboard");
      if (mensaje) {
        showNotification2(mensaje.msg);
      }
    }
  }, [mensaje, autenticado, props.history]);

  const showNotification2 = (msg: string) => {
    toast(msg);
  };

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
              disabled={loading}
              onClick={(e) => {
                handleSubmitLogin(e);
              }}
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
