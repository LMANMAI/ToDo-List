import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaUserAlt, FaLock } from "react-icons/fa";
import AlertaContext from "../../../context/alertas/alertaContext";
import AuthContext from "../../../context/auth/authContext";
import SpinKit from "../../../components/layout/SpinKit";
import "./index.scss";

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

  useEffect(() => {
    if (autenticado) {
      setTimeout(() => {
        props.history.push("/dashboard");
        if (mensaje) {
          mostrarAlerta(mensaje.msg, mensaje.categoria);
        }
      }, 1000);
    }
  }, [mensaje, autenticado, props.history]);

  return (
    <>
      {alerta ? <div className={alerta.categoria}>{alerta.msg}</div> : null}
      {cargandoSpin ? (
        <SpinKit />
      ) : (
        <>
          <form onSubmit={handleSubmit} className="SignIn">
            <h2 className="SignIn_tittle">Iniciar Sesion</h2>

            <div className="SignIn_inputfield">
              <FaUserAlt />
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                placeholder="Nombre de usuario o Email"
              />
            </div>

            <div className="SignIn_inputfield">
              <FaLock />
              <input
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
                placeholder="Contraseña"
              />
            </div>

            <div className="SignIn_btn_container">
              <Link className="SignIn_btn" to="/singin">
                Obtener Cuenta
              </Link>
              <input
                type="submit"
                className="SignIn_btn-ingreso"
                value="Entrar"
              />
            </div>
          </form>
        </>
      )}
    </>
  );
};

export default Login;
