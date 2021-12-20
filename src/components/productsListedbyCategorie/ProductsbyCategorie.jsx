import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { get } from "../../utils/httpClient";
import { Spinner } from "../../components/spinner/Spinner";
import styles from "./ProductsbyCategorie.module.css";
import { Slideshow } from "../slideShow/SlideShow";
import { PaymentMethods } from "../paymentMethods/PaymentMethods";
import { ItemCard } from "../card/ItemCard";

export function ProductsbyCategorie() {
  let { categorieId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProduct] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    get(
      "http://104.237.129.63:8013/api/shop/productcategoriesearch/?categorie=" +
        categorieId
    ).then((data) => {
      setProduct(data);
      setIsLoading(false);
    });
  }, [categorieId]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <Slideshow />
      <PaymentMethods />
      <div className={styles.infoArticulos}>
        <p>
          Categoria: {products.name}
          <small>ver todos</small>
        </p>
      </div>
      <ul className={styles.shopGrid}>
        {products.map((product) => (
          <ItemCard key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
}
