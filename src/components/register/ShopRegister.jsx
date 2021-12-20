import styles from "./ShopRegister.module.css";
import { useForm } from "react-hook-form";
import Cookies from "universal-cookie";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { Spinner } from "../spinner/Spinner";

toast.configure();

export function ShopRegister() {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (evento) => {
    setIsLoading(true);
    fetch("http://104.237.129.63:8013/api/users/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(evento),
    })
      .then((response) => {
        if (!response.ok) {
          setIsLoading(false);
          return response.json();
        } else {
          setIsLoading(true);
          toast(response.status + " Cuenta creada.");
          const cookies = new Cookies();
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
              setIsLoading(false);
              toast(json.detail);
            });
          setIsLoading(false);
          return response.json();
        }
      })
      .then(function (json) {
        setIsLoading(false);
        toast(json.email + " or " + json.username);
      });
  };

  if (isLoading) {
    return <Spinner></Spinner>;
  }
  return (
    <div className={styles.registerContainer}>
      <div className={styles.registerInputsContainer}>
        <p className={styles.registerInstructions}>Crear cuenta</p>
        <form
          className={styles.registerInputsForm}
          onSubmit={handleSubmit(onSubmit)}
        >
          <label>
            E-mail:
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
            {errors.email && (
              <span className={styles.spanes}>{errors.email.message}</span>
            )}
          </label>
          <br />
          <br />
          <br />
          <label>
            Nombre de usuario:
            <br />
            <input
              type="text"
              autoComplete="off"
              name="username"
              placeholder="nombre de usuario"
              {...register("username", {
                required: {
                  value: true,
                  message: "El campo es requerido",
                },
                minLength: {
                  value: 8,
                  message:
                    "El nombre de usuario debe tener al menos 8 caracteres",
                },
              })}
            />
            <br />
            {errors.username && (
              <span className={styles.spanes}>{errors.username.message}</span>
            )}
          </label>
          <br />
          <br />
          <br />
          <label>
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
          </label>
          <br />
          <br />
          <br />
          <button className={styles.registerButton}>
            Crea tu cuenta de MercadoLibre
          </button>
        </form>
      </div>
    </div>
  );
}
