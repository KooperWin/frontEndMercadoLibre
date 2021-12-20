import { Link } from "react-router-dom";
import styles from "./CategorieCard.module.css";

export function CategorieCard({ categorie }) {
  const imageUrl = categorie.imgUrl;
  return (
    <div className={styles.containercard}>
      <li className={styles.categoriecard}>
        <Link to={"/productbycategorie/" + categorie.id}>
          <div className={styles.categorieName}>{categorie.name}</div>
          <hr className={styles.hrr} />
          <img
            className={styles.categorieimage}
            src={imageUrl}
            alt={categorie.name}
          />
        </Link>
      </li>
    </div>
  );
}
