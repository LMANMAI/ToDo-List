import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserAlt, FaLock, FaEnvelope } from "react-icons/fa";
import {
  FormularioContainer,
  Content,
  Titulo,
  InputField,
  Button,
  ButtonSec,
} from "./styles";
import { Authwraper } from "../styles";
import AuthContext from "../../../context/auth/authContext";
import AnimationContext from "../../../context/animations/AnimationContext";
import { toast } from "react-toastify";
import registeruser from "../../../services/registeruser";
import { useDispatch, useSelector } from "react-redux";
import { setAuthenticated, setCurrentUser } from "../../../redux/slices/user";
import { RootState } from "../../../redux/store";

const SignIn = (props: any) => {
  const dispatch = useDispatch();
  let history = useNavigate();
  const autenticathed = useSelector(
    (state: RootState) => state.user.autenticathed
  );
  const { movePanelAuth } = useContext(AnimationContext);
  const { mensaje } = useContext(AuthContext);

  const [loading, setLoading] = useState<boolean>(false);
  const [fields, setFields] = useState([
    { name: "nombre", isFocused: false },
    { name: "email", isFocused: false },
    { name: "password", isFocused: false },
    { name: "confirmar", isFocused: false },
  ]);
  const [usern, setUserN] = useState<any>({
    nombre: "",
    email: "",
    password: "",
    confirmar: "",
  });
  const { nombre, email, password, confirmar } = usern;

  //Funciones
  const handleChange = (e: any) => {
    setUserN({
      ...usern,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    if (
      nombre.trim() === "" ||
      email.trim() === "" ||
      password.trim() === "" ||
      confirmar.trim() === ""
    ) {
      showNotification1("Todos los campos son obligatorios");
      setLoading(false);
      return;
    }
    //pasword minimo de 6 caracteres
    if (password.length < 6) {
      showNotification1("el password debe ser de al menos 6 caracteres");
      setLoading(false);
      return;
    }
    //los dos passwords iguales
    if (password.trim() !== confirmar.trim()) {
      showNotification1("Las contraseñas deben ser iguales");
      setLoading(false);
      return;
    }
    const request = await registeruser(usern);
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

  const handleInputFocus = (fieldName: string) => {
    setFields((prevFields) =>
      prevFields.map((field) =>
        field.name === fieldName ? { ...field, isFocused: true } : field
      )
    );
  };

  const handleInputBlur = (fieldName: string) => {
    setFields((prevFields) =>
      prevFields.map((field) =>
        field.name === fieldName ? { ...field, isFocused: false } : field
      )
    );
  };

  const getFieldIcon = (fieldName: string) => {
    switch (fieldName) {
      case "nombre":
        return <FaUserAlt />;
      case "email":
        return <FaEnvelope />;
      case "password":
      case "confirmar":
        return <FaLock />;
      default:
        return null;
    }
  };

  const getFieldPlaceholder = (fieldName: string) => {
    switch (fieldName) {
      case "nombre":
        return "Nombre de usuario";
      case "email":
        return "Email";
      case "password":
        return "Contraseña";
      case "confirmar":
        return "Repetir Contraseña";
      default:
        return "";
    }
  };

  useEffect(() => {
    if (autenticathed) {
      history("/dashboard");
    }
    if (mensaje) {
      showNotification1(mensaje.msg);
    }
  }, [autenticathed, mensaje, props.history]);

  const showNotification1 = (msg: string) => {
    toast(msg);
  };

  return (
    <div>
      <Authwraper>
        <FormularioContainer>
          <div className="form__container">
            <Titulo>Obtener una Cuenta</Titulo>
            {fields.map((field) => (
              <InputField key={field.name} isFocused={field.isFocused}>
                {getFieldIcon(field.name)}
                <input
                  type={
                    field.name === "password" || field.name === "confirmar"
                      ? "password"
                      : "text"
                  }
                  name={field.name}
                  value={usern[field.name]}
                  onChange={handleChange}
                  placeholder={getFieldPlaceholder(field.name)}
                  onFocus={() => handleInputFocus(field.name)}
                  onBlur={() => handleInputBlur(field.name)}
                />
              </InputField>
            ))}
            <Button
              type="button"
              value="Continuar"
              disabled={loading}
              onClick={(e) => {
                handleSubmit(e);
              }}
            />
          </div>
          <Content>
            <h3>¿Ya tienes una cuenta?</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            <ButtonSec onClick={() => movePanelAuth()} value="Iniciar Sesion" />
          </Content>
        </FormularioContainer>
        <div className="image_form"></div>
      </Authwraper>
    </div>
  );
};

export default SignIn;
