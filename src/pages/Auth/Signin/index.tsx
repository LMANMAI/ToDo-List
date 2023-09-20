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
import AlertaContext from "../../../context/alertas/alertaContext";
import AlertaState from "../../../context/alertas/alertaState";
import AuthContext from "../../../context/auth/authContext";
import AnimationContext from "../../../context/animations/AnimationContext";
import { toast } from "react-toastify";

const SignIn = (props: any) => {
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
  const idPanel = "singin";
  //Funciones
  const handleChange = (e: any) => {
    setUserN({
      ...usern,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e: any) => {
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
      mostrarAlerta("Las contraseñas deben ser iguales", "alerta-error");
      return;
    }
    //pasarlo al action
    registerUser({
      nombre,
      email,
      password,
    });
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

  const animaContext = useContext(AnimationContext);
  const { movePanelAuth } = animaContext;
  //contexts
  const alertaContext = useContext(AlertaContext);
  const { alerta, mostrarAlerta } = alertaContext;

  const authContext = useContext(AuthContext);
  const { mensaje, autenticado, registerUser } = authContext;
  let history = useNavigate();

  useEffect(() => {
    if (autenticado) {
      history("/dashboard");
    }
    if (mensaje) {
      mostrarAlerta(mensaje.msg, mensaje.categoria);
    }
  }, [autenticado, mensaje, props.history]);

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
            type="submit"
            value="Continuar"
            onClick={(e) => handleSubmit(e)}
          />
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
