import styles from "./ItemDetails.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { get } from "../utils/httpClient";
import { Spinner } from "../components/spinner/Spinner";
import { EndBanner } from "../components/endBanner/EndBanner";

export function ItemDetails() {
  let { productId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    get("http://104.237.129.63:8013/api/shop/product/" + productId).then(
      (data) => {
        setProduct(data);
        setIsLoading(false);
      }
    );
  }, [productId]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className={styles.detailsContainer}>
      <img
        className={`${styles.col} ${styles.productimage}`}
        src={product.imgUrl}
        alt={product.name}
      />

      <div className={`${styles.middleColumn} ${styles.productDetails}`}>
        <p>{product.name}</p>
        <p>
          ${product.price}
          <br />
          Ver los medios de pago
        </p>
        <p>OFERTA DEL DIA</p>
      </div>
      <div className={`${styles.rightContainer} ${styles.col}`}>
        <p>
          Llega gratis el miercoles FULL
          <br />
          Comprando dentro de las próximas
          <br />
          5h 49min
          <br />
          Enviar a Puerta del Sol 742
        </p>
        <p>
          Retíralo gratis a partir del miércoles en correos y otros puntos
          <br /> Comprando dentro de las próximas
          <br />
          5h 49min
          <br />
          Ver en el mapa
        </p>
        <strong>Stock Disponible</strong>
        <p className={styles.firstP}>{product.stock}</p>

        <div className={styles.sellectContainer}>
          <p>Cantidad: </p>
          <input
            className={styles.inputStock}
            type="number"
            min={1}
            max={product.stock}
            defaultValue={1}
          />
        </div>
        <br />
        <button className={styles.loginButton}>Comprar</button>
      </div>
      <div className={`${styles.downContainer} ${styles.colDown}`}>
        <p>CARACTERISTICAS DE {product.name}:</p>
        <p>{product.description}</p>
        <p>DIMENSIONES: {product.size}</p>
        <p>NUEVO: {product.brandNew}</p>
        <p>EN ALMACEN DE MERCADO LIBRE: {product.inMlStorage}</p>
        <p>STOCK: {product.stock}</p>
        <p>PRECIO: ${product.price}</p>
        <p>FECHA: {product.date}</p>
      </div>
      <EndBanner />
    </div>
  );
}
