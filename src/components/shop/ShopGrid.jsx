import { useEffect, useState } from "react";
import { get } from "../../utils/httpClient";
import { ItemCard } from "../card/ItemCard";
import styles from "./ShopGrid.module.css";
import { Spinner } from "../spinner/Spinner";
import { useQuery } from "../../hooks/useQuery";
import { Slideshow } from "../slideShow/SlideShow";
import { PaymentMethods } from "../paymentMethods/PaymentMethods";
import { EndBanner } from "../endBanner/EndBanner";

export function ShopGrid() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const query = useQuery();
  const name = query.get("name");

  useEffect(() => {
    setIsLoading(true);
    const searchUrl = name
      ? "http://104.237.129.63:8013/api/shop/product/?name=" + name
      : "http://104.237.129.63:8013/api/shop/product/";
    get(searchUrl).then((data) => {
      setProducts(data);
      setIsLoading(false);
    });
  }, [name]);

  if (isLoading) {
    return <Spinner></Spinner>;
  }
  return (
    <div>
      <Slideshow />
      <PaymentMethods />
      <div className={styles.infoArticulos}>
        <p>
          Productos
          <small>ver todos</small>
        </p>
      </div>
      <ul className={styles.shopGrid}>
        {products.slice(0, 10).map((product) => (
          <ItemCard key={product.id} product={product} />
        ))}
      </ul>
      <EndBanner />
    </div>
  );
}
