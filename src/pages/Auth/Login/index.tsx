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
import { useDispatch, useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import loginuser from "../../../services/loginuser";
import { setAuthenticated, setCurrentUser } from "../../../redux/slices/user";
import { RootState } from "../../../redux/store";
const Login = (props: any) => {
  const [disabled, setdisabled] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const [isFocused2, setIsFocused2] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();
  const autenticathed = useSelector(
    (state: RootState) => state.user.autenticathed
  );
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
    if (email.trim() === "" || password.trim() === "") {
      showNotification2("Todos los campos son necesarios");
      setLoading(true);
      return;
    }

    const request = await loginuser(user);
    if (request.status === 200) {
      setLoading(false);
      dispatch(setAuthenticated(true));
      dispatch(
        setCurrentUser({
          id: request.response._id,
          name: request.response.nombre,
          email: request.response.email,
        })
      );
    }
    setLoading(false);
  };

  useEffect(() => {
    if (autenticathed) {
      history("/dashboard");
      if (mensaje) {
        showNotification2(mensaje.msg);
      }
    }
  }, [mensaje, autenticathed, props.history]);

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
              disabled={disabled}
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
