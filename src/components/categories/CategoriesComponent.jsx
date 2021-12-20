import { useEffect, useState } from "react";
import { get } from "../../utils/httpClient";
import { CategorieCard } from "../categorieCard/CategorieCard";
import { PaymentMethods } from "../paymentMethods/PaymentMethods";
import { Slideshow } from "../slideShow/SlideShow";
import { Spinner } from "../spinner/Spinner";
import styles from "./CategoriesComponent.module.css";

export function CategoriesComponent() {
  const [categories, setcategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    get("http://104.237.129.63:8013/api/shop/categorie/").then((data) => {
      setcategories(data);
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
      <div className={styles.infoCategories}>
        <p>Categorias</p>
      </div>
      <ul className={styles.categoriesGrid}>
        {categories.map((categorie) => (
          <CategorieCard key={categorie.id} categorie={categorie} />
        ))}
      </ul>
    </div>
  );
}
