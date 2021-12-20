import styles from "./ItemDetails.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { get } from "../utils/httpClient";
import { Spinner } from "../components/spinner/Spinner";

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
      <div className={`${styles.col} ${styles.productDetails}`}>
        <strong>Name: </strong>
        <p className={styles.firstP}>{product.name}</p>
        <strong>Description: </strong>
        <p>{product.description}</p>
        <strong>Price: $</strong>
        <p>{product.price}</p>
      </div>
    </div>
  );
}
