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
import AnimationContext from "../../../context/animations/AnimationContext";
import { toast, ToastContainer } from "react-toastify";
import registeruser from "../../../services/registeruser";
import { useDispatch, useSelector } from "react-redux";
import { setAuthenticated, setCurrentUser } from "../../../redux/slices/user";
import { RootState } from "../../../redux/store";
type ToastType = "success" | "info" | "warning" | "error";

const SignIn = (props: any) => {
  const dispatch = useDispatch();
  let history = useNavigate();
  const autenticathed = useSelector(
    (state: RootState) => state.user.autenticathed
  );
  const { movePanelAuth } = useContext(AnimationContext);
  const [toastId, setToastId] = useState<any | null>(null);
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
      showNotification(
        "Todos los campos son necesarios",
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
          theme: "dark",
        },
        "warning"
      );
      setLoading(false);
      return;
    }
    //pasword minimo de 6 caracteres
    if (password.length < 6) {
      showNotification(
        "Las contraseñas deben tener un minimos de 6 caracteres.",
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
          theme: "dark",
        },
        "warning"
      );
      setLoading(false);
      return;
    }
    //los dos passwords iguales
    if (password.trim() !== confirmar.trim()) {
      showNotification(
        "Las contraseñas deben ser iguales.",
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
          theme: "dark",
        },
        "warning"
      );
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
    } else {
      showNotification(
        request.mensaje?.msg,
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
          theme: "dark",
        },
        "error"
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
      window.location.reload();
    }
  }, [autenticathed, props.history]);

  const showNotification = (msg: string, body: any, type: ToastType) => {
    const id = toast[type](msg, body);
    setToastId(id);
  };

  const clearNotification = () => {
    if (toastId) {
      toast.dismiss(toastId);
      setToastId(null);
    }
  };
  return (
    <div>
      <ToastContainer />
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
            <ButtonSec
              onClick={() => {
                clearNotification();
                movePanelAuth();
              }}
              value="Iniciar Sesion"
            />
          </Content>
        </FormularioContainer>
        <div className="image_form"></div>
      </Authwraper>
    </div>
  );
};

export default SignIn;
