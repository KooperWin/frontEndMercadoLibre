import styles from "./ShopLogin.module.css";
import { useForm } from "react-hook-form";
import Cookies from "universal-cookie";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { Spinner } from "../spinner/Spinner";
import { useState } from "react";

toast.configure();

export function ShopLogin() {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmitLogin(evento) {
    const cookies = new Cookies();
    setIsLoading(true);
    fetch("http://104.237.129.63:8013/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(evento),
    })
      .then((response) => {
        if (!response.ok) {
          setIsLoading(false);
          return response.json();
        } else {
          setIsLoading(false);
          toast(response.status + " Iniciaste sesion");
          return response.json();
        }
      })
      .then(function (json) {
        localStorage.setItem("email", evento.email);
        localStorage.setItem("jwt-token", json.jwt);
        cookies.set("jwtCookie", json.jwt, { path: "/" });
        toast(json.detail);
        setIsLoading(false);
      });
  }

  if (isLoading) {
    return <Spinner></Spinner>;
  }

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginInputsContainer}>
        <p className={styles.loginInstructions}>
          !Hola! Ingresa tu e-mail y contraseña
        </p>
        <form
          onSubmit={handleSubmit(onSubmitLogin)}
          className={styles.loginInputsForm}
        >
          <label>
            <span>E-mail:</span>
          </label>
          <br />
          <input
            type="text"
            autoComplete="off"
            name="email"
            placeholder="ejemplo@gmail.com"
            {...register("email", {
              required: {
                value: true,
                message: "El campo es requerido",
              },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "El formato no es correcto",
              },
            })}
          />
          <br />
          {errors.email && <span>{errors.email.message}</span>}
          <br />
          <br />
          <br />
          Contraseña:
          <br />
          <input
            type="password"
            name="password"
            placeholder="contraseña"
            {...register("password", {
              required: {
                value: true,
                message: "El campo es requerido",
              },
              minLength: {
                value: 6,
                message: "La contraseña debe tener al menos 6 caracteres",
              },
            })}
          />
          <br />
          {errors.password && <span>{errors.password.message}</span>}
          <br />
          <br />
          <br />
          <button className={styles.loginButton}>Continuar</button>
        </form>
        <br />
        <p>Aun no tienes cuenta?</p>
        <Link to="/registerpage">
          <p className={styles.createAccountButton}>Crear cuenta</p>
        </Link>
      </div>
    </div>
  );
}
