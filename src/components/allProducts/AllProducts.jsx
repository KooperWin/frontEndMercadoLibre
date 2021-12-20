import { useEffect, useState } from "react";
import { get } from "../../utils/httpClient";
import { ItemCard } from "../card/ItemCard";
import styles from "./AllProducts.module.css";
import { Spinner } from "../spinner/Spinner";
import { useQuery } from "../../hooks/useQuery";
import { Slideshow } from "../slideShow/SlideShow";
import { PaymentMethods } from "../paymentMethods/PaymentMethods";
import { EndBanner } from "../endBanner/EndBanner";
import { Link } from "react-router-dom";

export function AllProducts() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    get("http://104.237.129.63:8013/api/shop/product/").then((data) => {
      setProducts(data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <Spinner></Spinner>;
  }
  return (
    <div>
      <Slideshow />
      <PaymentMethods />
      <div className={styles.infoArticulos}>
        <p>Lista completa de productos</p>
      </div>
      <ul className={styles.shopGrid}>
        {products.map((product) => (
          <ItemCard key={product.id} product={product} />
        ))}
      </ul>
      <EndBanner />
    </div>
  );
}
