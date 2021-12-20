import styles from "./AddProduct.module.css";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { get } from "../../utils/httpClient";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Spinner } from "../spinner/Spinner";
import { endBanner } from "../endBanner/EndBanner";

export function AddProduct() {
  const [categories, setcategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    get("http://104.237.129.63:8013/api/shop/categorie/").then((data) => {
      setcategories(data);
      setIsLoading(false);
    });
  }, []);

  function getDate() {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, "0");
    let mm = String(today.getMonth() + 1).padStart(2, "0");
    let yyyy = today.getFullYear();
    let date = mm + "/" + dd + "/" + yyyy;
    return date;
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmitProduct(evento) {
    setIsLoading(true);
    fetch("http://104.237.129.63:8013/api/shop/product/", {
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
          toast(response.status + " Articulo Agregado");
          return response.json();
        }
      })
      .then(function (json) {
        toast(json.detail);
        setIsLoading(false);
      });
  }

  if (isLoading) {
    return <Spinner></Spinner>;
  }
  return (
    <div className={styles.divContainer}>
      <div className={styles.registerInputsContainer}>
        <p className={styles.registerInstructions}>Agregar Articulo</p>
        <form
          onSubmit={handleSubmit(onSubmitProduct)}
          className={styles.loginInputsForm}
        >
          <div className={(styles.divlabel, styles.registerInputsForm)}>
            <label>
              Nombre:
              <br />
              <input
                type="text"
                autoComplete="off"
                name="name"
                placeholder="Nombre del articulo"
                {...register("name", {
                  required: {
                    value: true,
                    message: "El campo es requerido",
                  },
                })}
              />
              <br />
              {errors.name && (
                <span className={styles.spanes}>{errors.name.message}</span>
              )}
            </label>
          </div>
          <div className={styles.registerInputsForm}>
            <label>
              Descripcion:
              <br />
              <input
                type="text"
                autoComplete="off"
                name="description"
                placeholder="Descripcion del articulo"
                {...register("description", {
                  required: {
                    value: true,
                    message: "El campo es requerido",
                  },
                })}
              />
              <br />
              {errors.description && (
                <span className={styles.spanes}>
                  {errors.description.message}
                </span>
              )}
            </label>
          </div>
          <div className={styles.registerInputsForm}>
            <label>
              Dimensiones:
              <br />
              <input
                type="text"
                autoComplete="off"
                name="size"
                placeholder="Ancho x largo x alto"
                {...register("size", {
                  required: {
                    value: true,
                    message: "El campo es requerido",
                  },
                  maxLength: {
                    value: 100,
                    message: "Cantidad de caracteres excedida (100)",
                  },
                })}
              />
              <br />
              {errors.size && (
                <span className={styles.spanes}>{errors.size.message}</span>
              )}
            </label>
          </div>
          <br />
          <div className={styles.divlabel}>
            <label>
              El articulo es nuevo?
              <br />
              <input
                type="checkbox"
                autoComplete="off"
                name="brandNew"
                {...register("brandNew")}
              />
              <br />
              {errors.brandNew && (
                <span className={styles.spanes}>{errors.brandNew.message}</span>
              )}
            </label>
          </div>
          <br />
          <div className={styles.divlabel}>
            <label>
              Enviar a almacen de MercadoLibre?
              <br />
              <input
                type="checkbox"
                autoComplete="off"
                name="inMlStorage"
                {...register("inMlStorage")}
              />
              <br />
              {errors.inMlStorage && (
                <span className={styles.spanes}>
                  {errors.InMlStorage.message}
                </span>
              )}
            </label>
          </div>
          <div className={styles.registerInputsForm}>
            <label>
              Articulos disponibles:
              <br />
              <input
                type="number"
                autoComplete="off"
                name="stock"
                min={1}
                defaultValue={1}
                {...register("stock", {
                  required: {
                    value: true,
                    message: "El campo es requerido",
                  },
                })}
              />
              <br />
              {errors.stock && (
                <span className={styles.spanes}>{errors.stock.message}</span>
              )}
            </label>
          </div>
          <div className={styles.registerInputsForm}>
            <label>
              Precio:
              <br />
              <input
                type="number"
                autoComplete="off"
                name="price"
                min={1}
                defaultValue={1}
                {...register("price", {
                  required: {
                    value: true,
                    message: "El campo es requerido",
                  },
                })}
              />
              <br />
              {errors.price && (
                <span className={styles.spanes}>{errors.price.message}</span>
              )}
            </label>
          </div>
          <div className={styles.registerInputsForm}>
            <label>
              URL de imagen:
              <br />
              <input
                type="text"
                autoComplete="off"
                name="ImgUrl"
                placeholder="www.ejemplo.com/image.jpg"
                {...register("imgUrl", {
                  required: {
                    value: true,
                    message: "El campo es requerido",
                  },
                })}
              />
              <br />
              {errors.imgUrl && (
                <span className={styles.spanes}>{errors.imgUrl.message}</span>
              )}
            </label>
          </div>
          <div className={styles.registerInputsForm}>
            <label>
              Fecha:
              <br />
              <input
                type="date"
                autoComplete="off"
                name="date"
                min={"" + getDate}
                {...register("date", {
                  required: {
                    value: true,
                    message: "El campo es requerido",
                  },
                })}
              />
              <br />
              {errors.date && (
                <span className={styles.spanes}>{errors.date.message}</span>
              )}
            </label>
          </div>
          <div className={styles.registerInputsForm}>
            <label>
              Categorias:
              <br />
              <select
                name="categorieSelect"
                {...register("categorie", {
                  required: {
                    value: true,
                    message: "El campo es requerido",
                  },
                })}
              >
                {categories.map((categoriee) => (
                  <option value={categoriee.id} name="categorie">
                    {categoriee.name}
                  </option>
                ))}
                <br />
                {errors.categorie && (
                  <span className={styles.spanes}>
                    {errors.categorie.message}
                  </span>
                )}
              </select>
            </label>
          </div>
          <br />
          <button className={styles.registerButton}>Crear Articulo</button>
        </form>
      </div>
      <endBanner />
    </div>
  );
}
